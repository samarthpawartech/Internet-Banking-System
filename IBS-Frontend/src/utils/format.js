export function formatINR(value, { decimals = 0 } = {}) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }).format(value);
}

export function formatNumberIN(value) {
  return new Intl.NumberFormat('en-IN').format(Math.round(value));
}

export function generateReferenceId(prefix = 'IBS') {
  const rand = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}-${rand}`;
}
