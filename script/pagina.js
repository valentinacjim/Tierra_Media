function limpiarPagina(){
    document.querySelector('.cabecera_tema').innerHTML = '';
    document.querySelector('.datos').innerHTML = '';
    document.querySelector('.ficha img').src = '';
    document.querySelector('.ficha h3').innerHTML = '';
    document.querySelector('.indice ul').innerHTML = '';
    document.querySelector('.informacion').innerHTML = '';
}

function crearPaginaTema(tema){
    limpiarPagina();
    document.querySelector('.cabecera_tema').innerHTML = '<h1>' + tema.nombre + '</h1> <div class="introduccion_tema">';
    for(let i = 0; i < tema.introducción.length; i++){
        document.querySelector('.cabecera_tema').innerHTML += tema.introducción[i] + '<br>';
    }
    document.querySelector('.cabecera_tema').innerHTML += '</div>';
    
    if (Object.keys(tema.ficha).length==0){
        document.querySelector('.datos').style.display = 'none';
        
        }
    else{
        Object.keys(tema.ficha).forEach(key => {
            document.querySelector('.datos').innerHTML += '<div>' + key + ': </div> <div>' + tema.ficha[key] + '</div>';
        });
    }
    document.querySelector('.ficha img').src = tema.image;
    document.querySelector('.ficha h3').innerHTML = tema.nombre;


   

    
    if (tema.indice.length==0) document.querySelector('.indice').style.display = 'none';
    for(let i = 0; i < tema.indice.length; i++){
        categoria = tema.indice[i];
        document.querySelector('.indice ul').innerHTML += '<li> <a href="#'+categoria+'">' + categoria + '</a></li>';
        document.querySelector('.informacion').innerHTML += '<h1><a name="'+categoria+'">' + categoria + '</a></h1>';
        for(let j = 0; j < tema.informacion[categoria].length; j++) document.querySelector('.informacion').innerHTML += tema.informacion[categoria][j] + '<br>';
    }

    document.querySelector('.informacion').innerHTML += '<br>';
    document.querySelector('#tema').innerHTML += '<div class="anterior"><i class="fas fa-arrow-left" onclick="volver()"></i></div>';

    
}

function hideIndex(){
    if (document.querySelector('.indice ul').style.display == 'none') document.querySelector('.indice ul').style.display = 'block';
    else  document.querySelector('.indice ul').style.display = 'none';
}