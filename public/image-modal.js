(function () {
  let overlay = null;
  let modalImg = null;
  let closeBtn = null;
  let lastFocused = null;

  function createModal() {
    overlay = document.createElement('div');
    overlay.id = 'image-modal-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Image viewer');

    modalImg = document.createElement('img');
    modalImg.id = 'image-modal-img';

    closeBtn = document.createElement('button');
    closeBtn.id = 'image-modal-close';
    closeBtn.setAttribute('aria-label', 'Close image viewer');
    closeBtn.textContent = '×';
    closeBtn.addEventListener('click', closeModal);

    overlay.appendChild(closeBtn);
    overlay.appendChild(modalImg);
    document.body.appendChild(overlay);

    // Close on backdrop click (not on image click)
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
    });
  }

  function openModal(imgEl) {
    if (!overlay) createModal();
    lastFocused = imgEl;
    modalImg.src = imgEl.src;
    modalImg.alt = imgEl.alt || '';
    // Display at 2× natural size, capped to viewport
    modalImg.style.width = Math.min(imgEl.naturalWidth * 2, window.innerWidth * 0.9) + 'px';
    document.body.style.overflow = 'hidden';
    overlay.classList.add('open');
    closeBtn.focus();
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (e) {
      const img = e.target.closest('.content img');
      if (img) openModal(img);
    });
  });
})();
