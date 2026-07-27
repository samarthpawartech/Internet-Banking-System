import { Component } from 'react';
import DynamicIcon from '../utils/iconMap.jsx';
import Button from './ui/Button.jsx';
import styles from './ErrorBoundary.module.css';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('IBS app error caught by boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.wrap}>
          <div className={styles.icon}><DynamicIcon name="CircleAlert" size={28} /></div>
          <h2>Something didn't load right</h2>
          <p>This part of the page hit an unexpected error. Reloading usually fixes it.</p>
          <Button onClick={() => window.location.reload()} icon="RefreshCw">Reload page</Button>
        </div>
      );
    }
    return this.props.children;
  }
}
