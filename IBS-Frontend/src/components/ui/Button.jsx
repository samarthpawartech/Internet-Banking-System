import { useState } from 'react';
import { Link } from 'react-router-dom';
import DynamicIcon from '../../utils/iconMap.jsx';
import styles from './Button.module.css';

export default function Button({
  children, variant = 'primary', size = 'md', to, href, icon, iconPosition = 'right',
  className = '', onClick, type = 'button', disabled = false, ...rest
}) {
  const [ripples, setRipples] = useState([]);

  const spawnRipple = (e) => {
    if (disabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    const ripple = { id, x: e.clientX - rect.left, y: e.clientY - rect.top, size: Math.max(rect.width, rect.height) * 2 };
    setRipples((prev) => [...prev, ripple]);
    window.setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 650);
  };

  const handleClick = (e) => {
    spawnRipple(e);
    onClick?.(e);
  };

  const classes = `${styles.btn} ${styles[variant]} ${styles[size]} ${disabled ? styles.disabled : ''} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <DynamicIcon name={icon} size={size === 'sm' ? 16 : 18} />}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <DynamicIcon name={icon} size={size === 'sm' ? 16 : 18} />}
      <span className={styles.rippleLayer} aria-hidden="true">
        {ripples.map((r) => (
          <span key={r.id} className={styles.ripple} style={{ left: r.x, top: r.y, width: r.size, height: r.size }} />
        ))}
      </span>
    </>
  );

  if (to && !disabled) {
    return (
      <Link to={to} className={classes} onMouseDown={handleClick} {...rest}>
        {content}
      </Link>
    );
  }

  if (href && !disabled) {
    return (
      <a href={href} className={classes} onMouseDown={handleClick} target={rest.target} rel="noreferrer" {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onMouseDown={handleClick} disabled={disabled} {...rest}>
      {content}
    </button>
  );
}
