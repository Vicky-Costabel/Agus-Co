function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top < window.innerHeight && rect.bottom >= 0
  );
}

const elementos = document.querySelectorAll('.slider');


window.addEventListener('scroll', function () {
  elementos.forEach(function (texto) {
      if (isInViewport(texto)) {
          texto.classList.add('scroll-activo');
      } 
  });
});

