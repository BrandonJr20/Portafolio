document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelectorAll('.card');
  
    card.forEach(item => {
      const img = item.querySelector('img');
      const staticSrc = item.getAttribute('data-static');
      const gifSrc = item.getAttribute('data-gif');
  
      item.addEventListener('mouseover', () => {
        img.src = gifSrc;
      });
  
      item.addEventListener('mouseout', () => {
        img.src = staticSrc;
      });
    });
  });
  