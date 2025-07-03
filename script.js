// Animation au scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#1a252f';
    } else {
        nav.style.background = '#2c3e50';
    }
});

// Formulaire de contact
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message envoyé ! (simulation)');
    form.reset();
});