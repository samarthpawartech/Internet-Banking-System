export const heroSlides = [
  {
    eyebrow: 'IBS Internet Banking',
    title: 'Banking that moves at',
    highlight: 'your speed',
    desc: 'Open an account, move money, apply for a card — all from one dark, distraction-free dashboard. No branch visit required.',
    primaryCta: { label: 'Open an account', path: '/personal-banking/savings-account' },
    secondaryCta: { label: 'Explore products', path: '/personal-banking' },
  },
  {
    eyebrow: 'Cards',
    title: 'Cards built for how you',
    highlight: 'actually spend',
    desc: 'Metal Platinum, Signature and Infinite cards with real-time spend tracking and airport lounge access — not just plastic.',
    primaryCta: { label: 'Compare cards', path: '/personal-banking/cards/credit-cards' },
    secondaryCta: { label: 'Check EMI', path: '/personal-banking/loans' },
  },
  {
    eyebrow: 'Business Banking',
    title: 'Business banking without',
    highlight: 'the back-office',
    desc: 'Collections, payouts, payroll and GST-ready statements from one dashboard your finance team will actually enjoy using.',
    primaryCta: { label: 'For businesses', path: '/business-banking' },
    secondaryCta: { label: 'See API banking', path: '/digital-banking' },
  },
];

export const offers = [
  { icon: 'Percent', text: 'Fixed deposits now at 7.75% p.a.' },
  { icon: 'CreditCard', text: 'Zero joining fee on IBS Platinum' },
  { icon: 'Gift', text: '2x IBS Rewards on weekend spends' },
  { icon: 'HandCoins', text: 'Home loans starting at 8.35% p.a.' },
  { icon: 'Smartphone', text: 'UPI Lite — pay even when banks are slow' },
  { icon: 'Globe', text: 'Zero forex markup for NRI accounts' },
];

export const productsGrid = [
  {
    icon: 'PiggyBank', title: 'Savings Account', desc: 'Zero-balance options with up to 4.5% p.a. and a virtual card in minutes.',
    features: ['Video KYC in 6 minutes', 'Free debit card, first year', 'UPI enabled from day one'],
    cta: { label: 'Open savings account', path: '/personal-banking/savings-account' }, size: 'lg', variant: 'default',
  },
  {
    icon: 'CreditCard', title: 'Credit Cards', desc: 'Platinum, Signature and Infinite — pick your reward style.',
    cta: { label: 'Compare cards', path: '/personal-banking/cards/credit-cards' }, size: 'md', variant: 'card',
  },
  {
    icon: 'Landmark', title: 'Fixed Deposits', desc: 'Lock in up to 7.75% p.a., break anytime with partial withdrawal.',
    cta: { label: 'Calculate returns', path: '/personal-banking/deposits' }, size: 'md',
  },
  {
    icon: 'HandCoins', title: 'Loans', desc: 'Home, personal, auto and education loans with instant eligibility checks.',
    cta: { label: 'Check EMI', path: '/personal-banking/loans' }, size: 'md',
  },
  {
    icon: 'Globe', title: 'NRI Banking', desc: 'NRE, NRO and FCNR accounts for 30+ countries, zero forex markup.',
    cta: { label: 'NRI banking', path: '/personal-banking/nri-banking' }, size: 'md',
  },
  {
    icon: 'Gift', title: 'IBS Rewards', desc: 'Earn on every swipe, redeem across 300+ partner brands.',
    cta: { label: 'View rewards', path: '/personal-banking/ibs-rewards' }, size: 'md',
  },
];

export const digitalFeatures = [
  { icon: 'Bot', title: 'AI Assistant', desc: 'Ask Nova to move money, raise a dispute or explain a charge — in plain language.', accent: 'purple' },
  { icon: 'QrCode', title: 'UPI & QR Payments', desc: 'Scan, pay and split bills instantly, with instant refund tracking.', accent: 'accent' },
  { icon: 'ChartPie', title: 'Smart Dashboard', desc: 'Spending auto-tagged into categories, with monthly trend alerts.', accent: 'success' },
  { icon: 'ShieldCheck', title: 'Security Center', desc: 'Freeze a card, manage trusted devices and set transaction limits in one tap.', accent: 'gold' },
];

export const loanHighlights = [
  { icon: 'Zap', title: 'Instant eligibility', desc: 'Know your approved amount before you apply.' },
  { icon: 'FileCheck', title: 'Minimal paperwork', desc: 'Salaried and self-employed both go fully digital.' },
  { icon: 'RefreshCw', title: 'Prepay anytime', desc: 'No penalty on part-prepayment after 12 EMIs.' },
];

export const stats = [
  { icon: 'Users', value: 1.2, decimals: 1, suffix: ' Cr+', label: 'Customers served' },
  { icon: 'Building2', value: 5400, suffix: '+', label: 'Branches & ATMs' },
  { icon: 'IndianRupee', value: 2.4, decimals: 1, prefix: '₹', suffix: 'L Cr+', label: 'Assets under management' },
  { icon: 'Activity', value: 99.9, decimals: 1, suffix: '%', label: 'Platform uptime' },
];

export const awards = [
  { title: 'Best Digital Bank 2025 — FinTech India' },
  { title: 'Great Place to Work — Certified' },
  { title: 'Most Innovative UPI Experience 2025' },
  { title: 'ISO 27001 Certified Security' },
];

export const testimonials = [
  { name: 'Ananya Iyer', role: 'Product Designer, Bengaluru', rating: 5, quote: 'Switched my salary account to IBS mainly for the app. Stayed for how fast support actually responds.' },
  { name: 'Rohit Malhotra', role: 'Founder, D2C brand', rating: 5, quote: 'The business dashboard replaced three spreadsheets we used to reconcile payouts manually.' },
  { name: 'Fatima Sheikh', role: 'NRI Customer, Dubai', rating: 4, quote: 'Opened an NRE account without visiting a branch. Forex conversion is genuinely transparent.' },
  { name: 'Karthik Subramaniam', role: 'Software Engineer, Pune', rating: 5, quote: 'The EMI calculator on the loans page matched my final sanction letter almost exactly.' },
  { name: 'Priya Desai', role: 'Homemaker, Ahmedabad', rating: 5, quote: 'My mother uses the senior citizen FD scheme — the rate bump actually shows up automatically.' },
];

export const newsItems = [
  { tag: 'Product', title: 'IBS launches Nova, an AI assistant built into net banking', excerpt: 'Nova can explain charges, raise disputes and suggest savings nudges based on your spending.', date: 'Jul 2026' },
  { tag: 'Awards', title: 'IBS named Best Digital Bank at FinTech India Summit', excerpt: 'Recognised for UPI innovation and sub-90-second account opening times.', date: 'Jun 2026' },
  { tag: 'Guide', title: 'UPI 2.0: what changes for everyday payments', excerpt: 'A quick walkthrough of delegated payments, credit line on UPI, and higher limits.', date: 'May 2026' },
];

export const homeFaq = [
  { q: 'How long does it take to open a savings account?', a: 'Most customers finish video-KYC and start using their virtual debit card in under 6 minutes. A physical card follows by post within 7 working days.' },
  { q: 'Is IBS a licensed bank?', a: 'IBS operates as a full-service internet banking system with RBI-aligned security and compliance practices, including two-factor authentication on every login.' },
  { q: 'Can I get a loan without an existing IBS account?', a: 'Yes — use the EMI calculator to check indicative eligibility first, then apply; an existing account isn\u2019t required to start an application.' },
  { q: 'What happens if I lose my card?', a: 'Freeze it instantly from the Security Center in IBS Connect, then request a replacement — no call center wait required.' },
  { q: 'Does IBS charge for UPI transactions?', a: 'UPI transfers are free for personal accounts. Merchant payment fees, where applicable, are shown before you confirm a transaction.' },
];
