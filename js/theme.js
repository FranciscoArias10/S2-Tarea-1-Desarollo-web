/**
 * THEME CONTROLLER - FRANCISCO ARIAS PORTFOLIO
 * Gestión de modo Claro / Oscuro con persistencia en localStorage
 * y soporte para preferencias del sistema operativo.
 */

export function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  const STORAGE_KEY = 'portfolio-theme';
  
  // 1. Obtener tema guardado o preferencia de medios
  const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  };

  // 2. Aplicar tema al DOM
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    
    // Actualizar accesibilidad
    const isDark = theme === 'dark';
    themeToggleBtn.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    themeToggleBtn.setAttribute('title', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  };

  // 3. Inicializar tema
  const initialTheme = getPreferredTheme();
  setTheme(initialTheme);

  // 4. Event listener en el botón de alternancia
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  // 5. Escuchar cambios de preferencia en el sistema si no hay preferencia manual
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}
