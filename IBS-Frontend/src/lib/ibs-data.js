export const user = {
  name: 'Samarth Pawar',
  firstName: 'Samarth',
  customerId: 'IBS0092451',
  lastLogin: '16 Jul 2026, 10:42 AM',
  avatarInitials: 'SP'
};
export function formatINR(n, withSign = false) {
  const formatted = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2
  }).format(Math.abs(n));
  if (!withSign) return formatted;
  return `${n < 0 ? '-' : '+'}${formatted}`;
}
export const accounts = [{
  id: 'sav',
  type: 'Savings Account',
  name: 'IBS Savings',
  number: '5412 •••• 8842',
  balance: 842350.75,
  accent: 'cyan'
}, {
  id: 'cur',
  type: 'Current Account',
  name: 'IBS Business',
  number: '6011 •••• 3390',
  balance: 1284900.0,
  accent: 'violet'
}, {
  id: 'fd',
  type: 'Fixed Deposit',
  name: 'FD 444-day',
  number: 'FD •••• 1205',
  balance: 500000.0,
  accent: 'green'
}, {
  id: 'cc',
  type: 'Credit Card',
  name: 'IBS Neon Credit',
  number: '4291 •••• 7734',
  balance: -34210.5,
  accent: 'orange'
}];
export const transactions = [{
  id: 'TXN9001',
  date: '16 Jul 2026',
  merchant: 'Salary Credit — Acme Corp',
  category: 'Income',
  amount: 185000,
  status: 'Success',
  mode: 'NEFT'
}, {
  id: 'TXN9002',
  date: '15 Jul 2026',
  merchant: 'Amazon India',
  category: 'Shopping',
  amount: -4299,
  status: 'Success',
  mode: 'UPI'
}, {
  id: 'TXN9003',
  date: '15 Jul 2026',
  merchant: 'Zomato',
  category: 'Food',
  amount: -712,
  status: 'Success',
  mode: 'UPI'
}, {
  id: 'TXN9004',
  date: '14 Jul 2026',
  merchant: 'Rent — Landlord',
  category: 'Housing',
  amount: -32000,
  status: 'Success',
  mode: 'IMPS'
}, {
  id: 'TXN9005',
  date: '14 Jul 2026',
  merchant: 'Tata Power',
  category: 'Utilities',
  amount: -2450,
  status: 'Success',
  mode: 'BillPay'
}, {
  id: 'TXN9006',
  date: '13 Jul 2026',
  merchant: 'Freelance — Studio X',
  category: 'Income',
  amount: 42000,
  status: 'Success',
  mode: 'NEFT'
}, {
  id: 'TXN9007',
  date: '13 Jul 2026',
  merchant: 'Uber',
  category: 'Transport',
  amount: -389,
  status: 'Success',
  mode: 'UPI'
}, {
  id: 'TXN9008',
  date: '12 Jul 2026',
  merchant: 'Netflix',
  category: 'Entertainment',
  amount: -649,
  status: 'Pending',
  mode: 'AutoPay'
}, {
  id: 'TXN9009',
  date: '11 Jul 2026',
  merchant: 'HDFC Mutual Fund SIP',
  category: 'Investment',
  amount: -15000,
  status: 'Success',
  mode: 'AutoPay'
}, {
  id: 'TXN9010',
  date: '10 Jul 2026',
  merchant: 'ATM Withdrawal',
  category: 'Cash',
  amount: -10000,
  status: 'Success',
  mode: 'ATM'
}, {
  id: 'TXN9011',
  date: '09 Jul 2026',
  merchant: 'Swiggy',
  category: 'Food',
  amount: -534,
  status: 'Failed',
  mode: 'UPI'
}, {
  id: 'TXN9012',
  date: '08 Jul 2026',
  merchant: 'Croma Electronics',
  category: 'Shopping',
  amount: -58990,
  status: 'Success',
  mode: 'Card'
}];
export const spendingBreakdown = [{
  label: 'Shopping',
  value: 63289,
  color: 'var(--neon-cyan)'
}, {
  label: 'Housing',
  value: 32000,
  color: 'var(--neon-violet)'
}, {
  label: 'Food',
  value: 12460,
  color: 'var(--neon-green)'
}, {
  label: 'Utilities',
  value: 8900,
  color: 'var(--neon-orange)'
}, {
  label: 'Transport',
  value: 4780,
  color: 'var(--warning)'
}];
export const beneficiaries = [{
  id: 'b1',
  name: 'Priya Sharma',
  bank: 'IBS Bank',
  account: '•••• 4521',
  initials: 'PS'
}, {
  id: 'b2',
  name: 'Rahul Verma',
  bank: 'HDFC Bank',
  account: '•••• 8890',
  initials: 'RV'
}, {
  id: 'b3',
  name: 'Anjali Mehta',
  bank: 'ICICI Bank',
  account: '•••• 2245',
  initials: 'AM'
}, {
  id: 'b4',
  name: 'Vikram Singh',
  bank: 'SBI',
  account: '•••• 6678',
  initials: 'VS'
}];
export const upcomingBills = [{
  id: 'u1',
  name: 'Electricity — Tata Power',
  due: 'Due in 3 days',
  amount: 2450
}, {
  id: 'u2',
  name: 'Broadband — Airtel',
  due: 'Due in 6 days',
  amount: 999
}, {
  id: 'u3',
  name: 'Credit Card Bill',
  due: 'Due in 9 days',
  amount: 34210
}];
export const deposits = [{
  id: 'd1',
  type: 'Fixed Deposit',
  principal: 500000,
  rate: 8.1,
  maturity: '28 Oct 2027',
  maturityAmount: 545000
}, {
  id: 'd2',
  type: 'Recurring Deposit',
  principal: 120000,
  rate: 7.4,
  maturity: '15 Mar 2028',
  maturityAmount: 138600
}];
