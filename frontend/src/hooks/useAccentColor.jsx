import { useState, useEffect } from 'react';

export const ACCENT_PALETTES = {
  indigo: {
    swatch: '#5757E8',
    label: 'Indigo',
    light: {
      '--accent': '#5757E8',
      '--accent-hover': '#4444CC',
      '--accent-violet': '#9474FF',
      '--accent-gradient': 'linear-gradient(135deg, #5757E8, #9474FF)',
      '--accent-bg': 'rgba(87, 87, 232, 0.08)',
      '--accent-border': 'rgba(87, 87, 232, 0.2)',
    },
    dark: {
      '--accent': '#7879FF',
      '--accent-hover': '#9698FF',
      '--accent-violet': '#B09BFF',
      '--accent-gradient': 'linear-gradient(135deg, #7879FF, #B09BFF)',
      '--accent-bg': 'rgba(120, 121, 255, 0.1)',
      '--accent-border': 'rgba(120, 121, 255, 0.22)',
    },
  },
  charcoal: {
    swatch: '#374151',
    label: 'Charcoal',
    light: {
      '--accent': '#374151',
      '--accent-hover': '#1F2937',
      '--accent-violet': '#6B7280',
      '--accent-gradient': 'linear-gradient(135deg, #374151, #6B7280)',
      '--accent-bg': 'rgba(55, 65, 81, 0.08)',
      '--accent-border': 'rgba(55, 65, 81, 0.2)',
    },
    dark: {
      '--accent': '#9CA3AF',
      '--accent-hover': '#D1D5DB',
      '--accent-violet': '#E5E7EB',
      '--accent-gradient': 'linear-gradient(135deg, #9CA3AF, #E5E7EB)',
      '--accent-bg': 'rgba(156, 163, 175, 0.1)',
      '--accent-border': 'rgba(156, 163, 175, 0.22)',
    },
  },
  crimson: {
    swatch: '#B91C1C',
    label: 'Crimson',
    light: {
      '--accent': '#B91C1C',
      '--accent-hover': '#991B1B',
      '--accent-violet': '#DC2626',
      '--accent-gradient': 'linear-gradient(135deg, #B91C1C, #DC2626)',
      '--accent-bg': 'rgba(185, 28, 28, 0.08)',
      '--accent-border': 'rgba(185, 28, 28, 0.2)',
    },
    dark: {
      '--accent': '#EF4444',
      '--accent-hover': '#F87171',
      '--accent-violet': '#FCA5A5',
      '--accent-gradient': 'linear-gradient(135deg, #EF4444, #FCA5A5)',
      '--accent-bg': 'rgba(239, 68, 68, 0.1)',
      '--accent-border': 'rgba(239, 68, 68, 0.22)',
    },
  },
  emerald: {
    swatch: '#059669',
    label: 'Emerald',
    light: {
      '--accent': '#059669',
      '--accent-hover': '#047857',
      '--accent-violet': '#10B981',
      '--accent-gradient': 'linear-gradient(135deg, #059669, #10B981)',
      '--accent-bg': 'rgba(5, 150, 105, 0.08)',
      '--accent-border': 'rgba(5, 150, 105, 0.2)',
    },
    dark: {
      '--accent': '#10B981',
      '--accent-hover': '#34D399',
      '--accent-violet': '#6EE7B7',
      '--accent-gradient': 'linear-gradient(135deg, #10B981, #6EE7B7)',
      '--accent-bg': 'rgba(16, 185, 129, 0.1)',
      '--accent-border': 'rgba(16, 185, 129, 0.22)',
    },
  },
};

const applyAccentVars = (id, isDark) => {
  const palette = ACCENT_PALETTES[id];
  if (!palette) return;
  const vars = isDark ? palette.dark : palette.light;
  const root = document.documentElement.style;
  Object.entries(vars).forEach(([key, val]) => root.setProperty(key, val));
};

const useAccentColor = () => {
  const [accentId, setAccentId] = useState(
    () => localStorage.getItem('accentColor') || 'indigo'
  );

  useEffect(() => {
    const apply = () => {
      const isDark = document.documentElement.classList.contains('dark');
      applyAccentVars(accentId, isDark);
    };

    apply();

    // Re-apply when dark mode class changes
    const observer = new MutationObserver(apply);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, [accentId]);

  const changeAccent = (id) => {
    setAccentId(id);
    localStorage.setItem('accentColor', id);
  };

  return [accentId, changeAccent];
};

export default useAccentColor;
