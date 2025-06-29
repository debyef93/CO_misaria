//-----MENÚ RESPONSIVE------//

 
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



//SCRIPT PARA MENU DESPLEGABLE
    
        document.querySelectorAll('.menu-departamentos a').forEach(enlace => {
            enlace.addEventListener('click', function (e) {
                e.preventDefault();

                const id = this.getAttribute('data-id');

                // Oculta todos los bloques
                document.querySelectorAll('.bloque').forEach(bloque => {
                    bloque.classList.remove('activo');
                });

                // Muestra solo el que corresponde
                const bloqueMostrar = document.querySelector('.info_' + id);
                if (bloqueMostrar) {
                    bloqueMostrar.classList.add('activo');
                }
            });
        });
    
    //SCRIPT PARA SEÑALIZAR DEPARTAMENTO ACTIVO
            document.querySelectorAll('.menu-departamentos .departamento').forEach(div => {
            div.addEventListener('click', function () {
                // Elimina la clase 'activo' de todos los divs
                document.querySelectorAll('.menu-departamentos .departamento').forEach(d => {
                    d.classList.remove('activo');
                });

                // Añade la clase 'activo' al div clickeado
                this.classList.add('activo');
            });
        });


    //SCRIPT PARA QUE ESTE ACTIVO AL CARGAR PAGINA POLICIA NACIONAL

        document.addEventListener('DOMContentLoaded', function () {
            // Establecer la categoría predeterminada 'policia'
            const defaultCategory = 'policia';

            // Establecer el bloque de información correspondiente a 'Policía Nacional' como activo
            const bloqueMostrar = document.querySelector('.info_' + defaultCategory);
            if (bloqueMostrar) {
                bloqueMostrar.classList.add('activo');
            }

            // Establecer el enlace del menú de 'Policía Nacional' como activo
            const departamentoActivo = document.querySelector('.menu-departamentos #' + defaultCategory);
            if (departamentoActivo) {
                departamentoActivo.classList.add('activo');
            }
        });



    //SCRIPT PARA DESPLEGAR PREGUNTAS FRECUENTES


    //PARA BARRA DESPLEGABLE

        // Selecciona todas las barras desplegables
        const barras = document.querySelectorAll('.barra-desplegable');

        barras.forEach(barra => {
            const cabecera = barra.querySelector('.cabecera');
            const contenido = barra.querySelector('.contenido-pregunta');
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

