// Sticky Navbar 

window.addEventListener('scroll', () => {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});


// Responsive Menu

const navLinks = document.querySelector('.nav-links');
const toggle = document.querySelector('.toggle-btn');
const cancelBtn = document.querySelector('.cancel-btn');

toggle.addEventListener('click', () => {
    navLinks.classList.add('overlay');
});

cancelBtn.addEventListener('click', () => {
    navLinks.classList.remove('overlay');
});