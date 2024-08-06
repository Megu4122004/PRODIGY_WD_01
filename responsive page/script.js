const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

nav.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'A') {
        e.target.style.color = '#fff';
        e.target.parentNode.style.backgroundColor = '#444';
    }
});

nav.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'A') {
        e.target.style.color = '#333';
        e.target.parentNode.style.backgroundColor = '#fff';
    }
});