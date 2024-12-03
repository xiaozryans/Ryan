// Highlight active navigation link
document.addEventListener('DOMContentLoaded', () => {
    const currentLocation = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentLocation) {
        link.style.backgroundColor = '#444';
        link.style.borderRadius = '5px';
      }
    });
  });
  
  // Search functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const products = document.querySelectorAll('.product');
      
      products.forEach(product => {
        const title = product.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    });
  });
  
// Scroll to Top functionality
const scrollTopButton = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
});

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
