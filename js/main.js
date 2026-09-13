/**
 * MAIN APP CONTROLLER - FRANCISCO ARIAS PORTFOLIO
 * Punto de entrada principal para inicializar la interactividad
 */

import { initTheme } from './theme.js';
import { initNavigation } from './navigation.js';
import { initProjects } from './projects.js';
import { initContactForm } from './form-validation.js';
import { initDesignSystem } from './design-system.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar tema Claro/Oscuro
  initTheme();

  // 2. Inicializar navegación responsiva y scrollspy
  initNavigation();

  // 3. Inicializar filtro y modal de proyectos
  initProjects();

  // 4. Inicializar validación del formulario de contacto
  initContactForm();

  // 5. Inicializar utilidades del Design System
  initDesignSystem();

  console.log('%c🚀 Portafolio de Francisco Arias inicializado correctamente.', 'color: #ff1e42; font-weight: bold; font-size: 14px;');
});
