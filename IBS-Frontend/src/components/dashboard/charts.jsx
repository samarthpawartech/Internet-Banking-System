
export function DonutChart({
  data,
  size = 180,
  thickness = 20
}) {
  const total = data.reduce((s, d) => s + d.value, 0);
  const radius = (size - thickness) / 2;
  const circ = 2 * Math.PI * radius;
  let offset = 0;
  return <div className="relative" style={{
    width: size,
    height: size
  }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="var(--muted)" strokeWidth={thickness} opacity={0.3} />
        {data.map((d, i) => {
        const len = d.value / total * circ;
        const seg = <circle key={i} cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={d.color} strokeWidth={thickness} strokeDasharray={`${len} ${circ - len}`} strokeDashoffset={-offset} strokeLinecap="round" style={{
          filter: `drop-shadow(0 0 4px ${d.color})`
        }} />;
        offset += len;
        return seg;
      })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xs text-muted-foreground">Total</span>
        <span className="tabular text-lg font-bold text-foreground">
          ₹{(total / 1000).toFixed(1)}k
        </span>
      </div>
    </div>;
}
export function BarChart({
  data,
  height = 160
}) {
  const max = Math.max(...data.map(d => d.value));
  return <div className="flex items-end justify-between gap-2" style={{
    height
  }}>
      {data.map((d, i) => <div key={i} className="flex flex-1 flex-col items-center gap-2">
          <div className="flex w-full flex-1 items-end">
            <div className="w-full rounded-t-md bg-gradient-to-t from-cyan/30 to-cyan" style={{
          height: `${d.value / max * 100}%`,
          boxShadow: '0 0 12px -2px var(--neon-cyan)'
        }} />
          </div>
          <span className="text-[10px] text-muted-foreground">{d.label}</span>
        </div>)}
    </div>;
}
export function Sparkline({
  data,
  width = 260,
  height = 60,
  color = 'var(--neon-cyan)'
}) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = width / (data.length - 1);
  const points = data.map((v, i) => {
    const x = i * step;
    const y = height - (v - min) / range * (height - 8) - 4;
    return `${x},${y}`;
  });
  const path = `M ${points.join(' L ')}`;
  const area = `${path} L ${width},${height} L 0,${height} Z`;
  return <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#spark-fill)" />
      <path d={path} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" style={{
      filter: `drop-shadow(0 0 3px ${color})`
    }} />
    </svg>;
}
