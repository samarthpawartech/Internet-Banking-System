import { useMemo, useState } from 'react';
import DynamicIcon from '../../utils/iconMap.jsx';
import styles from './DataTable.module.css';

// Generic table: columns=[{key,label,render?(row)}], actions=[{label,icon,variant,onClick(row),show?(row)}]
export default function DataTable({ columns, rows, actions = [], searchable = true, searchKeys = [], emptyMessage = 'No records found.' }) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return rows;
    const q = query.toLowerCase();
    const keys = searchKeys.length ? searchKeys : columns.map((c) => c.key);
    return rows.filter((row) => keys.some((k) => String(row[k] ?? '').toLowerCase().includes(q)));
  }, [rows, query, searchKeys, columns]);

  return (
    <div className={styles.wrap}>
      {searchable && (
        <div className={styles.searchRow}>
          <DynamicIcon name="Search" size={16} />
          <input placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
          <span className={styles.count}>{filtered.length} of {rows.length}</span>
        </div>
      )}
      <div className={styles.tableScroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((c) => <th key={c.key}>{c.label}</th>)}
              {actions.length > 0 && <th className={styles.actionsHead}>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={columns.length + (actions.length ? 1 : 0)} className={styles.empty}>{emptyMessage}</td></tr>
            ) : (
              filtered.map((row, i) => (
                <tr key={row.id || i}>
                  {columns.map((c) => <td key={c.key}>{c.render ? c.render(row) : row[c.key]}</td>)}
                  {actions.length > 0 && (
                    <td className={styles.actionsCell}>
                      {actions.filter((a) => !a.show || a.show(row)).map((a) => (
                        <button
                          key={a.label}
                          type="button"
                          className={`${styles.actionBtn} ${styles[a.variant || 'default']}`}
                          onClick={() => a.onClick(row)}
                          title={a.label}
                        >
                          <DynamicIcon name={a.icon} size={14} />
                          <span>{a.label}</span>
                        </button>
                      ))}
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
