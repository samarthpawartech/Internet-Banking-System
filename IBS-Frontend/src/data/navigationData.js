export const megaMenuData = [
  {
    label: 'Personal Banking',
    path: '/personal-banking',
    columns: [
      {
        heading: 'Accounts & Deposits',
        items: [
          { label: 'Savings Account', path: '/personal-banking/savings-account', icon: 'PiggyBank', desc: 'Zero-balance options with up to 4.5% p.a.' },
          { label: 'Salary Account', path: '/personal-banking/salary-account', icon: 'Wallet', desc: 'Zero-fee salary banking with lifestyle perks' },
          { label: 'Fixed & Recurring Deposits', path: '/personal-banking/deposits', icon: 'Landmark', desc: 'Lock in up to 7.75% p.a. returns' },
        ],
      },
      {
        heading: 'Cards',
        items: [
          { label: 'Credit Cards', path: '/personal-banking/cards/credit-cards', icon: 'CreditCard', desc: 'Platinum, Signature & Infinite metal cards' },
          { label: 'Debit Cards', path: '/personal-banking/cards/debit-cards', icon: 'WalletMinimal', desc: 'Contactless cards with airport lounge access' },
          { label: 'Prepaid Cards', path: '/personal-banking/cards/prepaid-cards', icon: 'Gift', desc: 'Forex, gift & corporate prepaid cards' },
        ],
      },
      {
        heading: 'More for you',
        items: [
          { label: 'Loans', path: '/personal-banking/loans', icon: 'HandCoins', desc: 'Home, personal, auto & education loans' },
          { label: 'NRI Banking', path: '/personal-banking/nri-banking', icon: 'Globe', desc: 'NRE, NRO & FCNR accounts from 30+ countries' },
          { label: 'IBS Rewards', path: '/personal-banking/ibs-rewards', icon: 'Gift', desc: 'Earn & redeem points across 300+ brands' },
        ],
      },
    ],
    promo: {
      eyebrow: 'Featured',
      title: 'Open a savings account in 6 minutes',
      desc: 'Video-KYC, no paperwork, instant virtual debit card.',
      cta: 'Get started',
      path: '/personal-banking/savings-account',
      icon: 'Sparkles',
    },
  },
  {
    label: 'Corporate Banking',
    path: '/corporate-banking',
    columns: [
      {
        heading: 'Core Corporate',
        items: [
          { label: 'Cash Management', path: '/corporate-banking', icon: 'Banknote', desc: 'Collections, payouts & liquidity management' },
          { label: 'Trade Finance', path: '/corporate-banking', icon: 'ShieldCheck', desc: 'LCs, bank guarantees & bill discounting' },
          { label: 'Treasury & Forex', path: '/corporate-banking', icon: 'ChartLine', desc: 'Hedging, forex desk & investment products' },
        ],
      },
      {
        heading: 'Digital & Growth',
        items: [
          { label: 'API Banking', path: '/digital-banking', icon: 'Server', desc: 'Plug corporate banking into your stack' },
          { label: 'Supply Chain Finance', path: '/corporate-banking', icon: 'Truck', desc: 'Vendor & dealer financing on one platform' },
          { label: 'Corporate Cards', path: '/personal-banking/cards/credit-cards', icon: 'CreditCard', desc: 'Expense-managed cards for teams' },
        ],
      },
    ],
    promo: {
      eyebrow: 'API Banking',
      title: 'Ship payments into your product',
      desc: 'REST APIs for payouts, collections & reconciliation.',
      cta: 'Explore APIs',
      path: '/digital-banking',
      icon: 'Server',
    },
  },
  {
    label: 'Digital Banking',
    path: '/digital-banking',
    columns: [
      {
        heading: 'Everyday digital',
        items: [
          { label: 'Internet Banking', path: '/digital-banking', icon: 'Server', desc: 'Full control from your browser' },
          { label: 'UPI & QR Payments', path: '/digital-banking', icon: 'QrCode', desc: 'Scan, pay & collect instantly' },
          { label: 'IBS Connect', path: '/ibs-connect', icon: 'Smartphone', desc: 'One app for accounts, cards & investments' },
        ],
      },
      {
        heading: 'Intelligence & security',
        items: [
          { label: 'AI Virtual Assistant', path: '/digital-banking', icon: 'Bot', desc: 'Ask Nova anything about your money' },
          { label: 'Smart Dashboard', path: '/digital-banking', icon: 'ChartPie', desc: 'Spending insights, auto-tagged' },
          { label: 'Security Center', path: '/digital-banking', icon: 'ShieldCheck', desc: 'Device management & fraud alerts' },
        ],
      },
    ],
    promo: {
      eyebrow: 'IBS Connect',
      title: 'Banking, in your pocket',
      desc: 'Biometric login, instant transfers, card controls.',
      cta: 'See the app',
      path: '/ibs-connect',
      icon: 'Smartphone',
    },
  },
  {
    label: 'Business Banking',
    path: '/business-banking',
    columns: [
      {
        heading: 'Business essentials',
        items: [
          { label: 'Current Accounts', path: '/business-banking', icon: 'Building2', desc: 'Zero-hassle accounts for every scale' },
          { label: 'MSME & Startup Banking', path: '/business-banking', icon: 'Rocket', desc: 'Collateral-free loans up to ₹2 Cr' },
          { label: 'Merchant Services & POS', path: '/business-banking', icon: 'Store', desc: 'Accept payments in-store & online' },
        ],
      },
      {
        heading: 'Specialised',
        items: [
          { label: 'GST & Payroll Banking', path: '/business-banking', icon: 'ClipboardList', desc: 'Compliance-ready business tools' },
          { label: 'Agri & Food Business', path: '/business-banking/agri-and-food-business', icon: 'Wheat', desc: 'Farm to warehouse financing' },
          { label: 'Trade & Working Capital', path: '/business-banking', icon: 'Truck', desc: 'Fund your operating cycle' },
        ],
      },
    ],
    promo: {
      eyebrow: 'For founders',
      title: 'Startup current account, no minimum balance',
      desc: 'Free for the first 12 months, ready in a day.',
      cta: 'Open account',
      path: '/business-banking',
      icon: 'Rocket',
    },
  },
  { label: 'Private Banking', path: '/private-banking', simple: true },
];

export const utilityLinks = [
  { label: 'Pay Loan EMI', path: '/online-loan-payments', icon: 'HandCoins' },
  { label: 'Credit Card Bill', path: '/cards/bill-payment', icon: 'CreditCard' },
  { label: 'Insurance Claim', path: '/insurance-claim', icon: 'ShieldCheck' },
  { label: 'File a Complaint', path: '/complaint', icon: 'ClipboardList' },
  { label: 'Track a Request', path: '/track-request', icon: 'Search' },
];

export const searchSuggestions = [
  'Savings account interest rate', 'EMI calculator', 'Credit card offers',
  'NRI account opening', 'Block my card', 'Branch near me', 'IBS Rewards catalogue',
];
