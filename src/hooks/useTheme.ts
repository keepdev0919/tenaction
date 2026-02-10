import { useState, useEffect, useCallback } from 'react';

type Theme = 'dark' | 'light';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage first
    const savedTheme = localStorage.getItem('tenaction-theme') as Theme | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('light', savedTheme === 'light');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.classList.toggle('light', initialTheme === 'light');
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('tenaction-theme', newTheme);
      document.documentElement.classList.toggle('light', newTheme === 'light');
      return newTheme;
    });
  }, []);

  const setThemeValue = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('tenaction-theme', newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
  }, []);

  return {
    theme,
    toggleTheme,
    setTheme: setThemeValue,
    mounted,
    isDark: theme === 'dark',
    isLight: theme === 'light',
  };
}
