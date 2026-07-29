import { useState } from 'react';
import sh from '../../components/dashboard/dashboardShared.module.css';
import GlassCard from '../../components/ui/GlassCard.jsx';
import Button from '../../components/ui/Button.jsx';
import DynamicIcon from '../../utils/iconMap.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { getCardsFor, requestCard, toggleCardBlock } from '../../store/db.js';
import { generateReferenceId } from '../../utils/format.js';

export default function PortalCards() {
  const { session } = useAuth();
  const [cards, setCards] = useState(() => getCardsFor(session.id));
  const [chequeRequested, setChequeRequested] = useState(false);
  const [chequeRef, setChequeRef] = useState('');

  const refresh = () => setCards(getCardsFor(session.id));

  const applyForCard = () => { requestCard(session.id, 'Debit Card'); refresh(); };
  const toggleBlock = (id) => { toggleCardBlock(id); refresh(); };
  const requestCheque = () => { setChequeRef(generateReferenceId('CHQ')); setChequeRequested(true); };

  return (
    <div>
      <div className={sh.pageHeader}>
        <div>
          <h1 className={sh.pageTitle}>Card Services</h1>
          <p className={sh.pageSubtitle}>Apply for a debit card, manage blocks, or request a cheque book.</p>
        </div>
      </div>

      <div className={sh.section}>
        <h3 className={sh.sectionTitle}><DynamicIcon name="CreditCard" size={18} />Your Debit Cards</h3>
        {cards.length === 0 ? (
          <GlassCard hover={false} padding="lg" className={sh.emptyState}>
            <DynamicIcon name="WalletMinimal" size={30} />
            <p style={{ marginBottom: 16 }}>You haven't applied for a debit card yet.</p>
            <Button icon="CreditCard" onClick={applyForCard}>Apply for Debit Card</Button>
          </GlassCard>
        ) : (
          <div className={sh.grid3}>
            {cards.map((c) => (
              <GlassCard key={c.id} hover={false} padding="lg" glow={c.status === 'blocked' ? 'none' : 'accent'}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                  <DynamicIcon name="CreditCard" size={24} style={{ color: 'var(--color-accent)' }} />
                  {c.status === 'blocked' && <DynamicIcon name="Snowflake" size={18} style={{ color: 'var(--color-danger)' }} />}
                </div>
                <div className="mono" style={{ fontSize: 14, marginBottom: 6 }}>\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 {c.id.slice(-4).toUpperCase()}</div>
                <div style={{ fontSize: 13, color: 'var(--color-muted)', marginBottom: 16, textTransform: 'capitalize' }}>{c.type} \u00b7 {c.status}</div>
                <Button variant="outline" size="sm" icon={c.status === 'blocked' ? 'LockOpen' : 'Snowflake'} onClick={() => toggleBlock(c.id)} style={{ width: '100%' }}>
                  {c.status === 'blocked' ? 'Unblock Card' : 'Block Card'}
                </Button>
              </GlassCard>
            ))}
            <GlassCard hover={false} padding="lg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Button variant="ghost" icon="UserPlus" onClick={applyForCard}>Apply for another card</Button>
            </GlassCard>
          </div>
        )}
      </div>

      <div className={sh.section}>
        <h3 className={sh.sectionTitle}><DynamicIcon name="FileText" size={18} />Cheque Book</h3>
        <GlassCard hover={false} padding="lg">
          {chequeRequested ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <DynamicIcon name="CircleCheckBig" size={24} style={{ color: 'var(--color-success)' }} />
              <div>
                <strong style={{ display: 'block', fontSize: 14 }}>Cheque book requested</strong>
                <span style={{ fontSize: 13, color: 'var(--color-muted)' }}>Reference {chequeRef} \u2014 dispatched to your registered address within 7 working days.</span>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--color-text-secondary)' }}>Request a 25-leaf cheque book couriered to your registered address.</p>
              <Button variant="outline" icon="FileText" onClick={requestCheque}>Request Cheque Book</Button>
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  );
}
