/**
 * DESIGN SYSTEM CONTROLLER - FRANCISCO ARIAS PORTFOLIO
 * Funcionalidades interactivas para documentar el Design System,
 * como copiado ágil de variables y códigos hexadecimales al portapapeles.
 */

import { showToast } from './form-validation.js';

export function initDesignSystem() {
  const swatchCards = document.querySelectorAll('.color-swatch-card');

  swatchCards.forEach(card => {
    card.addEventListener('click', async () => {
      const colorValue = card.getAttribute('data-color');
      const tokenName = card.querySelector('.color-token-name')?.textContent || '';

      if (!colorValue) return;

      try {
        await navigator.clipboard.writeText(colorValue);
        showToast(`Copiado: ${tokenName} (${colorValue})`, 'info');
      } catch (err) {
        // Fallback si clipboard API no está disponible
        const tempInput = document.createElement('input');
        tempInput.value = colorValue;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast(`Copiado: ${tokenName} (${colorValue})`, 'info');
      }
    });
  });
}
