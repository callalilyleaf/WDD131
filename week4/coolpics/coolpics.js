// coolpics.js - WK4 Cool Pics Part 2

// ── Mobile Menu Toggle ──
const menuBtn = document.querySelector('#menu-btn');
const navMenu = document.querySelector('#nav-menu');

menuBtn.addEventListener('click', function () {
    const isOpen = navMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen.toString());
});

// ── Modal ──
const modal = document.querySelector('#modal');
const modalImg = document.querySelector('#modal-img');
const modalClose = document.querySelector('#modal-close');

// Open modal when a gallery image is clicked
document.querySelector('.gallery').addEventListener('click', function (event) {
    const clickedImg = event.target.closest('.gallery-img');
    if (!clickedImg) return;

    const fullSrc = clickedImg.getAttribute('data-full');
    const altText = clickedImg.getAttribute('alt');

    modalImg.src = fullSrc;
    modalImg.alt = altText;
    modal.classList.add('open');
    modalClose.focus();
});

// Close modal with the X button
modalClose.addEventListener('click', closeModal);

// Close modal by clicking the backdrop (outside the image)
modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with the Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
    }
});

function closeModal() {
    modal.classList.remove('open');
    modalImg.src = '';
}
