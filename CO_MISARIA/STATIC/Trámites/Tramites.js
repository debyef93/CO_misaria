// SCRIPT PARA DESPLEGABLE DE SECCIONES (JUST MOBILE VERSION)
 
        function toggleSecciones() {
            const lista = document.getElementById("lista-secciones");
            lista.classList.toggle("visible");
            lista.classList.toggle("oculto");
        }


//JAVASCRIPT PARA BARRA DESPLEGABLE

        const barras = document.querySelectorAll('.barra-desplegable');

        barras.forEach(barra => {
            const cabecera = barra.querySelector('.cabecera');
            const contenido = barra.querySelector('.contenido');
            const flecha = barra.querySelector('.flecha');

            cabecera.addEventListener('click', () => {
                barra.classList.toggle('abierto');

                if (barra.classList.contains('abierto')) {
                    contenido.style.maxHeight = contenido.scrollHeight + "px";
                    flecha.style.transform = "rotate(90deg)";
                } else {
                    contenido.style.maxHeight = null;
                    flecha.style.transform = "rotate(0deg)";
                }
            });
        });
  
    //--ANIMACIÓN PARA LA CUADRICULA DE EXTRANJERÍA-->

        document.addEventListener("DOMContentLoaded", function () {
            const imgElement = document.querySelector(".cuadricula .preguntas-frecuentes img");

            imgElement.addEventListener("mouseover", function () {
                this.src = "iconos png/preguntas.png"; // Cambia a la imagen deseada
            });

            imgElement.addEventListener("mouseout", function () {
                this.src = "iconos png/preguntas azul.png"; // Vuelve a la imagen original
            });
        });

        // BOTÓN SCROLL UP

// Mostrar el botón al hacer scroll hacia abajo
  window.addEventListener("scroll", function() {
    const scrollBtn = document.getElementById("scrollToTopBtn");
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  // Scroll suave hacia arriba
  document.getElementById("scrollToTopBtn").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  

// --- Menú móvil (hamburguesa) ---
    function myFunction() {
        const menu = document.getElementById("myLinks");
        if (menu.style.display === "flex") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }
    }

    // --- Elementos DOM ---
    const abrirBuscador = document.getElementById("abrirBuscador");
    const cerrarBuscador = document.getElementById("cerrarBuscador");
    const buscadorMovil = document.getElementById("buscadorMovil");
    const input = document.getElementById('buscadorInput');
    const resultados = document.getElementById('resultados');

    const inputDesktop = document.getElementById('buscadorInputDesktop');
    const resultadosDesktop = document.getElementById('resultados-desktop');
    const resetDesktop = document.querySelector('.form .reset');

    // --- Trámites ---
    const tramites = [
        { nombre: "Denuncias por robo", url: "#" },
        { nombre: "Solicitud de pasaporte", url: "#" },
        { nombre: "Renovación del DNI", url: "#" },
        { nombre: "Antecedentes penales", url: "#" },
        { nombre: "Permiso de armas", url: "#" }
    ];

    // --- Mostrar/ocultar buscador móvil al hacer clic en la lupa ---
    abrirBuscador.addEventListener("click", () => {
        if (buscadorMovil.style.display === "flex") {
            buscadorMovil.style.display = "none";
        } else {
            buscadorMovil.style.display = "flex";
        }
    });

    // --- Cerrar buscador móvil con botón (X) ---
    cerrarBuscador.addEventListener("click", () => {
        buscadorMovil.style.display = "none";
        resultados.innerHTML = '';
        input.value = '';
    });

    // --- Buscador funcional móvil ---
    input.addEventListener('input', () => {
        const texto = input.value.toLowerCase().trim();
        const filtrados = tramites.filter(t =>
            t.nombre.toLowerCase().includes(texto)
        );

        resultados.innerHTML = '';

        if (texto === '') return;

        if (filtrados.length === 0) {
            resultados.innerHTML = '<li class="not-found">No se encontraron resultados.</li>';
        } else {
            filtrados.forEach(t => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.textContent = t.nombre;
                a.href = t.url;
                li.appendChild(a);
                resultados.appendChild(li);
            });
        }
    });

    // --- Buscador funcional desktop ---
    inputDesktop.addEventListener('input', () => {
        const texto = inputDesktop.value.toLowerCase().trim();
        resultadosDesktop.innerHTML = '';

        if (texto === '') {
            resultadosDesktop.style.display = 'none';
            return;
        }

        const filtrados = tramites.filter(t =>
            t.nombre.toLowerCase().includes(texto)
        );

        if (filtrados.length === 0) {
            resultadosDesktop.innerHTML = '<li>No se encontraron resultados.</li>';
        } else {
            filtrados.forEach(t => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.textContent = t.nombre;
                a.href = t.url;
                li.appendChild(a);
                resultadosDesktop.appendChild(li);
            });
        }

        resultadosDesktop.style.display = 'block';
    });

    // --- Reset buscador desktop ---
    resetDesktop.addEventListener('click', () => {
        resultadosDesktop.innerHTML = '';
        resultadosDesktop.style.display = 'none';
        inputDesktop.value = '';
    });

    // --- Ocultar menús y buscadores al cambiar tamaño de pantalla ---
    window.addEventListener('resize', () => {
        const menu = document.getElementById("myLinks");
        if (window.innerWidth > 900 && menu.style.display === "flex") {
            menu.style.display = "none";
        }

        // Oculta buscadores y limpia resultados
        buscadorMovil.style.display = "none";
        resultados.innerHTML = '';
        input.value = '';

        resultadosDesktop.innerHTML = '';
        resultadosDesktop.style.display = 'none';
        inputDesktop.value = '';
    });

    // --- Al cargar la página ---
    document.addEventListener("DOMContentLoaded", () => {
        // Oculta buscador móvil
        buscadorMovil.style.display = "none";

        // Color rojo para enlaces visitados del footer
        const enlaces = document.querySelectorAll(".enlace");
        enlaces.forEach(enlace => {
            const href = enlace.getAttribute("href");
            if (sessionStorage.getItem(href)) {
                enlace.style.color = "red";
            }

            enlace.addEventListener("click", () => {
                sessionStorage.setItem(href, "visited");
                enlace.style.color = "red";
            });
        });
    });

    // BOTON SCROLL UP

      function volverArriba() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }