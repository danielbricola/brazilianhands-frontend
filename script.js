const links = document.querySelectorAll('.nav-link');
const bottomBar = document.querySelector('.bottom-bar');

// Add this code to make the bottom bar active on the first link by default
const firstLink = links[0];
const firstLinkRect = firstLink.getBoundingClientRect();
bottomBar.style.left = `${firstLinkRect.left}px`;
bottomBar.style.width = `${firstLinkRect.width}px`;
bottomBar.style.display = 'block';

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const linkRect = link.getBoundingClientRect();
    bottomBar.style.left = `${linkRect.left}px`;
    bottomBar.style.width = `${linkRect.width}px`;
    bottomBar.style.display = 'block';
  });
});