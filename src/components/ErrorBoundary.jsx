import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', direction: 'rtl', fontFamily: 'sans-serif' }}>
          <h1 style={{ color: '#e53e3e' }}>שגיאה בטעינת האפליקציה</h1>
          <pre style={{ background: '#f7fafc', padding: '1rem', borderRadius: '8px', marginTop: '1rem', whiteSpace: 'pre-wrap', direction: 'ltr' }}>
            {this.state.error?.message}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
