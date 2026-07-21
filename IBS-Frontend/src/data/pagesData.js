export const pagesData = {
  personalBanking: {
    theme: 'accent',
    breadcrumb: [{ label: 'Personal Banking', path: '/personal-banking' }],
    hero: {
      icon: 'User', eyebrow: 'Personal Banking',
      title: 'Every account you need, none of the clutter you don\u2019t',
      description: 'Savings, salary, deposits, cards and loans — designed to work together as one connected account, not nine separate logins.',
      primaryCta: { label: 'Open savings account', path: '/personal-banking/savings-account' },
      secondaryCta: { label: 'Compare cards', path: '/personal-banking/cards/credit-cards' },
    },
    overview: {
      title: 'Banking that adapts to your life stage',
      paragraphs: [
        'Whether you\u2019re opening your first salary account or planning retirement deposits, IBS keeps every product under a single login and a single relationship manager.',
        'Video-KYC means most products activate the same day — no waiting in a branch queue, no paper forms mailed back and forth.',
      ],
      highlights: [
        { icon: 'Users', label: 'Personal banking customers', value: '90L+' },
        { icon: 'Star', label: 'App store rating', value: '4.7/5' },
      ],
    },
    benefits: {
      title: 'Why people move their salary here',
      items: [
        { icon: 'Zap', title: 'Same-day activation', desc: 'Video-KYC gets your account, debit card and UPI live within hours.' },
        { icon: 'ShieldCheck', title: 'Zero hidden fees', desc: 'Every charge is shown up front — before you agree, not after a statement surprises you.' },
        { icon: 'Gift', title: 'Rewards on everything', desc: 'Every card, every account earns into one unified IBS Rewards balance.' },
        { icon: 'Headphones', title: 'Real human support', desc: 'A dedicated relationship desk, not a ticket number that resets every call.' },
      ],
    },
    cards: {
      title: 'Explore personal banking products',
      subtitle: 'Jump straight to the account type you need.',
      items: [
        { icon: 'PiggyBank', title: 'Savings Account', desc: 'Zero-balance options, up to 4.5% p.a.', cta: { label: 'Explore', path: '/personal-banking/savings-account' } },
        { icon: 'Wallet', title: 'Salary Account', desc: 'Zero-fee banking with lifestyle perks.', cta: { label: 'Explore', path: '/personal-banking/salary-account' } },
        { icon: 'Landmark', title: 'Fixed & Recurring Deposits', desc: 'Lock in up to 7.75% p.a.', cta: { label: 'Explore', path: '/personal-banking/deposits' } },
        { icon: 'HandCoins', title: 'Loans', desc: 'Home, personal, auto & education.', cta: { label: 'Explore', path: '/personal-banking/loans' } },
        { icon: 'CreditCard', title: 'Credit Cards', desc: 'Platinum, Signature & Infinite.', cta: { label: 'Explore', path: '/personal-banking/cards/credit-cards' }, variant: 'card' },
        { icon: 'Globe', title: 'NRI Banking', desc: 'NRE, NRO & FCNR from 30+ countries.', cta: { label: 'Explore', path: '/personal-banking/nri-banking' } },
      ],
    },
    faq: {
      title: 'Personal banking, answered',
      items: [
        { q: 'Can I open more than one savings account?', a: 'Yes, you can hold multiple savings accounts for different goals — each with its own virtual debit card and standing instructions.' },
        { q: 'Is there a minimum balance requirement?', a: 'Our Regular Savings account is zero-balance. Premium Savings requires a modest average monthly balance in exchange for a higher interest rate.' },
        { q: 'How is interest calculated?', a: 'Savings interest is calculated daily on the closing balance and credited quarterly.' },
      ],
    },
    related: {
      title: 'Related products',
      items: [
        { icon: 'CreditCard', title: 'Credit Cards', path: '/personal-banking/cards/credit-cards' },
        { icon: 'HandCoins', title: 'Loans', path: '/personal-banking/loans' },
        { icon: 'Gift', title: 'IBS Rewards', path: '/personal-banking/ibs-rewards' },
      ],
    },
    cta: { title: 'Ready to make the switch?', description: 'Open a savings account in under 6 minutes.', primaryCta: { label: 'Open account', path: '/personal-banking/savings-account' }, secondaryCta: { label: 'Talk to us', path: '/contact' } },
  },

  corporateBanking: {
    theme: 'purple',
    breadcrumb: [{ label: 'Corporate Banking', path: '/corporate-banking' }],
    hero: {
      icon: 'Building2', eyebrow: 'Corporate Banking',
      title: 'Treasury, trade and cash management on one platform',
      description: 'From daily collections to cross-border trade finance, corporate teams run their entire banking relationship through a single dashboard.',
      primaryCta: { label: 'Talk to corporate sales', path: '/contact' },
      secondaryCta: { label: 'See API banking', path: '/digital-banking' },
    },
    overview: {
      title: 'Built for finance teams, not just founders',
      paragraphs: [
        'Corporate Banking at IBS covers cash management, trade finance, treasury and forex, and supply chain financing — with dedicated relationship managers for enterprise accounts.',
        'Every module plugs into your existing ERP through documented REST APIs, so reconciliation stops being a manual, end-of-month scramble.',
      ],
      highlights: [
        { icon: 'Building2', label: 'Corporate clients', value: '12,000+' },
        { icon: 'ChartLine', label: 'Payouts processed monthly', value: '₹8,200 Cr' },
      ],
    },
    benefits: {
      title: 'What corporate treasuries get',
      items: [
        { icon: 'Banknote', title: 'Same-day settlements', desc: 'Bulk payouts settle same business day when initiated before the cutoff.' },
        { icon: 'ShieldCheck', title: 'Maker-checker controls', desc: 'Configurable approval hierarchies for every payment and mandate.' },
        { icon: 'ChartLine', title: 'Live treasury dashboard', desc: 'Cash position across accounts and currencies, updated in real time.' },
        { icon: 'Server', title: 'API-first integration', desc: 'Push payouts and pull statements directly from your own systems.' },
      ],
    },
    features: {
      title: 'Core modules',
      items: [
        { icon: 'Banknote', title: 'Cash Management', desc: 'Collections, payouts and liquidity sweep across accounts.' },
        { icon: 'ShieldCheck', title: 'Trade Finance', desc: 'Letters of credit, bank guarantees and bill discounting.' },
        { icon: 'ChartLine', title: 'Treasury & Forex', desc: 'Hedging instruments and a dedicated forex desk.' },
        { icon: 'Truck', title: 'Supply Chain Finance', desc: 'Vendor and dealer financing on one shared ledger.' },
      ],
    },
    faq: {
      title: 'Corporate banking, answered',
      items: [
        { q: 'Do you support multi-entity structures?', a: 'Yes, a single corporate login can manage multiple legal entities with separate approval hierarchies for each.' },
        { q: 'Can we integrate via API?', a: 'Yes — our API banking suite covers payouts, collections, statements and mandate management with sandbox access for testing.' },
        { q: 'Is there a dedicated relationship manager?', a: 'Enterprise accounts above a qualifying transaction volume are assigned a named relationship manager and treasury specialist.' },
      ],
    },
    related: {
      title: 'Related products',
      items: [
        { icon: 'Server', title: 'Digital & API Banking', path: '/digital-banking' },
        { icon: 'Building2', title: 'Business Banking', path: '/business-banking' },
        { icon: 'CreditCard', title: 'Corporate Cards', path: '/personal-banking/cards/credit-cards' },
      ],
    },
    cta: { title: 'Let\u2019s simplify your treasury operations', description: 'Speak with our corporate banking team about your setup.', primaryCta: { label: 'Contact corporate sales', path: '/contact' }, secondaryCta: { label: 'Explore API banking', path: '/digital-banking' } },
  },

  digitalBanking: {
    theme: 'accent',
    breadcrumb: [{ label: 'Digital Banking', path: '/digital-banking' }],
    hero: {
      icon: 'Server', eyebrow: 'Digital Banking',
      title: 'The full bank, running in your browser and your pocket',
      description: 'Internet banking, UPI, QR payments and an AI assistant — all built on the same security foundation as our branches.',
      primaryCta: { label: 'Explore IBS Connect', path: '/ibs-connect' },
      secondaryCta: { label: 'Security Center', path: '/support' },
    },
    overview: {
      title: 'One login, every channel',
      paragraphs: [
        'Digital Banking ties together net banking, the IBS Connect mobile app, UPI, and API banking for businesses — all authenticated through the same device-bound security layer.',
        'Nova, our AI assistant, sits inside every channel so you can ask a question in plain language instead of hunting through menus.',
      ],
      highlights: [
        { icon: 'Smartphone', label: 'Monthly active app users', value: '68L+' },
        { icon: 'QrCode', label: 'UPI transactions / month', value: '4.1 Cr+' },
      ],
    },
    benefits: {
      title: 'Why go digital-first',
      items: [
        { icon: 'Zap', title: 'Instant everything', desc: 'Transfers, card freezes and limit changes apply immediately, not next business day.' },
        { icon: 'Bot', title: 'AI-assisted support', desc: 'Nova resolves most queries in-app without a call center queue.' },
        { icon: 'ShieldCheck', title: 'Device intelligence', desc: 'New devices trigger extra verification automatically.' },
        { icon: 'ChartPie', title: 'Auto-tagged spending', desc: 'Every transaction is categorised so your monthly summary writes itself.' },
      ],
    },
    features: {
      title: 'What\u2019s inside',
      items: [
        { icon: 'Server', title: 'Internet Banking', desc: 'Full account control from any browser.' },
        { icon: 'QrCode', title: 'UPI & QR Payments', desc: 'Scan, pay, and request money instantly.' },
        { icon: 'Bot', title: 'AI Virtual Assistant', desc: 'Ask Nova about balances, disputes or offers.' },
        { icon: 'ShieldCheck', title: 'Security Center', desc: 'Manage devices, limits and card controls.' },
      ],
    },
    faq: {
      title: 'Digital banking, answered',
      items: [
        { q: 'Is UPI free to use?', a: 'Yes, UPI transfers between personal accounts carry no fee. Merchant payment charges, if any, are always shown before you confirm.' },
        { q: 'What happens if I get a new phone?', a: 'Re-registering IBS Connect on a new device requires OTP and, for sensitive actions, a short cooling-off period for your protection.' },
        { q: 'Can businesses use the same app?', a: 'Business accounts use a separate Business Net Banking portal with maker-checker controls, while personal digital banking runs through IBS Connect.' },
      ],
    },
    related: {
      title: 'Related products',
      items: [
        { icon: 'Smartphone', title: 'IBS Connect App', path: '/ibs-connect' },
        { icon: 'Building2', title: 'Corporate Banking', path: '/corporate-banking' },
        { icon: 'ShieldCheck', title: 'Support Center', path: '/support' },
      ],
    },
    cta: { title: 'Bring your banking into one app', description: 'IBS Connect puts accounts, cards and Nova in your pocket.', primaryCta: { label: 'See IBS Connect', path: '/ibs-connect' }, secondaryCta: { label: 'Customer login', path: '/customer-login' } },
  },

  businessBanking: {
    theme: 'purple',
    breadcrumb: [{ label: 'Business Banking', path: '/business-banking' }],
    hero: {
      icon: 'Store', eyebrow: 'Business Banking',
      title: 'Current accounts and financing built for founders',
      description: 'From your first current account to working capital and payroll, business banking that scales as fast as you do.',
      primaryCta: { label: 'Open current account', path: '/contact' },
      secondaryCta: { label: 'Merchant services', path: '/support' },
    },
    overview: {
      title: 'Banking that understands small business cash flow',
      paragraphs: [
        'Business Banking covers current accounts, MSME and startup lending, merchant services, GST-ready statements and payroll — all reconciled automatically against your ledger.',
        'Collateral-free loans up to ₹2 crore are available for eligible MSMEs based on cash-flow history rather than just collateral value.',
      ],
      highlights: [
        { icon: 'Store', label: 'Business accounts', value: '4.8L+' },
        { icon: 'HandCoins', label: 'MSME loans disbursed', value: '₹3,100 Cr' },
      ],
    },
    benefits: {
      title: 'Built for how small businesses actually operate',
      items: [
        { icon: 'Zap', title: 'Account in a day', desc: 'Current accounts activate within 24 hours of document verification.' },
        { icon: 'ClipboardList', title: 'GST-ready statements', desc: 'Export filing-ready summaries directly from your dashboard.' },
        { icon: 'Store', title: 'Integrated POS & payments', desc: 'Accept cards, UPI and wallets through one settlement account.' },
        { icon: 'HandCoins', title: 'Collateral-free credit', desc: 'MSME loans assessed on cash flow, not just fixed assets.' },
      ],
    },
    cards: {
      title: 'Explore business banking products',
      subtitle: 'Pick the module your business needs right now.',
      items: [
        { icon: 'Building2', title: 'Current Accounts', desc: 'Zero-hassle accounts for every scale.', cta: { label: 'Explore', path: '/contact' } },
        { icon: 'Rocket', title: 'MSME & Startup Loans', desc: 'Collateral-free credit up to ₹2 Cr.', cta: { label: 'Explore', path: '/contact' } },
        { icon: 'Store', title: 'Merchant Services & POS', desc: 'Accept payments in-store and online.', cta: { label: 'Explore', path: '/contact' } },
        { icon: 'Wheat', title: 'Agri & Food Business', desc: 'Farm to warehouse financing.', cta: { label: 'Explore', path: '/business-banking/agri-and-food-business' } },
      ],
    },
    faq: {
      title: 'Business banking, answered',
      items: [
        { q: 'What documents are needed to open a current account?', a: 'Typically your business registration certificate, GST certificate, PAN, and KYC documents for authorised signatories.' },
        { q: 'Do you offer invoice-based financing?', a: 'Yes, through our Supply Chain Finance and Trade programmes available to registered MSMEs and their approved vendors.' },
        { q: 'Is there a minimum turnover requirement?', a: 'Current accounts have no minimum turnover requirement; lending products carry eligibility criteria shown before you apply.' },
      ],
    },
    related: {
      title: 'Related products',
      items: [
        { icon: 'Wheat', title: 'Agri & Food Business', path: '/business-banking/agri-and-food-business' },
        { icon: 'Building2', title: 'Corporate Banking', path: '/corporate-banking' },
        { icon: 'Server', title: 'Digital Banking', path: '/digital-banking' },
      ],
    },
    cta: { title: 'Let\u2019s get your business banking sorted', description: 'Talk to our business banking team about the right account for you.', primaryCta: { label: 'Contact us', path: '/contact' }, secondaryCta: { label: 'Explore digital tools', path: '/digital-banking' } },
  },

  agriBusiness: {
    theme: 'success',
    breadcrumb: [{ label: 'Business Banking', path: '/business-banking' }, { label: 'Agri & Food Business', path: '/business-banking/agri-and-food-business' }],
    hero: {
      icon: 'Wheat', eyebrow: 'Agri & Food Business',
      title: 'Financing from the farm gate to the warehouse',
      description: 'Farmer loans, agri finance, warehouse receipts and cold storage funding — built with harvest cycles in mind, not standard EMI calendars.',
      primaryCta: { label: 'Talk to our agri desk', path: '/contact' },
      secondaryCta: { label: 'Explore business banking', path: '/business-banking' },
    },
    overview: {
      title: 'Repayment schedules that match harvest cycles',
      paragraphs: [
        'Agri & Food Business financing is structured around sowing and harvest timelines rather than fixed monthly EMIs, so cash flow pressure eases at the right moments.',
        'Warehouse receipt financing lets farmers and aggregators borrow against stored produce instead of selling immediately at harvest-time prices.',
      ],
      highlights: [
        { icon: 'Tractor', label: 'Farmers financed', value: '3.6L+' },
        { icon: 'Warehouse', label: 'Warehouses on network', value: '1,200+' },
      ],
    },
    benefits: {
      title: 'Why agri businesses choose IBS',
      items: [
        { icon: 'Sprout', title: 'Season-aligned repayment', desc: 'Repayment schedules built around sowing and harvest timelines.' },
        { icon: 'Warehouse', title: 'Warehouse receipt financing', desc: 'Borrow against stored produce instead of selling at harvest-time lows.' },
        { icon: 'ShieldCheck', title: 'Crop & asset insurance', desc: 'Bundled insurance options to protect against weather and price shocks.' },
        { icon: 'Truck', title: 'Cold chain funding', desc: 'Financing for cold storage and logistics infrastructure.' },
      ],
    },
    cards: {
      title: 'Agri financing products',
      items: [
        { icon: 'Tractor', title: 'Farmer Loans', desc: 'Crop loans with flexible, season-aligned terms.', cta: { label: 'Explore', path: '/contact' } },
        { icon: 'Warehouse', title: 'Warehouse Finance', desc: 'Borrow against stored produce receipts.', cta: { label: 'Explore', path: '/contact' } },
        { icon: 'Factory', title: 'Food Processing Loans', desc: 'Capex financing for processing units.', cta: { label: 'Explore', path: '/contact' } },
        { icon: 'ShieldCheck', title: 'Agri Insurance', desc: 'Crop and asset protection bundles.', cta: { label: 'Explore', path: '/insurance-claim' } },
      ],
    },
    faq: {
      title: 'Agri & food business, answered',
      items: [
        { q: 'Who is eligible for farmer loans?', a: 'Individual farmers, farmer producer organisations (FPOs), and registered agri-businesses with land or lease documentation are eligible.' },
        { q: 'How does warehouse receipt financing work?', a: 'Produce stored in an empanelled warehouse is issued a receipt, against which you can borrow a percentage of its assessed value.' },
        { q: 'Is crop insurance mandatory?', a: 'It is not mandatory but strongly recommended and often bundled at a discounted premium with crop loans.' },
      ],
    },
    related: {
      title: 'Related products',
      items: [
        { icon: 'Store', title: 'Business Banking', path: '/business-banking' },
        { icon: 'ShieldCheck', title: 'Insurance Claim', path: '/insurance-claim' },
        { icon: 'HandCoins', title: 'Loans', path: '/personal-banking/loans' },
      ],
    },
    cta: { title: 'Talk to our agri financing desk', description: 'Get a repayment plan structured around your harvest calendar.', primaryCta: { label: 'Contact agri desk', path: '/contact' }, secondaryCta: { label: 'Business Banking', path: '/business-banking' } },
  },

  privateBanking: {
    theme: 'gold',
    breadcrumb: [{ label: 'Private Banking', path: '/private-banking' }],
    hero: {
      icon: 'Crown', eyebrow: 'Private Banking',
      title: 'A dedicated banker for a more complex financial life',
      description: 'Wealth management, estate planning and priority banking for customers whose finances have outgrown a standard savings account.',
      primaryCta: { label: 'Request a private banker', path: '/contact' },
      secondaryCta: { label: 'View IBS Rewards', path: '/personal-banking/ibs-rewards' },
    },
    overview: {
      title: 'One relationship manager, every product',
      paragraphs: [
        'Private Banking pairs you with a dedicated relationship manager who coordinates lending, deposits, investments and estate planning as a single strategy rather than separate transactions.',
        'Priority access includes faster approvals, preferential rates on qualifying deposits, and invitation-only investment opportunities.',
      ],
      highlights: [
        { icon: 'Users', label: 'Private banking clients', value: '18,000+' },
        { icon: 'Crown', label: 'Avg. relationship tenure', value: '9 yrs' },
      ],
    },
    benefits: {
      title: 'What private banking includes',
      items: [
        { icon: 'UserCheck', title: 'Dedicated relationship manager', desc: 'One point of contact who knows your full financial picture.' },
        { icon: 'ChartLine', title: 'Curated investment access', desc: 'Access to structured products and pre-IPO opportunities where eligible.' },
        { icon: 'Crown', title: 'Preferential pricing', desc: 'Better rates on qualifying deposits and lending products.' },
        { icon: 'Plane', title: 'Global lifestyle privileges', desc: 'Airport lounge access and concierge services worldwide.' },
      ],
    },
    faq: {
      title: 'Private banking, answered',
      items: [
        { q: 'What is the eligibility for private banking?', a: 'Eligibility is based on relationship value across deposits and investments; our team can confirm your qualifying threshold on request.' },
        { q: 'Does private banking include investment advice?', a: 'Yes, subject to applicable regulatory suitability assessments carried out by our licensed advisors.' },
        { q: 'Can my family be added to the relationship?', a: 'Yes, private banking relationships can be extended to cover immediate family members under one coordinated strategy.' },
      ],
    },
    related: {
      title: 'Related products',
      items: [
        { icon: 'Landmark', title: 'Fixed Deposits', path: '/personal-banking/deposits' },
        { icon: 'Globe', title: 'NRI Banking', path: '/personal-banking/nri-banking' },
        { icon: 'Gift', title: 'IBS Rewards', path: '/personal-banking/ibs-rewards' },
      ],
    },
    cta: { title: 'Speak with a private banker', description: 'A member of our private banking team will reach out within one business day.', primaryCta: { label: 'Request a call', path: '/contact' }, secondaryCta: { label: 'Explore deposits', path: '/personal-banking/deposits' } },
  },

  ibsConnect: {
    theme: 'purple',
    breadcrumb: [{ label: 'IBS Connect', path: '/ibs-connect' }],
    hero: {
      icon: 'Smartphone', eyebrow: 'IBS Connect',
      title: 'The whole bank, redesigned for your phone',
      description: 'Accounts, cards, UPI and Nova the AI assistant — biometric login, instant transfers, and card controls in one clean app.',
      primaryCta: { label: 'Customer login', path: '/customer-login' },
      secondaryCta: { label: 'See digital banking', path: '/digital-banking' },
    },
    overview: {
      title: 'Designed to be opened daily, not just when something breaks',
      paragraphs: [
        'IBS Connect combines account management, card controls, bill payments and an AI assistant into a single fast, biometric-secured app.',
        'Real-time notifications mean you see a transaction the moment it happens — not the next morning in a summary email.',
      ],
      highlights: [
        { icon: 'Star', label: 'App store rating', value: '4.7/5' },
        { icon: 'Download', label: 'Downloads', value: '2.3 Cr+' },
      ],
    },
    features: {
      title: 'Inside the app',
      items: [
        { icon: 'KeyRound', title: 'Biometric Login', desc: 'Face or fingerprint unlock, no password to remember.' },
        { icon: 'Zap', title: 'Instant Transfers', desc: 'UPI and IMPS transfers reflect in seconds.' },
        { icon: 'ShieldCheck', title: 'Card Controls', desc: 'Freeze, set limits, or block international usage instantly.' },
        { icon: 'Bot', title: 'Nova AI Assistant', desc: 'Ask questions, raise disputes, get nudges — in plain language.' },
      ],
    },
    benefits: {
      title: 'Why customers keep it on their home screen',
      items: [
        { icon: 'Bell', title: 'Real-time alerts', desc: 'Every debit, credit and login attempt notified instantly.' },
        { icon: 'ChartPie', title: 'Auto-categorised spending', desc: 'A monthly summary that\u2019s actually ready when the month ends.' },
        { icon: 'QrCode', title: 'Scan & pay', desc: 'UPI QR payments and bill pay without leaving the app.' },
        { icon: 'Headphones', title: 'In-app support', desc: 'Chat with Nova or escalate to a human without switching apps.' },
      ],
    },
    faq: {
      title: 'IBS Connect, answered',
      items: [
        { q: 'Is IBS Connect available on both Android and iOS?', a: 'Yes, IBS Connect is available on both major app stores with feature parity across platforms.' },
        { q: 'What happens if I lose my phone?', a: 'Log in to net banking or call support to deregister the lost device instantly, then re-register on your new device via OTP.' },
        { q: 'Can I manage more than one account in the app?', a: 'Yes, all your accounts, cards and deposits linked to your customer ID appear under one login.' },
      ],
    },
    related: {
      title: 'Related products',
      items: [
        { icon: 'Server', title: 'Digital Banking', path: '/digital-banking' },
        { icon: 'ShieldCheck', title: 'Security', path: '/support' },
        { icon: 'LogIn', title: 'Customer Login', path: '/customer-login' },
      ],
    },
    cta: { title: 'Get IBS Connect', description: 'Search "IBS Connect" on your app store, or continue on the web.', primaryCta: { label: 'Customer login', path: '/customer-login' }, secondaryCta: { label: 'Learn about security', path: '/support' } },
  },

  careers: {
    theme: 'accent',
    breadcrumb: [{ label: 'Careers', path: '/careers' }],
    hero: {
      icon: 'Briefcase', eyebrow: 'Careers',
      title: 'Build the bank you wish existed',
      description: 'We hire engineers, risk analysts, branch bankers and designers who want banking software to feel less like 2010.',
      primaryCta: { label: 'View open roles', path: '/contact' },
      secondaryCta: { label: 'About IBS', path: '/about' },
    },
    overview: {
      title: 'Small teams, real ownership',
      paragraphs: [
        'IBS is organised into small product teams that own a domain end-to-end — from compliance requirements through to shipped code.',
        'We hire across engineering, risk & compliance, branch banking operations, and customer experience, with hybrid and branch-based roles available.',
      ],
      highlights: [
        { icon: 'Users', label: 'Employees', value: '14,000+' },
        { icon: 'Award', label: 'Great Place to Work', value: 'Certified' },
      ],
    },
    benefits: {
      title: 'Why people stay',
      items: [
        { icon: 'HeartHandshake', title: 'Real ownership', desc: 'Small teams that own a product area end-to-end, not just a ticket queue.' },
        { icon: 'GraduationCap', title: 'Learning budget', desc: 'Annual budget for courses, certifications and conferences.' },
        { icon: 'ShieldCheck', title: 'Comprehensive coverage', desc: 'Health insurance extending to parents and in-laws.' },
        { icon: 'Sparkles', title: 'Internal mobility', desc: 'Move between product, risk and operations teams as your interests evolve.' },
      ],
    },
    cards: {
      title: 'Open role categories',
      items: [
        { icon: 'Cpu', title: 'Engineering & Product', desc: 'Backend, frontend, data and platform roles.', cta: { label: 'View roles', path: '/contact' } },
        { icon: 'ShieldCheck', title: 'Risk & Compliance', desc: 'Credit risk, fraud and regulatory teams.', cta: { label: 'View roles', path: '/contact' } },
        { icon: 'Building2', title: 'Branch Banking', desc: 'Relationship managers and branch operations.', cta: { label: 'View roles', path: '/contact' } },
        { icon: 'Headphones', title: 'Customer Experience', desc: 'Support, Nova training, and escalations.', cta: { label: 'View roles', path: '/contact' } },
      ],
    },
    faq: {
      title: 'Careers, answered',
      items: [
        { q: 'Do you offer remote roles?', a: 'Engineering and several corporate functions offer hybrid or remote-friendly arrangements; branch roles are location-based.' },
        { q: 'Do you hire freshers?', a: 'Yes, we run an annual graduate programme across engineering, risk and branch banking tracks.' },
        { q: 'How long does the interview process take?', a: 'Most roles complete within three to four weeks from application to offer, depending on the team.' },
      ],
    },
    related: {
      title: 'Keep exploring',
      items: [
        { icon: 'Building', title: 'About IBS', path: '/about' },
        { icon: 'Mail', title: 'Contact Us', path: '/contact' },
        { icon: 'CircleQuestionMark', title: 'Support', path: '/support' },
      ],
    },
    cta: { title: 'See where you\u2019d fit', description: 'Browse open roles across engineering, risk and branch banking.', primaryCta: { label: 'Contact recruiting', path: '/contact' }, secondaryCta: { label: 'Our story', path: '/about' } },
  },

  support: {
    theme: 'accent',
    breadcrumb: [{ label: 'Support', path: '/support' }],
    hero: {
      icon: 'Headphones', eyebrow: 'Support Center',
      title: 'Get unstuck without waiting on hold',
      description: 'Self-serve guides, Nova the AI assistant, or a direct line to a human — pick whatever gets you answered fastest.',
      primaryCta: { label: 'File a complaint', path: '/complaint' },
      secondaryCta: { label: 'Track a request', path: '/track-request' },
    },
    overview: {
      title: 'Most issues resolve without a phone call',
      paragraphs: [
        'The Support Center groups help by topic so you land on the right guide immediately, instead of guessing which department to call.',
        'Every request raised here — a complaint, an insurance claim, a payment issue — gets a trackable reference ID you can follow in real time.',
      ],
      highlights: [
        { icon: 'Clock', label: 'Avg. first response', value: '<2 hrs' },
        { icon: 'CircleCheckBig', label: 'Resolved on first contact', value: '82%' },
      ],
    },
    cards: {
      title: 'Browse help by topic',
      items: [
        { icon: 'PiggyBank', title: 'Account Help', desc: 'Balance, statements, KYC updates.', cta: { label: 'Explore', path: '/personal-banking' } },
        { icon: 'CreditCard', title: 'Card Help', desc: 'Freeze, replace or dispute a charge.', cta: { label: 'Explore', path: '/cards/bill-payment' } },
        { icon: 'HandCoins', title: 'Loan Help', desc: 'EMI schedule, foreclosure, statements.', cta: { label: 'Explore', path: '/online-loan-payments' } },
        { icon: 'ShieldCheck', title: 'Security & Fraud', desc: 'Report unauthorised activity immediately.', cta: { label: 'Explore', path: '/complaint' } },
      ],
    },
    faq: {
      title: 'Support, answered',
      items: [
        { q: 'How do I track a complaint I already filed?', a: 'Use the reference ID emailed to you at submission on the Track a Request page for live status updates.' },
        { q: 'What is the resolution time for a complaint?', a: 'Most complaints resolve within 5 working days; complex disputes may take longer and you\u2019ll be notified of the revised timeline.' },
        { q: 'Can I escalate if I\u2019m not satisfied?', a: 'Yes — unresolved complaints automatically escalate to our nodal grievance officer after the standard resolution window.' },
      ],
    },
    related: {
      title: 'Common requests',
      items: [
        { icon: 'ClipboardList', title: 'File a Complaint', path: '/complaint' },
        { icon: 'Search', title: 'Track a Request', path: '/track-request' },
        { icon: 'ShieldCheck', title: 'Insurance Claim', path: '/insurance-claim' },
      ],
    },
    cta: { title: 'Still stuck?', description: 'Reach a real person through phone, email or chat.', primaryCta: { label: 'Contact us', path: '/contact' }, secondaryCta: { label: 'File a complaint', path: '/complaint' } },
  },

  savingsAccount: {
    theme: 'accent',
    breadcrumb: [{ label: 'Personal Banking', path: '/personal-banking' }, { label: 'Savings Account', path: '/personal-banking/savings-account' }],
    hero: {
      icon: 'PiggyBank', eyebrow: 'Savings Account',
      title: 'A savings account that opens in one sitting',
      description: 'Zero-balance options, up to 4.5% p.a. interest, and a virtual debit card the moment your video-KYC finishes.',
      primaryCta: { label: 'Open account now', path: '/customer-login' },
      secondaryCta: { label: 'Compare tiers below', path: '#' },
    },
    overview: {
      title: 'No branch visit, no waiting for a physical card',
      paragraphs: [
        'Video-KYC verifies your identity over a short video call, after which your account number and a virtual debit card are issued immediately — usable for online payments and UPI right away.',
        'Interest is calculated daily on your closing balance and credited every quarter, so idle balances keep earning instead of sitting flat.',
      ],
      highlights: [
        { icon: 'Percent', label: 'Interest rate range', value: '3.5–4.5%' },
        { icon: 'Zap', label: 'Account activation', value: '<6 min' },
      ],
    },
    benefits: {
      title: 'What comes with the account',
      items: [
        { icon: 'Smartphone', title: 'Instant virtual card', desc: 'Start paying online and via UPI before the physical card even ships.' },
        { icon: 'Gift', title: 'IBS Rewards enabled', desc: 'Every debit card swipe earns into your rewards balance.' },
        { icon: 'ShieldCheck', title: 'Zero liability protection', desc: 'Report fraud within 3 days for zero-liability coverage on unauthorised transactions.' },
        { icon: 'ChartPie', title: 'Auto-categorised spends', desc: 'See exactly where your money goes without manual tagging.' },
      ],
    },
    cards: {
      title: 'Pick your savings tier',
      subtitle: 'All tiers include UPI, a debit card, and IBS Connect access.',
      items: [
        { icon: 'PiggyBank', badge: '3.5% p.a.', title: 'Regular Savings', desc: 'Zero minimum balance, built for everyday use.', features: ['No minimum balance', 'Free virtual debit card', 'UPI & IBS Connect included'], cta: { label: 'Open now', path: '/customer-login' } },
        { icon: 'Sparkles', badge: '4.5% p.a.', title: 'Premium Savings', desc: 'Higher interest for maintained balances.', features: ['₹25,000 avg. monthly balance', 'Priority customer support', 'Free international debit card'], cta: { label: 'Open now', path: '/customer-login' } },
        { icon: 'HeartHandshake', badge: '5% p.a.', title: 'Senior Citizen Savings', desc: 'Preferential rate for customers 60 and above.', features: ['Highest savings rate', 'Doorstep banking requests', 'Dedicated support line'], cta: { label: 'Open now', path: '/customer-login' } },
      ],
    },
    faq: {
      title: 'Savings account, answered',
      items: [
        { q: 'Is there a minimum balance requirement?', a: 'Regular Savings has zero minimum balance. Premium Savings requires an average monthly balance of ₹25,000 to earn the higher rate.' },
        { q: 'How quickly can I start using the account?', a: 'Once video-KYC completes, your account number and virtual debit card are active immediately for UPI and online payments.' },
        { q: 'Can I upgrade from Regular to Premium later?', a: 'Yes, you can upgrade anytime from IBS Connect once your average balance qualifies, with no account closure needed.' },
        { q: 'How is interest paid out?', a: 'Interest accrues daily on your closing balance and is credited to your account at the end of each quarter.' },
      ],
    },
    related: {
      title: 'You might also need',
      items: [
        { icon: 'Wallet', title: 'Salary Account', path: '/personal-banking/salary-account' },
        { icon: 'Landmark', title: 'Fixed Deposits', path: '/personal-banking/deposits' },
        { icon: 'CreditCard', title: 'Credit Cards', path: '/personal-banking/cards/credit-cards' },
      ],
    },
    cta: { title: 'Open your savings account today', description: 'Video-KYC takes about 6 minutes, start to finish.', primaryCta: { label: 'Get started', path: '/customer-login' }, secondaryCta: { label: 'Talk to us first', path: '/contact' } },
  },

  salaryAccount: {
    theme: 'accent',
    breadcrumb: [{ label: 'Personal Banking', path: '/personal-banking' }, { label: 'Salary Account', path: '/personal-banking/salary-account' }],
    hero: {
      icon: 'Wallet', eyebrow: 'Salary Account',
      title: 'Zero-fee banking your whole company can switch to',
      description: 'No minimum balance, free debit card, and preferential loan rates the moment your salary starts crediting.',
      primaryCta: { label: 'Get corporate salary tie-up', path: '/contact' },
      secondaryCta: { label: 'Open individually', path: '/customer-login' },
    },
    overview: {
      title: 'Built for HR teams and employees alike',
      paragraphs: [
        'Salary accounts carry zero minimum balance requirements for as long as salary credits continue, plus a free debit card and preferential rates on personal loans.',
        'Corporate HR teams get a dedicated onboarding portal to bulk-open accounts for new joiners without individual branch visits.',
      ],
      highlights: [
        { icon: 'Building2', label: 'Corporate tie-ups', value: '3,200+' },
        { icon: 'Percent', label: 'Loan rate discount', value: '0.25%' },
      ],
    },
    benefits: {
      title: 'Perks that kick in automatically',
      items: [
        { icon: 'ShieldCheck', title: 'Zero balance requirement', desc: 'No minimum balance penalty as long as salary keeps crediting.' },
        { icon: 'CreditCard', title: 'Free debit card', desc: 'Platinum debit card at no annual fee for salary account holders.' },
        { icon: 'HandCoins', title: 'Preferential loan rates', desc: '0.25% rate discount on personal and auto loans.' },
        { icon: 'Gift', title: 'Bonus rewards', desc: 'Extra IBS Rewards points on your first 90 days of transactions.' },
      ],
    },
    cards: {
      title: 'Salary account tiers',
      items: [
        { icon: 'Wallet', badge: 'Classic', title: 'Classic Salary', desc: 'For salaries up to ₹50,000/month.', features: ['Free debit card', 'Zero balance requirement'], cta: { label: 'Explore', path: '/customer-login' } },
        { icon: 'Sparkles', badge: 'Premium', title: 'Premium Salary', desc: 'For salaries ₹50,000–₹1.5L/month.', features: ['Free platinum debit card', 'Priority support'], cta: { label: 'Explore', path: '/customer-login' } },
        { icon: 'Crown', badge: 'Privilege', title: 'Privilege Salary', desc: 'For salaries above ₹1.5L/month.', features: ['Airport lounge access', 'Dedicated relationship desk'], cta: { label: 'Explore', path: '/customer-login' } },
      ],
    },
    faq: {
      title: 'Salary account, answered',
      items: [
        { q: 'What happens if my salary stops crediting?', a: 'After three months without a salary credit, the account converts to a Regular Savings account with standard minimum balance rules.' },
        { q: 'Can my employer set this up for the whole team?', a: 'Yes, our corporate salary desk can onboard your full employee list through a bulk account-opening portal.' },
        { q: 'Is the debit card free every year?', a: 'Yes, the annual fee is waived for as long as the account remains an active salary account.' },
      ],
    },
    related: {
      title: 'You might also need',
      items: [
        { icon: 'PiggyBank', title: 'Savings Account', path: '/personal-banking/savings-account' },
        { icon: 'HandCoins', title: 'Personal Loans', path: '/personal-banking/loans' },
        { icon: 'CreditCard', title: 'Credit Cards', path: '/personal-banking/cards/credit-cards' },
      ],
    },
    cta: { title: 'Bring your company on board', description: 'Set up a corporate salary tie-up for your whole team.', primaryCta: { label: 'Talk to corporate desk', path: '/contact' }, secondaryCta: { label: 'Open individually', path: '/customer-login' } },
  },

  deposits: {
    theme: 'success',
    breadcrumb: [{ label: 'Personal Banking', path: '/personal-banking' }, { label: 'Deposits', path: '/personal-banking/deposits' }],
    hero: {
      icon: 'Landmark', eyebrow: 'Fixed & Recurring Deposits',
      title: 'Lock in a rate before it moves again',
      description: 'Fixed and recurring deposits up to 7.75% p.a., with partial withdrawal so your money is never fully out of reach.',
      primaryCta: { label: 'Open a deposit', path: '/customer-login' },
      secondaryCta: { label: 'Compare schemes below', path: '#' },
    },
    overview: {
      title: 'Deposits that don\u2019t lock you out completely',
      paragraphs: [
        'Unlike traditional FDs, IBS deposits allow partial withdrawal in emergencies without breaking the entire deposit or losing all accrued interest.',
        'Senior citizens automatically receive a 0.5% rate bump across all fixed deposit tenures, applied without any extra paperwork.',
      ],
      highlights: [
        { icon: 'Percent', label: 'Top FD rate', value: '7.75%' },
        { icon: 'Clock', label: 'Tenure range', value: '7 days–10 yrs' },
      ],
    },
    benefits: {
      title: 'Why lock money in with IBS',
      items: [
        { icon: 'RefreshCw', title: 'Partial withdrawal', desc: 'Break part of a deposit without losing interest on the rest.' },
        { icon: 'HeartHandshake', title: 'Senior citizen bonus', desc: 'Automatic 0.5% rate bump for customers 60 and above.' },
        { icon: 'HandCoins', title: 'Loan against deposit', desc: 'Borrow up to 90% of your deposit value without breaking it.' },
        { icon: 'RefreshCw', title: 'Auto-renewal', desc: 'Set deposits to renew automatically at maturity, or auto-credit to savings.' },
      ],
    },
    cards: {
      title: 'Deposit schemes',
      items: [
        { icon: 'Landmark', badge: '7.75% p.a.', title: 'Fixed Deposit', desc: 'Lump-sum deposit, 7 days to 10 years.', features: ['Partial withdrawal allowed', 'Loan against FD available'], cta: { label: 'Open FD', path: '/customer-login' } },
        { icon: 'RefreshCw', badge: '7.25% p.a.', title: 'Recurring Deposit', desc: 'Monthly instalments from ₹500.', features: ['Flexible tenure, 6–120 months', 'Auto-debit from savings'], cta: { label: 'Open RD', path: '/customer-login' } },
        { icon: 'ShieldCheck', badge: '7.5% p.a.', title: 'Tax-Saver Fixed Deposit', desc: '5-year lock-in, Section 80C eligible.', features: ['Tax deduction up to ₹1.5L', 'No premature withdrawal'], cta: { label: 'Open now', path: '/customer-login' } },
      ],
    },
    faq: {
      title: 'Deposits, answered',
      items: [
        { q: 'Can I withdraw a fixed deposit before maturity?', a: 'Yes, with a small interest penalty on the withdrawn portion; the remaining deposit continues to earn its original rate.' },
        { q: 'Is FD interest taxable?', a: 'Yes, interest earned is added to your taxable income, and TDS applies above the threshold prescribed under prevailing tax rules.' },
        { q: 'What is the minimum amount for a recurring deposit?', a: 'Recurring deposits can be started with instalments as low as ₹500 per month.' },
      ],
    },
    related: {
      title: 'You might also need',
      items: [
        { icon: 'PiggyBank', title: 'Savings Account', path: '/personal-banking/savings-account' },
        { icon: 'Crown', title: 'Private Banking', path: '/private-banking' },
        { icon: 'HandCoins', title: 'Loan Against Deposit', path: '/personal-banking/loans' },
      ],
    },
    cta: { title: 'Lock in today\u2019s rate', description: 'Rates are reviewed quarterly — open before the next revision.', primaryCta: { label: 'Open a deposit', path: '/customer-login' }, secondaryCta: { label: 'Talk to an advisor', path: '/contact' } },
  },

  consumerLoans: {
    theme: 'purple',
    breadcrumb: [{ label: 'Personal Banking', path: '/personal-banking' }, { label: 'Loans', path: '/personal-banking/loans' }],
    hero: {
      icon: 'HandCoins', eyebrow: 'Loans',
      title: 'Know your EMI before you fill a single form',
      description: 'Home, personal, auto and education loans with instant eligibility checks and minimal paperwork for salaried and self-employed applicants.',
      primaryCta: { label: 'Check eligibility', path: '/customer-login' },
      secondaryCta: { label: 'Pay an existing EMI', path: '/online-loan-payments' },
    },
    overview: {
      title: 'Digital-first, but never a black box',
      paragraphs: [
        'Every loan product shows its indicative rate range, processing fee and eligibility criteria up front — no "contact us for rates" dead ends.',
        'Prepayment is allowed after 12 EMIs without penalty on floating-rate loans, so you\u2019re never locked into paying more interest than necessary.',
      ],
      highlights: [
        { icon: 'Percent', label: 'Home loan starts at', value: '8.35%' },
        { icon: 'Zap', label: 'Eligibility check', value: 'Instant' },
      ],
    },
    benefits: {
      title: 'What makes IBS loans different',
      items: [
        { icon: 'Zap', title: 'Instant eligibility', desc: 'See your approved amount before submitting any documents.' },
        { icon: 'FileCheck', title: 'Minimal paperwork', desc: 'Salaried applicants can complete the entire process digitally.' },
        { icon: 'RefreshCw', title: 'Free part-prepayment', desc: 'No penalty on part-prepayment after 12 EMIs on floating rates.' },
        { icon: 'ShieldCheck', title: 'Transparent charges', desc: 'Processing fees and charges are shown before you accept the offer.' },
      ],
    },
    cards: {
      title: 'Loan products',
      subtitle: 'Indicative starting rates — your final rate depends on credit profile.',
      items: [
        { icon: 'House', badge: '8.35% p.a.', title: 'Home Loan', desc: 'Up to ₹5 Cr, tenure up to 30 years.', features: ['Balance transfer available', 'Top-up loan option'], cta: { label: 'Check eligibility', path: '/customer-login' } },
        { icon: 'HandCoins', badge: '10.5% p.a.', title: 'Personal Loan', desc: 'Up to ₹40L, disbursed in 24 hours.', features: ['No collateral required', 'Flexible 1–5 year tenure'], cta: { label: 'Check eligibility', path: '/customer-login' } },
        { icon: 'CircleDollarSign', badge: '8.75% p.a.', title: 'Auto Loan', desc: 'Up to 100% on-road funding.', features: ['New & used vehicles', 'Quick dealer disbursal'], cta: { label: 'Check eligibility', path: '/customer-login' } },
        { icon: 'GraduationCap', badge: '9% p.a.', title: 'Education Loan', desc: 'For domestic & international study.', features: ['Moratorium during course', 'Covers tuition & living costs'], cta: { label: 'Check eligibility', path: '/customer-login' } },
      ],
    },
    faq: {
      title: 'Loans, answered',
      items: [
        { q: 'How is my interest rate decided?', a: 'Your final rate depends on credit score, income stability, loan tenure and existing obligations, shown to you before you accept any offer.' },
        { q: 'Can I prepay my loan early?', a: 'Yes, floating-rate loans can be part-prepaid without penalty after 12 EMIs; fixed-rate loans may carry a small charge.' },
        { q: 'How long does disbursal take?', a: 'Personal loans for pre-approved customers can disburse within 24 hours; home loans typically take 5–7 working days after document verification.' },
      ],
    },
    related: {
      title: 'You might also need',
      items: [
        { icon: 'Receipt', title: 'Pay Loan EMI', path: '/online-loan-payments' },
        { icon: 'PiggyBank', title: 'Savings Account', path: '/personal-banking/savings-account' },
        { icon: 'ShieldCheck', title: 'Insurance Claim', path: '/insurance-claim' },
      ],
    },
    cta: { title: 'Ready to check your eligibility?', description: 'Get an instant indicative approval amount — no paperwork required yet.', primaryCta: { label: 'Check eligibility', path: '/customer-login' }, secondaryCta: { label: 'Talk to a loan advisor', path: '/contact' } },
  },

  creditCards: {
    theme: 'purple',
    breadcrumb: [{ label: 'Personal Banking', path: '/personal-banking' }, { label: 'Credit Cards', path: '/personal-banking/cards/credit-cards' }],
    hero: {
      icon: 'CreditCard', eyebrow: 'Credit Cards',
      title: 'Metal cards that reward how you actually spend',
      description: 'Platinum, Signature and Infinite tiers with real-time spend tracking, lounge access, and rewards that don\u2019t expire in 90 days.',
      primaryCta: { label: 'Apply now', path: '/customer-login' },
      secondaryCta: { label: 'Pay a card bill', path: '/cards/bill-payment' },
    },
    overview: {
      title: 'Built around three spending styles, not one generic card',
      paragraphs: [
        'Every IBS credit card shows real-time spend tracking with auto-categorisation, so you see where your money went the moment a transaction settles.',
        'IBS Rewards points earned on any card never expire while the account stays active, and can be redeemed across 300+ partner brands.',
      ],
      highlights: [
        { icon: 'Users', label: 'Cards issued', value: '38L+' },
        { icon: 'Plane', label: 'Airport lounges', value: '1,000+' },
      ],
    },
    benefits: {
      title: 'Standard across every tier',
      items: [
        { icon: 'ChartPie', title: 'Real-time spend tracking', desc: 'See a transaction the second it settles, auto-categorised.' },
        { icon: 'Gift', title: 'Points that don\u2019t expire', desc: 'Rewards stay valid as long as your account is active.' },
        { icon: 'ShieldCheck', title: 'Zero liability on fraud', desc: 'Report within 3 days for full protection on unauthorised spends.' },
        { icon: 'Smartphone', title: 'Instant card controls', desc: 'Freeze, set limits, or block international usage from the app.' },
      ],
    },
    cards: {
      title: 'Choose your card',
      subtitle: 'All cards include contactless payments and IBS Rewards.',
      items: [
        { icon: 'CreditCard', badge: 'Entry', title: 'IBS Platinum', desc: 'Zero joining fee, everyday rewards.', features: ['1% cashback on all spends', '4 airport lounge visits/year'], variant: 'card', cta: { label: 'Apply now', path: '/customer-login' } },
        { icon: 'Sparkles', badge: 'Mid-tier', title: 'IBS Signature', desc: 'Travel & dining focused rewards.', features: ['5x points on travel & dining', '8 lounge visits/year'], variant: 'card', cta: { label: 'Apply now', path: '/customer-login' } },
        { icon: 'Gem', badge: 'Premium', title: 'IBS Infinite', desc: 'Unlimited lounge access, concierge.', features: ['Unlimited airport lounges', 'Dedicated concierge desk'], variant: 'card', cta: { label: 'Apply now', path: '/customer-login' } },
      ],
    },
    faq: {
      title: 'Credit cards, answered',
      items: [
        { q: 'What is the joining fee?', a: 'IBS Platinum has zero joining fee. Signature and Infinite carry an annual fee that is waived on crossing an annual spend threshold.' },
        { q: 'How do I redeem IBS Rewards points?', a: 'Redeem directly within IBS Connect against statement credit, partner brand vouchers, or airline miles transfer.' },
        { q: 'Can I upgrade my card tier later?', a: 'Yes, upgrades are available once your spending history and credit profile qualify, without needing a fresh application.' },
      ],
    },
    related: {
      title: 'You might also need',
      items: [
        { icon: 'WalletMinimal', title: 'Debit Cards', path: '/personal-banking/cards/debit-cards' },
        { icon: 'Receipt', title: 'Pay Card Bill', path: '/cards/bill-payment' },
        { icon: 'Gift', title: 'IBS Rewards', path: '/personal-banking/ibs-rewards' },
      ],
    },
    cta: { title: 'Find your card in under 2 minutes', description: 'Check pre-approved offers based on your existing relationship.', primaryCta: { label: 'Apply now', path: '/customer-login' }, secondaryCta: { label: 'Compare all cards', path: '#' } },
  },

  debitCards: {
    theme: 'accent',
    breadcrumb: [{ label: 'Personal Banking', path: '/personal-banking' }, { label: 'Debit Cards', path: '/personal-banking/cards/debit-cards' }],
    hero: {
      icon: 'WalletMinimal', eyebrow: 'Debit Cards',
      title: 'Contactless cards that come free with your account',
      description: 'Tap-to-pay debit cards with airport lounge access and zero-liability fraud protection — issued the moment your account opens.',
      primaryCta: { label: 'Manage my card', path: '/customer-login' },
      secondaryCta: { label: 'Report lost card', path: '/complaint' },
    },
    overview: {
      title: 'More than a way to withdraw cash',
      paragraphs: [
        'IBS debit cards support contactless payments, international usage (toggle-controlled), and ATM withdrawals across a shared network of 5,400+ machines fee-free.',
        'Every debit card ships with a virtual counterpart usable the moment your account activates, so you\u2019re never waiting on the post for your first payment.',
      ],
      highlights: [
        { icon: 'Building2', label: 'Fee-free ATMs', value: '5,400+' },
        { icon: 'Plane', label: 'Lounge visits (Platinum)', value: '2/quarter' },
      ],
    },
    benefits: {
      title: 'Included with every debit card',
      items: [
        { icon: 'Wifi', title: 'Contactless tap-to-pay', desc: 'Tap for purchases under the contactless limit, no PIN needed.' },
        { icon: 'ShieldCheck', title: 'Zero liability protection', desc: 'Full protection on unauthorised transactions reported within 3 days.' },
        { icon: 'Globe', title: 'International usage toggle', desc: 'Switch on international transactions only when you\u2019re travelling.' },
        { icon: 'Smartphone', title: 'Instant issuance', desc: 'A usable virtual card the moment your account is active.' },
      ],
    },
    cards: {
      title: 'Debit card variants',
      items: [
        { icon: 'WalletMinimal', badge: 'Classic', title: 'IBS Classic Debit', desc: 'Comes standard with Regular Savings.', features: ['Free issuance & replacement year one'], variant: 'card', cta: { label: 'Manage card', path: '/customer-login' } },
        { icon: 'Sparkles', badge: 'Platinum', title: 'IBS Platinum Debit', desc: 'Higher daily limits, lounge access.', features: ['2 lounge visits per quarter', 'Higher POS & ATM limits'], variant: 'card', cta: { label: 'Manage card', path: '/customer-login' } },
        { icon: 'Globe', badge: 'World', title: 'IBS World Debit', desc: 'Built for frequent international spends.', features: ['Zero forex markup', 'Global emergency card replacement'], variant: 'card', cta: { label: 'Manage card', path: '/customer-login' } },
      ],
    },
    faq: {
      title: 'Debit cards, answered',
      items: [
        { q: 'How do I enable international transactions?', a: 'Toggle international usage on from the Security Center in IBS Connect before you travel, and switch it off when you\u2019re done.' },
        { q: 'What are the daily withdrawal limits?', a: 'Limits vary by card tier and can be adjusted within the maximum allowed range directly from the app.' },
        { q: 'Is card replacement free?', a: 'The first replacement each year is free; subsequent replacements carry a nominal fee shown before you confirm the request.' },
      ],
    },
    related: {
      title: 'You might also need',
      items: [
        { icon: 'CreditCard', title: 'Credit Cards', path: '/personal-banking/cards/credit-cards' },
        { icon: 'Gift', title: 'Prepaid Cards', path: '/personal-banking/cards/prepaid-cards' },
        { icon: 'ClipboardList', title: 'File a Complaint', path: '/complaint' },
      ],
    },
    cta: { title: 'Manage your debit card anytime', description: 'Set limits, freeze instantly, or enable travel mode.', primaryCta: { label: 'Open IBS Connect', path: '/customer-login' }, secondaryCta: { label: 'Report an issue', path: '/complaint' } },
  },

  prepaidCards: {
    theme: 'success',
    breadcrumb: [{ label: 'Personal Banking', path: '/personal-banking' }, { label: 'Prepaid Cards', path: '/personal-banking/cards/prepaid-cards' }],
    hero: {
      icon: 'Gift', eyebrow: 'Prepaid Cards',
      title: 'Load it once, spend it anywhere',
      description: 'Forex travel cards, gift cards and corporate prepaid cards — no bank account linkage required to get started.',
      primaryCta: { label: 'Order a card', path: '/customer-login' },
      secondaryCta: { label: 'Corporate bulk orders', path: '/contact' },
    },
    overview: {
      title: 'For travel, gifting, and controlled corporate spends',
      paragraphs: [
        'Prepaid cards suit situations where you want spending capped at a fixed amount — travel budgets, gifting, or employee expense allowances.',
        'Forex cards lock in an exchange rate at load time, protecting you from currency swings during a trip.',
      ],
      highlights: [
        { icon: 'Globe', label: 'Currencies supported', value: '12+' },
        { icon: 'ShieldCheck', label: 'Loss protection', value: 'Included' },
      ],
    },
    benefits: {
      title: 'Why choose prepaid',
      items: [
        { icon: 'ShieldCheck', title: 'Capped exposure', desc: 'Only the loaded amount is ever at risk if the card is compromised.' },
        { icon: 'Globe', title: 'Locked exchange rates', desc: 'Forex cards fix your rate at the time of loading, not spending.' },
        { icon: 'ClipboardList', title: 'No bank account needed', desc: 'Gift and prepaid cards can be issued to non-account holders.' },
        { icon: 'Store', title: 'Corporate expense control', desc: 'Bulk-issue cards with spend categories and limits for employees.' },
      ],
    },
    cards: {
      title: 'Prepaid card types',
      items: [
        { icon: 'Globe', title: 'Forex Travel Card', desc: 'Multi-currency card for international trips.', features: ['Locked exchange rate', 'Free ATM withdrawals abroad (limited)'], variant: 'card', cta: { label: 'Order now', path: '/customer-login' } },
        { icon: 'Gift', title: 'Gift Card', desc: 'Preloaded cards for gifting, ₹500–₹25,000.', features: ['No KYC for recipient', 'Valid for 3 years'], variant: 'card', cta: { label: 'Order now', path: '/customer-login' } },
        { icon: 'Briefcase', title: 'Corporate Prepaid', desc: 'Bulk-issued cards for employee expenses.', features: ['Category-wise spend limits', 'Centralised reporting dashboard'], variant: 'card', cta: { label: 'Contact sales', path: '/contact' } },
      ],
    },
    faq: {
      title: 'Prepaid cards, answered',
      items: [
        { q: 'Do I need an IBS bank account to get a prepaid card?', a: 'No, gift and forex prepaid cards can be issued to anyone with basic KYC, independent of holding a savings account.' },
        { q: 'Can I reload a forex card during my trip?', a: 'Yes, reloads can be done through IBS Connect if you have app access, or via net banking before departure.' },
        { q: 'What happens to unused balance on a gift card?', a: 'Unused balance remains valid until the card\u2019s expiry date and can be used across any accepting merchant.' },
      ],
    },
    related: {
      title: 'You might also need',
      items: [
        { icon: 'Globe', title: 'NRI Banking', path: '/personal-banking/nri-banking' },
        { icon: 'CreditCard', title: 'Credit Cards', path: '/personal-banking/cards/credit-cards' },
        { icon: 'Store', title: 'Business Banking', path: '/business-banking' },
      ],
    },
    cta: { title: 'Order a prepaid card today', description: 'Delivered within 3–5 working days across India.', primaryCta: { label: 'Order now', path: '/customer-login' }, secondaryCta: { label: 'Corporate enquiries', path: '/contact' } },
  },

  nriBanking: {
    theme: 'accent',
    breadcrumb: [{ label: 'Personal Banking', path: '/personal-banking' }, { label: 'NRI Banking', path: '/personal-banking/nri-banking' }],
    hero: {
      icon: 'Globe', eyebrow: 'NRI Banking',
      title: 'Banking in India, without being in India',
      description: 'NRE, NRO and FCNR accounts opened remotely, with zero forex markup and dedicated NRI relationship support.',
      primaryCta: { label: 'Start account opening', path: '/contact' },
      secondaryCta: { label: 'Compare account types', path: '#' },
    },
    overview: {
      title: 'Opened remotely, supported across time zones',
      paragraphs: [
        'NRI account opening is handled through document upload and video verification, with couriered welcome kits — no requirement to visit a branch in India.',
        'A dedicated NRI desk operates extended hours to cover customers across the Gulf, North America, Europe and APAC time zones.',
      ],
      highlights: [
        { icon: 'Globe', label: 'Countries served', value: '30+' },
        { icon: 'Percent', label: 'Forex markup', value: '0%' },
      ],
    },
    benefits: {
      title: 'Why NRIs choose IBS',
      items: [
        { icon: 'Globe', title: 'Remote account opening', desc: 'Complete KYC via document upload and video call from abroad.' },
        { icon: 'Percent', title: 'Zero forex markup', desc: 'Transparent, wholesale-linked exchange rates on remittances.' },
        { icon: 'Headphones', title: 'Extended-hours NRI desk', desc: 'Support timed to Gulf, US, UK and APAC working hours.' },
        { icon: 'HandCoins', title: 'NRI home loans', desc: 'Property loans in India backed by your overseas income.' },
      ],
    },
    cards: {
      title: 'NRI account types',
      items: [
        { icon: 'Landmark', title: 'NRE Account', desc: 'Repatriable, tax-free interest in India.', features: ['Fully repatriable', 'Interest exempt from Indian tax'], cta: { label: 'Learn more', path: '/contact' } },
        { icon: 'Building2', title: 'NRO Account', desc: 'For income earned within India.', features: ['Manage rent, dividends, pensions', 'Limited repatriation allowed'], cta: { label: 'Learn more', path: '/contact' } },
        { icon: 'ShieldCheck', title: 'FCNR Deposit', desc: 'Foreign-currency fixed deposits.', features: ['No exchange rate risk', 'Available in 6 major currencies'], cta: { label: 'Learn more', path: '/contact' } },
      ],
    },
    faq: {
      title: 'NRI banking, answered',
      items: [
        { q: 'Can I open an NRI account without visiting India?', a: 'Yes, the entire process is handled via document upload and a video verification call, with your welcome kit couriered internationally.' },
        { q: 'What is the difference between NRE and NRO accounts?', a: 'NRE accounts hold foreign income and are fully repatriable with tax-free interest; NRO accounts hold India-sourced income with limited repatriation.' },
        { q: 'Can I apply for a home loan in India as an NRI?', a: 'Yes, NRI home loans are assessed against your overseas income and require a co-applicant resident in India in most cases.' },
      ],
    },
    related: {
      title: 'You might also need',
      items: [
        { icon: 'Landmark', title: 'Fixed Deposits', path: '/personal-banking/deposits' },
        { icon: 'Gift', title: 'Prepaid Forex Cards', path: '/personal-banking/cards/prepaid-cards' },
        { icon: 'Crown', title: 'Private Banking', path: '/private-banking' },
      ],
    },
    cta: { title: 'Start your NRI account from anywhere', description: 'Our NRI desk will guide you through document upload and verification.', primaryCta: { label: 'Contact NRI desk', path: '/contact' }, secondaryCta: { label: 'Explore deposits', path: '/personal-banking/deposits' } },
  },

  ibsRewards: {
    theme: 'gold',
    breadcrumb: [{ label: 'Personal Banking', path: '/personal-banking' }, { label: 'IBS Rewards', path: '/personal-banking/ibs-rewards' }],
    hero: {
      icon: 'Gift', eyebrow: 'IBS Rewards',
      title: 'One rewards balance for everything you spend',
      description: 'Cards, UPI spends and bill payments all feed the same points balance — redeemable across 300+ partner brands.',
      primaryCta: { label: 'View my balance', path: '/customer-login' },
      secondaryCta: { label: 'Browse redemption catalogue', path: '#' },
    },
    overview: {
      title: 'Points that actually add up to something',
      paragraphs: [
        'Unlike scheme-specific loyalty programmes, IBS Rewards pools points earned from every card and eligible transaction into a single balance.',
        'Points never expire while your account stays active, and can be redeemed as statement credit, airline miles, or vouchers across 300+ partner brands.',
      ],
      highlights: [
        { icon: 'Store', label: 'Partner brands', value: '300+' },
        { icon: 'Gift', label: 'Points redeemed (2025)', value: '210 Cr+' },
      ],
    },
    benefits: {
      title: 'How the programme works',
      items: [
        { icon: 'Sparkles', title: 'Pooled across products', desc: 'Card spends, UPI transactions and bill pay all earn into one balance.' },
        { icon: 'Clock', title: 'Points don\u2019t expire', desc: 'As long as your account stays active, your points stay valid.' },
        { icon: 'Plane', title: 'Airline mile transfer', desc: 'Convert points directly into miles with major airline partners.' },
        { icon: 'Store', title: '300+ brand catalogue', desc: 'Redeem for vouchers across fashion, electronics, travel and dining.' },
      ],
    },
    cards: {
      title: 'How you earn',
      items: [
        { icon: 'CreditCard', badge: '4x', title: 'Card Spends', desc: 'Earn up to 4x points on eligible credit card categories.', cta: { label: 'Compare cards', path: '/personal-banking/cards/credit-cards' } },
        { icon: 'QrCode', badge: '1x', title: 'UPI Payments', desc: 'Earn on qualifying UPI merchant transactions.', cta: { label: 'Digital banking', path: '/digital-banking' } },
        { icon: 'Receipt', badge: '2x', title: 'Bill Payments', desc: 'Bonus points on loan EMI and card bill payments made on time.', cta: { label: 'Pay a bill', path: '/cards/bill-payment' } },
      ],
    },
    faq: {
      title: 'IBS Rewards, answered',
      items: [
        { q: 'Do points expire?', a: 'No, points remain valid indefinitely as long as your IBS account stays active.' },
        { q: 'Can I transfer points to a family member?', a: 'Points transfer between IBS account holders in the same household is supported through IBS Connect, subject to verification.' },
        { q: 'How do I redeem for airline miles?', a: 'Link your airline loyalty number in IBS Connect and select the miles-transfer option from your rewards dashboard.' },
      ],
    },
    related: {
      title: 'You might also need',
      items: [
        { icon: 'CreditCard', title: 'Credit Cards', path: '/personal-banking/cards/credit-cards' },
        { icon: 'Receipt', title: 'Pay a Bill', path: '/cards/bill-payment' },
        { icon: 'PiggyBank', title: 'Savings Account', path: '/personal-banking/savings-account' },
      ],
    },
    cta: { title: 'Check your rewards balance', description: 'Log in to see your points and browse the redemption catalogue.', primaryCta: { label: 'View balance', path: '/customer-login' }, secondaryCta: { label: 'Compare cards', path: '/personal-banking/cards/credit-cards' } },
  },
};
