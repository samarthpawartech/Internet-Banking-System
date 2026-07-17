import { cn } from '@/lib/utils';
export function passwordScore(pwd) {
  let score = 0;
  if (pwd.length >= 8) score++;
  if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++;
  if (/\d/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  return score;
}
export function PasswordStrength({
  value
}) {
  const score = passwordScore(value);
  const labels = ['Too weak', 'Weak', 'Fair', 'Good', 'Strong'];
  const colors = ['bg-danger', 'bg-danger', 'bg-warning', 'bg-neon-orange', 'bg-neon-green'];
  const textColors = ['text-danger', 'text-danger', 'text-warning', 'text-neon-orange', 'text-neon-green'];
  return <div className="mt-2">
      <div className="flex gap-1.5">
        {[0, 1, 2, 3].map(i => <div key={i} className={cn('h-1.5 flex-1 rounded-full transition-colors', value && i < score ? colors[score] : 'bg-border')} />)}
      </div>
      {value && <p className={cn('mt-1.5 text-xs font-medium', textColors[score])}>
          {labels[score]}
        </p>}
    </div>;
}
