window.addEventListener('load',()=>{
    let itemInicio = document.getElementById('itemInicio');
    let itemAbout = document.getElementById('itemAbout');
    let itemProyectos = document.getElementById('itemProyectos');
    let itemContacto = document.getElementById('itemContacto');
    let contenido_inicio = document.getElementById('contenido_inicio');
    let contenido_about = document.getElementById('contenido_about');
    let contenido_proyecto = document.getElementById('contenido_proyecto');
    let contenido_contacto = document.getElementById('contenido_contacto');
    let section = document.querySelectorAll('section');
    // let li = document.querySelectorAll('li');
    let letras = document.querySelectorAll('.animacion #letra');
    let barra = document.getElementById('barra')
    let index = 0;
    let showing = true;
    
    let tiempo = setInterval(()=>{
        if (barra.style.display=='none') {
            barra.style.display='flex';
        }else{
            barra.style.display='none';
        }
    },300);

    let time = setInterval(()=>{
        if (showing) {
            if (index < letras.length) {
                letras[index].style.display = 'inline'; // Mostrar la siguiente letra
                index++;
            } else {
                showing = false; // Cambiar a modo ocultar
                index = letras.length - 1; // Empezar desde la última letra para ocultar
            }
        } else {
            if (index >= 0) {
                letras[index].style.display = 'none'; // Ocultar la letra actual
                index--;
            } else {
                showing = true; // Cambiar a modo mostrar
                index = 0; // Empezar desde la primera letra para mostrar
            }
        }
    }, 400);

    function ocultarSection() {
        section.forEach(element =>{
            element.style.display = 'none';
        });
    }

    function mostrarSection(item){
        ocultarSection();
        item.style.display = 'flex'
    }

    itemInicio.addEventListener('click',()=>{
        mostrarSection(contenido_inicio);
    });

    itemAbout.addEventListener('click',()=>{
        mostrarSection(contenido_about);
    });

    itemProyectos.addEventListener('click',()=>{
        mostrarSection(contenido_proyecto);
    });

    itemContacto.addEventListener('click',()=>{
        mostrarSection(contenido_contacto);
    });
});