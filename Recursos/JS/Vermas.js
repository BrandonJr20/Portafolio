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

  const secciones = document.querySelectorAll('.seccion')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting){
          entry.target.classList.add('visible')
        }
      })
    },
    {
      threshold:0.5,
    }
  )

  secciones.forEach((seccion) => observer.observe(seccion))


});

document.querySelector('.nav-toggle').addEventListener('click', function () {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');
});

