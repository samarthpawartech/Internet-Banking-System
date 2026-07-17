
import { useMemo, useState } from 'react';
import { PageHeader, Panel, StatusBadge } from '@/components/dashboard/ui';
import { NeonButton } from '@/components/neon-button';
import { accounts, transactions, formatINR } from '@/lib/ibs-data';
import { Search, Download, ArrowDownLeft, ArrowUpRight } from 'lucide-react';
const filters = ['All', 'Income', 'Shopping', 'Food', 'Utilities', 'Investment'];
export default function AccountsPage() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const filtered = useMemo(() => {
    return transactions.filter(t => {
      const matchesQuery = t.merchant.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = filter === 'All' || t.category === filter;
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);
  return <div className="space-y-6">
      <PageHeader title="Accounts & Statements" subtitle="Review balances and transaction history" action={<NeonButton variant="outline" size="sm">
            <Download className="size-4" /> Statement
          </NeonButton>} />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {accounts.map(acc => <div key={acc.id} className="rounded-xl border border-border bg-card/60 p-4">
            <p className="text-xs text-muted-foreground">{acc.type}</p>
            <p className="mt-0.5 text-sm text-foreground">{acc.number}</p>
            <p className={`tabular mt-3 text-lg font-bold ${acc.balance < 0 ? 'text-orange' : 'text-foreground'}`}>
              {formatINR(acc.balance)}
            </p>
          </div>)}
      </div>

      <Panel>
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search transactions" className="ibs-input pl-9" />
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map(f => <button key={f} onClick={() => setFilter(f)} className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${filter === f ? 'border-cyan bg-cyan/10 text-cyan' : 'border-border text-muted-foreground hover:border-cyan/40'}`}>
                {f}
              </button>)}
          </div>
        </div>

        {/* Desktop table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs text-muted-foreground">
                <th className="pb-3 font-medium">Transaction</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Mode</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 text-right font-medium">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map(t => {
              const credit = t.amount > 0;
              return <tr key={t.id} className="group">
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <span className={`flex size-8 items-center justify-center rounded-lg ${credit ? 'bg-green/10 text-green' : 'bg-muted text-muted-foreground'}`}>
                          {credit ? <ArrowDownLeft className="size-4" /> : <ArrowUpRight className="size-4" />}
                        </span>
                        <div>
                          <p className="font-medium text-foreground">{t.merchant}</p>
                          <p className="text-xs text-muted-foreground">{t.category}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 text-muted-foreground">{t.date}</td>
                    <td className="py-3 text-muted-foreground">{t.mode}</td>
                    <td className="py-3">
                      <StatusBadge status={t.status} />
                    </td>
                    <td className={`tabular py-3 text-right font-semibold ${credit ? 'text-green' : 'text-foreground'}`}>
                      {formatINR(t.amount, true)}
                    </td>
                  </tr>;
            })}
            </tbody>
          </table>
        </div>

        {/* Mobile list */}
        <div className="divide-y divide-border md:hidden">
          {filtered.map(t => {
          const credit = t.amount > 0;
          return <div key={t.id} className="flex items-center gap-3 py-3">
                <span className={`flex size-8 items-center justify-center rounded-lg ${credit ? 'bg-green/10 text-green' : 'bg-muted text-muted-foreground'}`}>
                  {credit ? <ArrowDownLeft className="size-4" /> : <ArrowUpRight className="size-4" />}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">{t.merchant}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.date} • {t.mode}
                  </p>
                </div>
                <span className={`tabular text-sm font-semibold ${credit ? 'text-green' : 'text-foreground'}`}>
                  {formatINR(t.amount, true)}
                </span>
              </div>;
        })}
        </div>

        {filtered.length === 0 && <p className="py-10 text-center text-sm text-muted-foreground">
            No transactions found.
          </p>}
      </Panel>
    </div>;
}
