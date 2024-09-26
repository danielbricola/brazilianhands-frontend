const navLinks = document.querySelectorAll('nav ul li a');

// Set the first link as active by default
navLinks[0].classList.add('active');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(otherLink => {
      otherLink.classList.remove('active');
    });
    link.classList.add('active');
  });
});