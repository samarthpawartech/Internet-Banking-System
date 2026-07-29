import { createContext, useContext, useEffect, useState } from 'react';
import { findCustomerByUsername, getEmployees, getAdmins, logLogin, seedIfNeeded } from '../store/db.js';

const SESSION_KEY = 'ibs_session';
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    seedIfNeeded();
    try {
      const raw = window.localStorage.getItem(SESSION_KEY);
      if (raw) setSession(JSON.parse(raw));
    } catch {
      // ignore corrupt session
    }
    setReady(true);
  }, []);

  const persist = (s) => {
    setSession(s);
    if (s) window.localStorage.setItem(SESSION_KEY, JSON.stringify(s));
    else window.localStorage.removeItem(SESSION_KEY);
  };

  const loginCustomer = (username, password) => {
    const c = findCustomerByUsername(username);
    if (!c) return { ok: false, error: 'No account found with that username.' };
    if (c.password !== password) return { ok: false, error: 'Incorrect password.' };
    if (c.locked) return { ok: false, error: 'This account has been locked for security review. Contact support.' };
    persist({ role: 'customer', id: c.id, username: c.username, name: c.fullName });
    logLogin(username, 'customer');
    return { ok: true };
  };

  const loginEmployee = (username, password) => {
    const e = getEmployees().find((x) => x.username.toLowerCase() === username.toLowerCase());
    if (!e) return { ok: false, error: 'No employee account found with that username.' };
    if (e.password !== password) return { ok: false, error: 'Incorrect password.' };
    if (e.status !== 'active') return { ok: false, error: 'This employee account has been disabled.' };
    persist({ role: 'employee', id: e.id, username: e.username, name: e.name });
    logLogin(username, 'employee');
    return { ok: true };
  };

  const loginAdmin = (username, password) => {
    const a = getAdmins().find((x) => x.username.toLowerCase() === username.toLowerCase());
    if (!a) return { ok: false, error: 'No admin account found with that username.' };
    if (a.password !== password) return { ok: false, error: 'Incorrect password.' };
    if (a.status !== 'active') return { ok: false, error: 'This admin account has been disabled.' };
    persist({ role: 'admin', id: a.id, username: a.username, name: a.name });
    logLogin(username, 'admin');
    return { ok: true };
  };

  const logout = () => persist(null);

  const refreshName = (name) => session && persist({ ...session, name });

  return (
    <AuthContext.Provider value={{ session, ready, loginCustomer, loginEmployee, loginAdmin, logout, refreshName }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
