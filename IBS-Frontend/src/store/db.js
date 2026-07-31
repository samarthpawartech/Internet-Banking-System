// A tiny localStorage-backed "database" so the Customer, Employee and Admin
// areas genuinely interact within one browser (register as a customer, see it
// appear in the employee queue, approve it, see the customer's status change).
// There is no real server here — see README for the full disclaimer.

const KEYS = {
  customers: 'ibs_customers',
  employees: 'ibs_employees',
  admins: 'ibs_admins',
  transactions: 'ibs_transactions',
  beneficiaries: 'ibs_beneficiaries',
  cards: 'ibs_cards',
  auditLogs: 'ibs_audit_logs',
  loginHistory: 'ibs_login_history',
  settings: 'ibs_settings',
  seeded: 'ibs_seeded_v1',
};

function read(key, fallback) {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  if (typeof window === 'undefined') return value;
  window.localStorage.setItem(key, JSON.stringify(value));
  return value;
}

function uid(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function nowIso() {
  return new Date().toISOString();
}

export function seedIfNeeded() {
  if (typeof window === 'undefined') return;
  if (window.localStorage.getItem(KEYS.seeded)) return;

  const customers = [
    {
      id: 'cust-1', fullName: 'Ananya Iyer', email: 'ananya.iyer@ibs.example', mobile: '9876500001',
      username: 'ananya.iyer', password: 'Welcome@123', pan: 'ABCDE1234F', dob: '1994-03-12', city: 'Bengaluru',
      accountNumber: 'IBS0100000001', kycStatus: 'verified', accountStatus: 'active', locked: false,
      balance: 84250, createdAt: nowIso(),
    },
    {
      id: 'cust-2', fullName: 'Rohit Malhotra', email: 'rohit.malhotra@ibs.example', mobile: '9876500002',
      username: 'rohit.malhotra', password: 'Welcome@123', pan: 'BCDEA2345G', dob: '1990-07-22', city: 'Mumbai',
      accountNumber: 'IBS0100000002', kycStatus: 'pending', accountStatus: 'pending', locked: false,
      balance: 0, createdAt: nowIso(),
    },
  ];
  const employees = [
    { id: 'emp-1', name: 'Kavya Nair', email: 'kavya.nair@ibs.example', username: 'kavya.nair', password: 'Welcome@123', branch: 'Bandra Kurla Complex, Mumbai', status: 'active', createdAt: nowIso() },
  ];
  const admins = [
    { id: 'admin-1', name: 'Arjun Verma', email: 'arjun.verma@ibs.example', username: 'arjun.verma', password: 'Welcome@123', role: 'superadmin', status: 'active', createdAt: nowIso() },
  ];
  const transactions = [
    { id: uid('txn'), customerId: 'cust-1', type: 'deposit', amount: 50000, status: 'completed', date: nowIso(), note: 'Initial deposit', beneficiary: '' },
  ];
  const settings = {
    interestRates: { regularSavings: 3.5, premiumSavings: 4.5, seniorCitizen: 5.0, fixedDeposit: 7.75 },
    transactionLimits: { autoApproveUpTo: 50000, dailyLimit: 200000 },
    serviceCharges: { chequeBook: 100, debitCardAnnual: 0, prematureFdPenalty: 1 },
  };

  write(KEYS.customers, customers);
  write(KEYS.employees, employees);
  write(KEYS.admins, admins);
  write(KEYS.transactions, transactions);
  write(KEYS.beneficiaries, []);
  write(KEYS.cards, []);
  write(KEYS.auditLogs, [{ id: uid('log'), actor: 'system', action: 'System initialized', target: '', timestamp: nowIso() }]);
  write(KEYS.loginHistory, []);
  write(KEYS.settings, settings);
  window.localStorage.setItem(KEYS.seeded, '1');
}

export function resetDemoData() {
  if (typeof window === 'undefined') return;
  Object.values(KEYS).forEach((k) => window.localStorage.removeItem(k));
  seedIfNeeded();
}

// ---------- getters ----------
export const getCustomers = () => read(KEYS.customers, []);
export const getEmployees = () => read(KEYS.employees, []);
export const getAdmins = () => read(KEYS.admins, []);
export const getTransactions = () => read(KEYS.transactions, []);
export const getBeneficiaries = () => read(KEYS.beneficiaries, []);
export const getCards = () => read(KEYS.cards, []);
export const getAuditLogs = () => read(KEYS.auditLogs, []);
export const getLoginHistory = () => read(KEYS.loginHistory, []);
export const getSettings = () => read(KEYS.settings, {});

// ---------- audit / login logging ----------
export function logAudit(actor, action, target = '') {
  const logs = getAuditLogs();
  logs.unshift({ id: uid('log'), actor, action, target, timestamp: nowIso() });
  write(KEYS.auditLogs, logs.slice(0, 500));
}

export function logLogin(username, role) {
  const hist = getLoginHistory();
  hist.unshift({ id: uid('lh'), username, role, timestamp: nowIso() });
  write(KEYS.loginHistory, hist.slice(0, 500));
}

// ---------- customer ----------
export function registerCustomer(data) {
  const customers = getCustomers();
  if (customers.some((c) => c.username.toLowerCase() === data.username.toLowerCase())) {
    throw new Error('That username is already taken.');
  }
  const record = {
    id: uid('cust'),
    ...data,
    accountNumber: `IBS0${Math.floor(100000000 + Math.random() * 900000000)}`,
    kycStatus: 'pending',
    accountStatus: 'pending',
    locked: false,
    balance: 0,
    createdAt: nowIso(),
  };
  write(KEYS.customers, [...customers, record]);
  logAudit(data.username, 'Customer self-registered', record.accountNumber);
  return record;
}

export const findCustomerByUsername = (username) => getCustomers().find((c) => c.username.toLowerCase() === username.toLowerCase());
export const findCustomerById = (id) => getCustomers().find((c) => c.id === id);

export function updateCustomer(id, patch) {
  const customers = getCustomers().map((c) => (c.id === id ? { ...c, ...patch } : c));
  write(KEYS.customers, customers);
  return customers.find((c) => c.id === id);
}

export function deleteCustomer(id, actor) {
  const c = findCustomerById(id);
  write(KEYS.customers, getCustomers().filter((c) => c.id !== id));
  logAudit(actor, 'Deleted customer record', c?.accountNumber);
}

export function approveCustomer(id, actor) {
  const c = updateCustomer(id, { kycStatus: 'verified', accountStatus: 'active' });
  logAudit(actor, 'Approved KYC & activated account', c?.accountNumber);
  return c;
}
export function rejectCustomer(id, actor) {
  const c = updateCustomer(id, { kycStatus: 'rejected', accountStatus: 'rejected' });
  logAudit(actor, 'Rejected KYC', c?.accountNumber);
  return c;
}
export function setAccountStatus(id, status, actor) {
  const c = updateCustomer(id, { accountStatus: status });
  logAudit(actor, `Set account status to "${status}"`, c?.accountNumber);
  return c;
}
export function setLocked(id, locked, actor) {
  const c = updateCustomer(id, { locked });
  logAudit(actor, locked ? 'Locked account (security)' : 'Unlocked account', c?.accountNumber);
  return c;
}

// ---------- employees ----------
export function addEmployee(data, actor) {
  const record = { id: uid('emp'), status: 'active', createdAt: nowIso(), ...data };
  write(KEYS.employees, [...getEmployees(), record]);
  logAudit(actor, 'Added employee', data.username);
  return record;
}
export function updateEmployee(id, patch, actor) {
  const employees = getEmployees().map((e) => (e.id === id ? { ...e, ...patch } : e));
  write(KEYS.employees, employees);
  logAudit(actor, 'Updated employee', id);
  return employees.find((e) => e.id === id);
}
export function deleteEmployee(id, actor) {
  write(KEYS.employees, getEmployees().filter((e) => e.id !== id));
  logAudit(actor, 'Deleted employee', id);
}
export function resetEmployeePassword(id, actor) {
  const tempPassword = Math.random().toString(36).slice(2, 10);
  updateEmployee(id, { password: tempPassword }, actor);
  logAudit(actor, 'Reset employee password', id);
  return tempPassword;
}

// ---------- admins ----------
export function addAdmin(data, actor) {
  const record = { id: uid('admin'), status: 'active', role: 'admin', createdAt: nowIso(), ...data };
  write(KEYS.admins, [...getAdmins(), record]);
  logAudit(actor, 'Added admin', data.username);
  return record;
}
export function updateAdmin(id, patch, actor) {
  const admins = getAdmins().map((a) => (a.id === id ? { ...a, ...patch } : a));
  write(KEYS.admins, admins);
  logAudit(actor, 'Updated admin', id);
  return admins.find((a) => a.id === id);
}
export function deleteAdmin(id, actor) {
  write(KEYS.admins, getAdmins().filter((a) => a.id !== id));
  logAudit(actor, 'Deleted admin', id);
}

// ---------- transactions ----------
function applyBalanceChange(customerId, type, amount) {
  const customers = getCustomers();
  const idx = customers.findIndex((c) => c.id === customerId);
  if (idx === -1) return;
  const delta = type === 'deposit' ? amount : -amount;
  customers[idx] = { ...customers[idx], balance: Math.max(0, (customers[idx].balance || 0) + delta) };
  write(KEYS.customers, customers);
}

export function createTransaction({ customerId, type, amount, note, beneficiary }) {
  const settings = getSettings();
  const autoLimit = settings.transactionLimits?.autoApproveUpTo ?? 50000;
  const needsApproval = (type === 'transfer' || type === 'bill' || type === 'recharge') && amount > autoLimit;
  const txn = {
    id: uid('txn'), customerId, type, amount,
    note: note || '', beneficiary: beneficiary || '',
    status: needsApproval ? 'pending' : 'completed',
    date: nowIso(),
  };
  write(KEYS.transactions, [txn, ...getTransactions()]);
  if (!needsApproval) applyBalanceChange(customerId, type, amount);
  return txn;
}

// Customer-initiated deposit requests (cash/cheque at branch or ATM) always need an
// employee to physically/procedurally verify the deposit before it credits the
// account — unlike transfers, this isn't just a limit check.
export function requestDeposit(customerId, amount, method, note) {
  const txn = {
    id: uid('txn'), customerId, type: 'deposit', amount,
    note: note || '', beneficiary: method || 'Cash Deposit',
    status: 'pending',
    date: nowIso(),
  };
  write(KEYS.transactions, [txn, ...getTransactions()]);
  return txn;
}

export const getTransactionsFor = (customerId) => getTransactions().filter((t) => t.customerId === customerId);

export function approveTransaction(id, actor) {
  const txn = getTransactions().find((t) => t.id === id);
  if (!txn) return null;
  write(KEYS.transactions, getTransactions().map((t) => (t.id === id ? { ...t, status: 'completed' } : t)));
  applyBalanceChange(txn.customerId, txn.type, txn.amount);
  logAudit(actor, 'Approved transaction', id);
  return txn;
}
export function rejectTransaction(id, actor) {
  write(KEYS.transactions, getTransactions().map((t) => (t.id === id ? { ...t, status: 'rejected' } : t)));
  logAudit(actor, 'Rejected transaction', id);
}
export function reverseTransaction(id, actor) {
  const txn = getTransactions().find((t) => t.id === id);
  if (!txn) return null;
  write(KEYS.transactions, getTransactions().map((t) => (t.id === id ? { ...t, status: 'reversed' } : t)));
  if (txn.status === 'completed') applyBalanceChange(txn.customerId, txn.type === 'deposit' ? 'transfer' : 'deposit', txn.amount);
  logAudit(actor, 'Reversed transaction', id);
  return txn;
}

// ---------- beneficiaries ----------
export function addBeneficiary(customerId, data) {
  const record = { id: uid('ben'), customerId, ...data };
  write(KEYS.beneficiaries, [...getBeneficiaries(), record]);
  return record;
}
export const getBeneficiariesFor = (customerId) => getBeneficiaries().filter((b) => b.customerId === customerId);
export function deleteBeneficiary(id) {
  write(KEYS.beneficiaries, getBeneficiaries().filter((b) => b.id !== id));
}

// ---------- cards ----------
export function requestCard(customerId, type) {
  const record = { id: uid('card'), customerId, type, status: 'active', requestedAt: nowIso() };
  write(KEYS.cards, [...getCards(), record]);
  return record;
}
export function toggleCardBlock(id) {
  const cards = getCards().map((c) => (c.id === id ? { ...c, status: c.status === 'blocked' ? 'active' : 'blocked' } : c));
  write(KEYS.cards, cards);
  return cards.find((c) => c.id === id);
}
export const getCardsFor = (customerId) => getCards().filter((c) => c.customerId === customerId);

// ---------- settings ----------
export function updateSettings(patch, actor) {
  const settings = { ...getSettings(), ...patch };
  write(KEYS.settings, settings);
  logAudit(actor, 'Updated banking settings');
  return settings;
}
