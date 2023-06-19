

function crear_pagina_personajes(personaje){
    // console.log();
    document.querySelector('.cabecera_personajes').innerHTML = '<h1>' + personaje.nombre + '</h1> <div class="introduccion_personajes">';
    // console.log(personaje.introducción[0]);
    for(let i = 0; i < personaje.introducción.length; i++){
        // console.log(document.querySelector('.introduccion_personajes'));
        document.querySelector('.cabecera_personajes').innerHTML += personaje.introducción[i] + '<br>';
        // console.log(personaje.introducción[i]);
    }
    document.querySelector('.cabecera_personajes').innerHTML += '</div>';
    document.querySelector('.ficha img').src = personaje.image;
    document.querySelector('.ficha h3').innerHTML = personaje.nombre;

    Object.keys(personaje.ficha).forEach(key => {
        document.querySelector('.datos').innerHTML += '<div>' + key + ': </div> <div>' + personaje.ficha[key] + '</div>';
    });

    for(let i = 0; i < personaje.indice.length; i++){
        categoria = personaje.indice[i];
        document.querySelector('.indice ul').innerHTML += '<li> <a href="#'+categoria+'">' + categoria + '</a></li>';
        document.querySelector('.informacion').innerHTML += '<h1><a name="'+categoria+'">' + categoria + '</a></h1>';
        for(let j = 0; j < personaje.informacion[categoria].length; j++) document.querySelector('.informacion').innerHTML += personaje.informacion[categoria][j] + '<br>';
    }

    document.querySelector('.informacion').innerHTML += '<br>';
    
    
}

function hide_index(){
    if (document.querySelector('.indice ul').style.display == 'none') document.querySelector('.indice ul').style.display = 'block';
    else  document.querySelector('.indice ul').style.display = 'none';
}