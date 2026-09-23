import { initTheme } from './theme.js';
import { initNavigation } from './navigation.js';
import { initSkills } from './skills.js';
import { initProjects } from './projects.js';
import { initContactForm } from './form-validation.js';
import { initDesignSystem } from './design-system.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  initNavigation();

  initSkills();

  initProjects();

  initContactForm();

  initDesignSystem();

  console.log('%c🚀 Portafolio de Francisco Arias inicializado correctamente.', 'color: #ff1e42; font-weight: bold; font-size: 14px;');
});
