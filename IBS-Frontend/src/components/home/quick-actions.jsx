import { Wallet, ArrowLeftRight, ReceiptText, PiggyBank, ShieldX, Landmark } from 'lucide-react';
const actions = [{
  icon: Wallet,
  label: 'Check Balance'
}, {
  icon: ArrowLeftRight,
  label: 'Fund Transfer'
}, {
  icon: ReceiptText,
  label: 'Pay Bills'
}, {
  icon: PiggyBank,
  label: 'Open FD/RD'
}, {
  icon: ShieldX,
  label: 'Block Card'
}, {
  icon: Landmark,
  label: 'Apply Loan'
}];
export function QuickActions() {
  return <section className="relative mx-auto -mt-10 max-w-6xl px-6">
      <div className="glass rounded-2xl p-3">
        <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
          {actions.map(({
          icon: Icon,
          label
        }) => <button key={label} className="group flex flex-col items-center gap-2.5 rounded-xl px-3 py-4 text-center transition-colors hover:bg-surface">
              <span className="flex size-11 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all group-hover:border-cyan/50 group-hover:text-cyan group-hover:glow-cyan">
                <Icon className="size-5" />
              </span>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground">
                {label}
              </span>
            </button>)}
        </div>
      </div>
    </section>;
}
