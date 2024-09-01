window.addEventListener('load',()=>{
    /*Selecciona todos los elementos de la barra de navegacion*/ 
    let itemInicio = document.getElementById('itemInicio');
    let itemAbout = document.getElementById('itemAbout');
    let itemProyectos = document.getElementById('itemProyectos');
    let itemContacto = document.getElementById('itemContacto');
    // let img_certificados = document.querySelectorAll('.lista_certificados img');


    function certificado_completo(src){
        let div = document.createElement('div');
        let img = document.createElement('img');
        div.className='imagen_certificado';
        img.src=src;
        div.append(img);
        contenido_about.append(div);
    }

    // img_certificados.forEach(element => {
    //     element.addEventListener('click',()=>{
    //         if (element.style.transform == 'scale(1.2)' && element.style.boxShadow == 'rgb(23, 211, 211) 0px 0px 50px') {
    //             element.style.transform = 'scale(1)';
    //             element.style.boxShadow = 'none';
    //         } else {
    //             element.style.transform = 'scale(1.2)';
    //             element.style.boxShadow = '0px 0px 50px rgb(23, 211, 211)';
    //             // certificado_completo(element.src);
    //         }
    //     });
    // });

    /*Selecciona todos los section pero uno por uno*/ 
    let contenido_inicio = document.getElementById('contenido_inicio');
    let contenido_about = document.getElementById('contenido_about');
    let contenido_proyecto = document.getElementById('contenido_proyecto');
    let contenido_contacto = document.getElementById('contenido_contacto');
    let article = document.querySelectorAll('article'); //Selecciona todos los section

    /*Variables animacion*/
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

    function ocultarArticle() {
        article.forEach(element =>{
            element.style.display = 'none';
        });
    }

    function mostrarArticle(item){
        ocultarArticle();
        item.style.display = 'flex'
    }

    itemInicio.addEventListener('click',()=>{
        mostrarArticle(contenido_inicio);
    });

    itemAbout.addEventListener('click',()=>{
        mostrarArticle(contenido_about);
    });

    itemProyectos.addEventListener('click',()=>{
        mostrarArticle(contenido_proyecto);
    });

    itemContacto.addEventListener('click',()=>{
        mostrarArticle(contenido_contacto);
    });
});