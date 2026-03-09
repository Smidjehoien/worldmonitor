const KNOWN_VARIANTS = new Set(['full', 'tech', 'finance', 'happy', 'dto', 'enterprise', 'aitrend']);

export const SITE_VARIANT: string = (() => {
  if (typeof window === 'undefined') return import.meta.env.VITE_VARIANT || 'full';

  const isTauri = '__TAURI_INTERNALS__' in window || '__TAURI__' in window;
  if (isTauri) {
    const stored = localStorage.getItem('worldmonitor-variant');
    if (stored && KNOWN_VARIANTS.has(stored)) return stored;
    return import.meta.env.VITE_VARIANT || 'full';
  }

  const h = location.hostname;
  if (h.startsWith('tech.')) return 'tech';
  if (h.startsWith('finance.')) return 'finance';
  if (h.startsWith('happy.')) return 'happy';
  if (h.startsWith('dto.')) return 'dto';
  if (h.startsWith('enterprise.')) return 'enterprise';
  if (h.startsWith('aitrend.')) return 'aitrend';

  if (h === 'localhost' || h === '127.0.0.1') {
    const stored = localStorage.getItem('worldmonitor-variant');
    if (stored && KNOWN_VARIANTS.has(stored)) return stored;
    return import.meta.env.VITE_VARIANT || 'full';
  }

  return 'full';
})();
