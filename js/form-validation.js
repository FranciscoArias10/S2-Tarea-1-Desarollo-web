export function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.setAttribute('role', 'alert');

  const iconSvg = type === 'success' 
    ? `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
    : `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

  toast.innerHTML = `
    ${iconSvg}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 350);
  }, 4000);
}

export function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const charCounter = document.getElementById('message-char-count');
  const submitBtn = document.getElementById('form-submit-btn');

  if (messageInput && charCounter) {
    messageInput.addEventListener('input', () => {
      const currentLength = messageInput.value.length;
      charCounter.textContent = `${currentLength} / 500`;
      if (currentLength > 500) {
        charCounter.style.color = 'var(--color-danger)';
      } else {
        charCounter.style.color = 'var(--color-text-dim)';
      }
    });
  }

  const validateName = () => {
    const val = nameInput.value.trim();
    const errorEl = document.getElementById('name-error');
    if (val.length < 3) {
      nameInput.classList.add('is-invalid');
      nameInput.classList.remove('is-valid');
      if (errorEl) {
        errorEl.textContent = 'Por favor, ingresa tu nombre completo (mínimo 3 caracteres).';
        errorEl.classList.add('visible');
      }
      return false;
    } else {
      nameInput.classList.remove('is-invalid');
      nameInput.classList.add('is-valid');
      if (errorEl) errorEl.classList.remove('visible');
      return true;
    }
  };

  const validateEmail = () => {
    const val = emailInput.value.trim();
    const errorEl = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val)) {
      emailInput.classList.add('is-invalid');
      emailInput.classList.remove('is-valid');
      if (errorEl) {
        errorEl.textContent = 'Por favor, ingresa una dirección de correo electrónico válida.';
        errorEl.classList.add('visible');
      }
      return false;
    } else {
      emailInput.classList.remove('is-invalid');
      emailInput.classList.add('is-valid');
      if (errorEl) errorEl.classList.remove('visible');
      return true;
    }
  };

  const validateSubject = () => {
    const val = subjectInput.value.trim();
    const errorEl = document.getElementById('subject-error');
    if (val.length < 4) {
      subjectInput.classList.add('is-invalid');
      subjectInput.classList.remove('is-valid');
      if (errorEl) {
        errorEl.textContent = 'El asunto debe tener al menos 4 caracteres.';
        errorEl.classList.add('visible');
      }
      return false;
    } else {
      subjectInput.classList.remove('is-invalid');
      subjectInput.classList.add('is-valid');
      if (errorEl) errorEl.classList.remove('visible');
      return true;
    }
  };

  const validateMessage = () => {
    const val = messageInput.value.trim();
    const errorEl = document.getElementById('message-error');
    if (val.length < 10) {
      messageInput.classList.add('is-invalid');
      messageInput.classList.remove('is-valid');
      if (errorEl) {
        errorEl.textContent = 'El mensaje debe contener al menos 10 caracteres.';
        errorEl.classList.add('visible');
      }
      return false;
    } else if (val.length > 500) {
      messageInput.classList.add('is-invalid');
      messageInput.classList.remove('is-valid');
      if (errorEl) {
        errorEl.textContent = 'El mensaje no puede exceder los 500 caracteres.';
        errorEl.classList.add('visible');
      }
      return false;
    } else {
      messageInput.classList.remove('is-invalid');
      messageInput.classList.add('is-valid');
      if (errorEl) errorEl.classList.remove('visible');
      return true;
    }
  };

  nameInput.addEventListener('blur', validateName);
  emailInput.addEventListener('blur', validateEmail);
  subjectInput.addEventListener('blur', validateSubject);
  messageInput.addEventListener('blur', validateMessage);

  nameInput.addEventListener('input', () => { if (nameInput.classList.contains('is-invalid')) validateName(); });
  emailInput.addEventListener('input', () => { if (emailInput.classList.contains('is-invalid')) validateEmail(); });
  subjectInput.addEventListener('input', () => { if (subjectInput.classList.contains('is-invalid')) validateSubject(); });
  messageInput.addEventListener('input', () => { if (messageInput.classList.contains('is-invalid')) validateMessage(); });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
      showToast('Por favor, revisa y corrige los campos señalados.', 'warning');
      if (!isNameValid) nameInput.focus();
      else if (!isEmailValid) emailInput.focus();
      else if (!isSubjectValid) subjectInput.focus();
      else if (!isMessageValid) messageInput.focus();
      return;
    }

    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin" style="width: 1.25rem; height: 1.25rem; animation: spin 1s linear infinite;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
      </svg>
      Enviando mensaje...
    `;

    try {
      const response = await fetch('https://formsubmit.co/ajax/franciscoarias108@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nombre: nameInput.value.trim(),
          Email: emailInput.value.trim(),
          Asunto: subjectInput.value.trim(),
          Mensaje: messageInput.value.trim(),
          _subject: `Nuevo mensaje de Portafolio: ${subjectInput.value.trim()}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true)) {
        form.reset();
        [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
          input.classList.remove('is-valid');
        });
        if (charCounter) charCounter.textContent = '0 / 500';
        showToast('¡Mensaje enviado con éxito! Francisco se comunicará contigo pronto.', 'success');
      } else if (data.message && (data.message.includes('Activate Form') || data.message.includes('Activation'))) {
        form.reset();
        [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
          input.classList.remove('is-valid');
        });
        if (charCounter) charCounter.textContent = '0 / 500';
        showToast('¡Casi listo! Revisa tu bandeja de franciscoarias108@gmail.com y pulsa "Activate Form".', 'warning');
      } else {
        throw new Error(data.message || 'Error en el servicio de envío');
      }
    } catch (error) {
      console.error('Error enviando formulario:', error);
      showToast('Hubo un inconveniente al enviar el mensaje. Por favor intenta de nuevo o escribe a franciscoarias108@gmail.com', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}
