// scripts.js
// Get the navbar toggle button and dropdown menu
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

// Add an event listener to the toggle button
navbarToggle.addEventListener('click', () => {
  // Toggle the display property of the dropdown menu
  navbarMenu.style.display = navbarMenu.style.display === 'block' ? 'none' : 'block';
});

$('.carousel').carousel({
  interval: 2500
})