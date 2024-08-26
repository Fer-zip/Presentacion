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
    let li = document.querySelectorAll('li');

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