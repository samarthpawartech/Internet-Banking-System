import { useState } from 'react';
import sh from '../../components/dashboard/dashboardShared.module.css';
import Button from '../../components/ui/Button.jsx';
import DynamicIcon from '../../utils/iconMap.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { getSettings, updateSettings } from '../../store/db.js';

export default function AdminSettings() {
  const { session } = useAuth();
  const [settings, setSettings] = useState(() => getSettings());
  const [saved, setSaved] = useState(false);

  const setField = (group, key, value) => {
    setSettings((s) => ({ ...s, [group]: { ...s[group], [key]: Number(value) } }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateSettings(settings, session.username);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div>
      <div className={sh.pageHeader}>
        <div>
          <h1 className={sh.pageTitle}>Banking Settings</h1>
          <p className={sh.pageSubtitle}>These values drive real behaviour \u2014 the transaction limit below is the exact threshold customers hit on the Transfer page.</p>
        </div>
      </div>

      <form onSubmit={handleSave} className={sh.grid3}>
        <div className={sh.panel}>
          <h3 className={sh.panelTitle}><DynamicIcon name="Percent" size={17} />Interest Rates (% p.a.)</h3>
          <div className={sh.form}>
            <RateField label="Regular Savings" value={settings.interestRates?.regularSavings} onChange={(v) => setField('interestRates', 'regularSavings', v)} />
            <RateField label="Premium Savings" value={settings.interestRates?.premiumSavings} onChange={(v) => setField('interestRates', 'premiumSavings', v)} />
            <RateField label="Senior Citizen" value={settings.interestRates?.seniorCitizen} onChange={(v) => setField('interestRates', 'seniorCitizen', v)} />
            <RateField label="Fixed Deposit" value={settings.interestRates?.fixedDeposit} onChange={(v) => setField('interestRates', 'fixedDeposit', v)} />
          </div>
        </div>

        <div className={sh.panel}>
          <h3 className={sh.panelTitle}><DynamicIcon name="SlidersHorizontal" size={17} />Transaction Limits (\u20b9)</h3>
          <div className={sh.form}>
            <RateField label="Auto-approve up to" value={settings.transactionLimits?.autoApproveUpTo} onChange={(v) => setField('transactionLimits', 'autoApproveUpTo', v)} step="1000" />
            <RateField label="Daily transfer limit" value={settings.transactionLimits?.dailyLimit} onChange={(v) => setField('transactionLimits', 'dailyLimit', v)} step="1000" />
          </div>
        </div>

        <div className={sh.panel}>
          <h3 className={sh.panelTitle}><DynamicIcon name="Receipt" size={17} />Service Charges (\u20b9)</h3>
          <div className={sh.form}>
            <RateField label="Cheque book (per book)" value={settings.serviceCharges?.chequeBook} onChange={(v) => setField('serviceCharges', 'chequeBook', v)} />
            <RateField label="Debit card annual fee" value={settings.serviceCharges?.debitCardAnnual} onChange={(v) => setField('serviceCharges', 'debitCardAnnual', v)} />
            <RateField label="Premature FD penalty (%)" value={settings.serviceCharges?.prematureFdPenalty} onChange={(v) => setField('serviceCharges', 'prematureFdPenalty', v)} step="0.1" />
          </div>
        </div>

        <div className={sh.fieldFull} style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: 14 }}>
          <Button type="submit" icon="Check">Save Settings</Button>
          {saved && <span style={{ fontSize: 13, color: 'var(--color-success)', display: 'flex', alignItems: 'center', gap: 6 }}><DynamicIcon name="CircleCheckBig" size={15} />Settings saved \u2014 new transfers will use these values immediately.</span>}
        </div>
      </form>
    </div>
  );
}

function RateField({ label, value, onChange, step = '0.1' }) {
  return (
    <div className={sh.field}>
      <label>{label}</label>
      <input type="number" step={step} value={value ?? 0} onChange={(e) => onChange(e.target.value)} className="mono" />
    </div>
  );
}
