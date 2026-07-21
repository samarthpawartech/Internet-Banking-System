import { useRef } from 'react';

// Tracks pointer position relative to an element and writes it to CSS custom
// properties (--x / --y as percentages) so pure-CSS radial glows can follow the cursor
// without triggering React re-renders on every mouse move.
export default function useMousePosition() {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--x', `${x}%`);
    el.style.setProperty('--y', `${y}%`);
  };

  return { ref, onMouseMove };
}
