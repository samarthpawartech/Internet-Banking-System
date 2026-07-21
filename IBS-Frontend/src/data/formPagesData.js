export const formPagesData = {
  onlineLoanPayments: {
    breadcrumb: [{ label: 'Pay Loan EMI', path: '/online-loan-payments' }],
    hero: {
      icon: 'HandCoins', eyebrow: 'Loan Payments',
      title: 'Pay a loan EMI in under a minute',
      description: 'Settle an EMI early, clear an overdue instalment, or make a part-prepayment — no login required for a one-time payment.',
    },
    fields: [
      { name: 'loanAccount', label: 'Loan Account Number', type: 'text', placeholder: 'e.g. IBSLN00123456', required: true },
      { name: 'name', label: 'Name on Loan', type: 'text', placeholder: 'As per loan agreement', required: true },
      { name: 'amount', label: 'Payment Amount (₹)', type: 'number', placeholder: '25000', required: true },
      { name: 'mode', label: 'Payment Mode', type: 'select', options: ['Net Banking', 'UPI', 'Debit Card'], required: true },
    ],
    submitLabel: 'Pay Now',
    successTitle: 'Payment initiated',
    successDesc: 'Your loan payment request has been received and will reflect against your account shortly.',
    sidebar: {
      icon: 'ShieldCheck', title: 'Why pay here',
      points: ['Instant payment confirmation', 'Bank-grade encrypted checkout', 'Updated statement within 24 hours', 'No extra fee for early payment'],
    },
    faq: {
      title: 'Loan payments, answered',
      items: [
        { q: 'Is there a fee for paying my EMI online?', a: 'No, online EMI payments through this page carry no additional convenience fee.' },
        { q: 'How long until my payment reflects on my loan account?', a: 'Most payments reflect within a few hours; in rare cases it can take up to one business day.' },
        { q: 'Can I pay more than my EMI amount?', a: 'Yes, entering a higher amount is treated as a part-prepayment, subject to your loan\u2019s prepayment terms.' },
      ],
    },
  },

  creditCardBillPayment: {
    breadcrumb: [{ label: 'Credit Card Bill Payment', path: '/cards/bill-payment' }],
    hero: {
      icon: 'CreditCard', eyebrow: 'Card Bill Payment',
      title: 'Clear your card bill before it becomes interest',
      description: 'Pay your full statement balance, minimum due, or any custom amount on any IBS credit card.',
    },
    fields: [
      { name: 'cardNumber', label: 'Card Number (last 4 digits)', type: 'text', placeholder: 'e.g. 4821', required: true },
      { name: 'name', label: 'Name on Card', type: 'text', placeholder: 'As printed on card', required: true },
      { name: 'amount', label: 'Payment Amount (₹)', type: 'number', placeholder: '12500', required: true },
      { name: 'mode', label: 'Payment Mode', type: 'select', options: ['Net Banking', 'UPI', 'Another Bank Debit Card'], required: true },
    ],
    submitLabel: 'Pay Bill',
    successTitle: 'Bill payment received',
    successDesc: 'Your credit card bill payment is being processed and will reflect on your next statement.',
    sidebar: {
      icon: 'Percent', title: 'Avoid interest charges',
      points: ['Pay full statement balance to avoid interest', 'Minimum due only avoids late fees, not interest', 'Set up autopay from IBS Connect', 'Payments before 8 PM reflect same day'],
    },
    faq: {
      title: 'Card bill payment, answered',
      items: [
        { q: 'What\u2019s the difference between minimum due and total due?', a: 'Paying only the minimum due avoids a late payment fee but interest still accrues on the remaining balance; paying the total due avoids interest entirely.' },
        { q: 'Can I pay someone else\u2019s IBS card bill?', a: 'Yes, enter the card details and payer information accurately; the payment will apply to the specified card.' },
        { q: 'Is there a maximum payment amount?', a: 'Payments above a certain threshold may require additional verification for security purposes.' },
      ],
    },
  },

  insuranceClaim: {
    breadcrumb: [{ label: 'Insurance Claim', path: '/insurance-claim' }],
    hero: {
      icon: 'ShieldCheck', eyebrow: 'Insurance',
      title: 'File an insurance claim without the phone tag',
      description: 'Submit a claim for card protection, loan insurance, or a bundled policy, and track it end-to-end with one reference ID.',
    },
    fields: [
      { name: 'policyNumber', label: 'Policy / Certificate Number', type: 'text', placeholder: 'e.g. IBSINS-88213', required: true },
      { name: 'name', label: 'Policyholder Name', type: 'text', placeholder: 'Full name', required: true },
      { name: 'claimType', label: 'Claim Type', type: 'select', options: ['Card Protection', 'Loan Insurance', 'Health Rider', 'Travel Insurance', 'Other'], required: true },
      { name: 'incidentDate', label: 'Date of Incident', type: 'date', required: true },
      { name: 'description', label: 'Brief Description', type: 'textarea', placeholder: 'Describe what happened...', required: true, span: 'full' },
    ],
    submitLabel: 'Submit Claim',
    successTitle: 'Claim submitted',
    successDesc: 'Your claim has been registered. Our insurance partner will contact you within 2 business days.',
    sidebar: {
      icon: 'ClipboardList', title: 'Before you submit',
      points: ['Keep your policy number handy', 'Have supporting documents ready to email', 'Claims are typically assessed within 5-7 days', 'You can track status anytime with your reference ID'],
    },
    faq: {
      title: 'Insurance claims, answered',
      items: [
        { q: 'What documents will I need to submit?', a: 'Requirements vary by claim type; our claims team will email you a specific document checklist within 24 hours of submission.' },
        { q: 'How long does claim assessment take?', a: 'Most claims are assessed within 5-7 working days of receiving all required documents.' },
        { q: 'Can I track my claim status?', a: 'Yes, use the reference ID provided after submission on the Track a Request page.' },
      ],
    },
  },

  complaintForm: {
    breadcrumb: [{ label: 'File a Complaint', path: '/complaint' }],
    hero: {
      icon: 'ClipboardList', eyebrow: 'Complaints',
      title: 'Tell us what went wrong — we\u2019ll take it from here',
      description: 'Every complaint gets a trackable reference ID and a resolution timeline, whether it\u2019s about a charge, an app bug, or a branch experience.',
    },
    fields: [
      { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name', required: true },
      { name: 'accountRef', label: 'Account / Card Number', type: 'text', placeholder: 'Optional, if applicable' },
      { name: 'category', label: 'Complaint Category', type: 'select', options: ['Transaction Dispute', 'App / Net Banking Issue', 'Branch Experience', 'Card Related', 'Loan Related', 'Other'], required: true },
      { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Short summary', required: true },
      { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Explain what happened in detail...', required: true, span: 'full' },
    ],
    submitLabel: 'Submit Complaint',
    successTitle: 'Complaint registered',
    successDesc: 'Your complaint has been logged and assigned to the relevant team for resolution.',
    sidebar: {
      icon: 'Clock', title: 'What happens next',
      points: ['Acknowledgement email within 1 hour', 'Resolution target: 5 working days', 'Auto-escalation if unresolved past deadline', 'Track live status with your reference ID'],
    },
    faq: {
      title: 'Complaints, answered',
      items: [
        { q: 'How long will it take to resolve my complaint?', a: 'Most complaints are resolved within 5 working days; you\u2019ll be notified if a case requires additional time.' },
        { q: 'What if I\u2019m not satisfied with the resolution?', a: 'Unresolved or unsatisfactory complaints automatically escalate to our nodal grievance redressal officer.' },
        { q: 'Can I attach documents to my complaint?', a: 'After submission, our team will email you a secure link to upload any supporting documents or screenshots.' },
      ],
    },
  },

  trackRequest: {
    breadcrumb: [{ label: 'Track a Request', path: '/track-request' }],
    hero: {
      icon: 'Search', eyebrow: 'Track Request',
      title: 'Check the status of anything you\u2019ve submitted',
      description: 'Complaints, insurance claims, card applications and loan applications — one reference ID, one live status.',
    },
    fields: [
      { name: 'referenceId', label: 'Reference ID', type: 'text', placeholder: 'e.g. IBS-482913', required: true },
      { name: 'email', label: 'Registered Email or Mobile', type: 'text', placeholder: 'For verification', required: true },
    ],
    submitLabel: 'Track Status',
    successTitle: 'Request found',
    successDesc: 'Status: In Progress — your request is currently with our resolution team and is on track for the committed timeline.',
    sidebar: {
      icon: 'Info', title: 'Can\u2019t find your reference ID?',
      points: ['Check the confirmation email sent at submission', 'It also appears in your IBS Connect activity feed', 'Still stuck? Contact support with your registered mobile number'],
    },
    faq: {
      title: 'Tracking, answered',
      items: [
        { q: 'Where do I find my reference ID?', a: 'It\u2019s included in the confirmation email or SMS sent immediately after you submitted your original request.' },
        { q: 'What do the different status labels mean?', a: 'Submitted means received but not yet assigned; In Progress means a team is actively working on it; Resolved means the case is closed.' },
        { q: 'Can I track a request I made over the phone?', a: 'Yes, any request logged by phone support is also assigned a reference ID that works here.' },
      ],
    },
  },
};
