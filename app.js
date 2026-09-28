(function () {
  'use strict';

  var imagenRespaldo =
    'data:image/svg+xml;charset=UTF-8,' +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760">' +
        '<defs>' +
          '<linearGradient id="cielo" x1="0" y1="0" x2="0" y2="1">' +
            '<stop offset="0%" stop-color="#F6C46B"/>' +
            '<stop offset="55%" stop-color="#E88B5A"/>' +
            '<stop offset="100%" stop-color="#8E5A8E"/>' +
          '</linearGradient>' +
          '<linearGradient id="campo" x1="0" y1="0" x2="0" y2="1">' +
            '<stop offset="0%" stop-color="#4E7C3A"/>' +
            '<stop offset="100%" stop-color="#24421F"/>' +
          '</linearGradient>' +
        '</defs>' +
        '<rect width="1200" height="760" fill="url(#cielo)"/>' +
        '<circle cx="880" cy="200" r="80" fill="#FFE6A8" opacity="0.9"/>' +
        '<path d="M0 470 C220 430 360 470 560 450 C760 430 980 470 1200 440 L1200 760 L0 760 Z" fill="#3F6B33" opacity="0.9"/>' +
        '<path d="M0 540 C240 500 420 540 620 520 C820 500 1000 540 1200 510 L1200 760 L0 760 Z" fill="url(#campo)"/>' +
        '<g stroke="#2E7D32" stroke-width="6" opacity="0.55">' +
          '<path d="M80 760 L300 560"/><path d="M240 760 L420 555"/>' +
          '<path d="M420 760 L540 552"/><path d="M600 760 L660 550"/>' +
          '<path d="M780 760 L780 548"/><path d="M960 760 L900 548"/>' +
          '<path d="M1140 760 L1020 550"/>' +
        '</g>' +
        '<rect x="470" y="330" width="90" height="150" rx="12" fill="#4527A0" opacity="0.85"/>' +
        '<rect x="487" y="352" width="56" height="96" rx="6" fill="#B7E3B0"/>' +
      '</svg>'
    );

  var imagenHero = document.getElementById('heroImagen');
  if (imagenHero) {
    imagenHero.addEventListener('error', function () {
      imagenHero.src = imagenRespaldo;
    });
    if (imagenHero.complete && imagenHero.naturalWidth === 0) {
      imagenHero.src = imagenRespaldo;
    }
  }

  var anio = document.getElementById('anioActual');
  if (anio) {
    anio.textContent = new Date().getFullYear();
  }

  var encabezado = document.getElementById('encabezado');
  var aplicarScroll = function () {
    if (!encabezado) {
      return;
    }
    if (window.scrollY > 24) {
      encabezado.classList.add('encogido');
    } else {
      encabezado.classList.remove('encogido');
    }
  };
  aplicarScroll();
  window.addEventListener('scroll', aplicarScroll, { passive: true });

  var botonMenu = document.getElementById('menuBoton');
  var menuMovil = document.getElementById('menuMovil');

  var cerrarMenu = function () {
    if (!menuMovil || !botonMenu) {
      return;
    }
    menuMovil.classList.add('hidden');
    botonMenu.setAttribute('aria-expanded', 'false');
    botonMenu.setAttribute('aria-label', 'Abrir menú de navegación');
    var icono = botonMenu.querySelector('i');
    if (icono) {
      icono.className = 'fa-solid fa-bars text-xl';
    }
  };

  if (botonMenu && menuMovil) {
    botonMenu.addEventListener('click', function () {
      var abierto = botonMenu.getAttribute('aria-expanded') === 'true';
      if (abierto) {
        cerrarMenu();
      } else {
        menuMovil.classList.remove('hidden');
        botonMenu.setAttribute('aria-expanded', 'true');
        botonMenu.setAttribute('aria-label', 'Cerrar menú de navegación');
        var icono = botonMenu.querySelector('i');
        if (icono) {
          icono.className = 'fa-solid fa-xmark text-xl';
        }
      }
    });

    var enlacesMenu = menuMovil.querySelectorAll('a');
    for (var i = 0; i < enlacesMenu.length; i++) {
      enlacesMenu[i].addEventListener('click', cerrarMenu);
    }

    document.addEventListener('keydown', function (evento) {
      if (evento.key === 'Escape') {
        cerrarMenu();
      }
    });
  }

  var elementosReveal = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observador = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            var retraso = entrada.target.getAttribute('data-delay');
            if (retraso) {
              entrada.target.style.transitionDelay = retraso + 'ms';
            }
            entrada.target.classList.add('visible');
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -60px 0px' }
    );

    for (var r = 0; r < elementosReveal.length; r++) {
      observador.observe(elementosReveal[r]);
    }
  } else {
    for (var v = 0; v < elementosReveal.length; v++) {
      elementosReveal[v].classList.add('visible');
    }
  }

  var formulario = document.getElementById('formBeta');
  var campoCorreo = document.getElementById('correo');
  var mensaje = document.getElementById('formMensaje');

  if (formulario && campoCorreo && mensaje) {
    formulario.addEventListener('submit', function (evento) {
      evento.preventDefault();
      var valor = campoCorreo.value.trim();
      var patron = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}/;

      if (valor === '') {
        mensaje.textContent = 'Escribe tu correo para sumarte a la beta.';
        mensaje.style.color = '#FFE0B2';
        campoCorreo.focus();
        return;
      }

      if (!patron.test(valor)) {
        mensaje.textContent = 'Revisa el formato de tu correo electrónico.';
        mensaje.style.color = '#FFE0B2';
        campoCorreo.focus();
        return;
      }

      mensaje.textContent = '¡Gracias! Te contactaremos cuando la beta esté disponible.';
      mensaje.style.color = '#B9F6CA';
      formulario.reset();
    });
  }
})();
