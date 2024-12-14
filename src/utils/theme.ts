// Theme utility functions
export const getInitialTheme = (): boolean => {
  const saved = localStorage.getItem('theme');
  return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
};

export const applyTheme = (isDark: boolean): void => {
  const root = window.document.documentElement;
  if (isDark) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};