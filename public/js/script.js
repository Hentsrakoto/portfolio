AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Gestion du menu mobile
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const navLinks = document.querySelectorAll('#menu a');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    menu.classList.toggle('flex-col');
    menu.classList.toggle('absolute');
    menu.classList.toggle('top-16');
    menu.classList.toggle('left-0');
    menu.classList.toggle('w-full');
    menu.classList.toggle('bg-white');
    menu.classList.toggle('p-4');
    menu.classList.toggle('space-y-4');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
        menu.classList.remove('flex', 'flex-col', 'absolute', 'top-16', 'left-0', 'w-full', 'bg-white', 'p-4', 'space-y-4');
    });
});
// Création des HT animés en background
function createFloatingHT() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        for (let i = 0; i < 5; i++) {
            const ht = document.createElement('div');
            ht.className = 'bg-ht';
            ht.textContent = 'HT';
            ht.style.left = `${Math.random() * 100}%`;
            ht.style.animationDuration = `${15 + Math.random() * 10}s`;
            ht.style.animationDelay = `${Math.random() * 5}s`;
            section.appendChild(ht);
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    createFloatingHT();
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
});