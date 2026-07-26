export const accountTypes = [
  { key: 'savings', label: 'Savings Account', icon: 'PiggyBank', desc: 'Everyday personal banking' },
  { key: 'salary', label: 'Salary Account', icon: 'Wallet', desc: 'Zero-fee salary banking' },
  { key: 'current', label: 'Current Account', icon: 'Building2', desc: 'For business & MSME' },
  { key: 'deposit', label: 'Fixed / Recurring Deposit', icon: 'Landmark', desc: 'Grow your savings' },
  { key: 'nri', label: 'NRI Account', icon: 'Globe', desc: 'NRE, NRO & FCNR' },
  { key: 'creditcard', label: 'Credit Card', icon: 'CreditCard', desc: 'Platinum to Infinite' },
  { key: 'prepaid', label: 'Prepaid / Forex Card', icon: 'Gift', desc: 'Forex, gift & corporate' },
  { key: 'loan', label: 'Loan Application', icon: 'HandCoins', desc: 'Home, personal, auto & more' },
];

export const accountTypeFields = {
  savings: [
    { name: 'tier', label: 'Savings Tier', type: 'select', options: ['Regular Savings', 'Premium Savings', 'Senior Citizen Savings'], required: true },
    { name: 'initialDeposit', label: 'Initial Deposit Amount (₹)', type: 'number', placeholder: '5000' },
  ],
  salary: [
    { name: 'employer', label: 'Employer Name', type: 'text', placeholder: 'Company name', required: true },
    { name: 'monthlyIncome', label: 'Monthly Salary (₹)', type: 'number', placeholder: '60000', required: true },
  ],
  current: [
    { name: 'businessName', label: 'Business Name', type: 'text', placeholder: 'Registered business name', required: true },
    { name: 'businessType', label: 'Business Type', type: 'select', options: ['Sole Proprietorship', 'Partnership', 'Private Limited', 'LLP', 'Other'], required: true },
    { name: 'gstin', label: 'GSTIN (optional)', type: 'text', placeholder: 'e.g. 27ABCDE1234F1Z5' },
  ],
  deposit: [
    { name: 'depositType', label: 'Deposit Type', type: 'select', options: ['Fixed Deposit', 'Recurring Deposit', 'Tax-Saver FD'], required: true },
    { name: 'amount', label: 'Deposit Amount (₹)', type: 'number', placeholder: '100000', required: true },
    { name: 'tenure', label: 'Tenure (months)', type: 'number', placeholder: '24', required: true },
  ],
  nri: [
    { name: 'nriAccountType', label: 'Account Type', type: 'select', options: ['NRE Account', 'NRO Account', 'FCNR Deposit'], required: true },
    { name: 'country', label: 'Country of Residence', type: 'text', placeholder: 'e.g. UAE', required: true },
    { name: 'passport', label: 'Passport Number', type: 'text', placeholder: 'Passport number', required: true },
  ],
  creditcard: [
    { name: 'cardPreference', label: 'Card Preference', type: 'select', options: ['IBS Platinum', 'IBS Signature', 'IBS Infinite'], required: true },
    { name: 'employmentType', label: 'Employment Type', type: 'select', options: ['Salaried', 'Self-Employed', 'Business Owner'], required: true },
    { name: 'monthlyIncome', label: 'Monthly Income (₹)', type: 'number', placeholder: '50000', required: true },
  ],
  prepaid: [
    { name: 'cardType', label: 'Card Type', type: 'select', options: ['Forex Travel Card', 'Gift Card', 'Corporate Prepaid'], required: true },
    { name: 'loadAmount', label: 'Load Amount (₹)', type: 'number', placeholder: '20000', required: true },
  ],
  loan: [
    { name: 'loanType', label: 'Loan Type', type: 'select', options: ['Home Loan', 'Personal Loan', 'Auto Loan', 'Education Loan'], required: true },
    { name: 'loanAmount', label: 'Loan Amount Required (₹)', type: 'number', placeholder: '1500000', required: true },
    { name: 'monthlyIncome', label: 'Monthly Income (₹)', type: 'number', placeholder: '60000', required: true },
  ],
};

export const commonFields = [
  { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'As per PAN / Aadhaar', required: true },
  { name: 'mobile', label: 'Mobile Number', type: 'tel', placeholder: '10-digit mobile number', required: true },
  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@email.com', required: true },
  { name: 'dob', label: 'Date of Birth', type: 'date', required: true },
  { name: 'pan', label: 'PAN Number', type: 'text', placeholder: 'e.g. ABCDE1234F', required: true },
  { name: 'city', label: 'City', type: 'text', placeholder: 'Your city', required: true },
];

export const openAccountFaq = [
  { q: 'What documents will I need?', a: 'PAN, Aadhaar (or passport for NRI applications), a recent photograph, and — for business accounts — your business registration certificate.' },
  { q: 'How long does approval take?', a: 'Savings and salary accounts are typically approved within a few hours of video-KYC; cards and loans take 1-3 business days for underwriting.' },
  { q: 'Can I switch account type after applying?', a: 'Yes — contact support with your reference ID before your video-KYC call and we\u2019ll update your application.' },
  { q: 'Is my information secure here?', a: 'This is a demo environment: nothing you enter on this page is transmitted to a server or stored anywhere.' },
];
