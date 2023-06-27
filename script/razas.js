

function crearPaginaRaza(raza){
    // console.log(raza);
    document.querySelector('#raza h1').innerHTML = raza.nombre;
    document.querySelector('#raza .introduccion').innerHTML = raza.introducción;
    document.querySelector('#raza .card_container_razas').innerHTML = '';   
    for(let i = 0; i < raza.cards.length; i++){
        document.querySelector('.card_container_razas').innerHTML += "<div class='flip-card_peliculas' onclick='mostrarPagina("+raza.cards[i].tipo+", "+raza.cards[i].nombre_objeto+", "+raza.nombre_objeto +")'>"+
                                                                    "<div class='flip-card-inner'>"+
                                                                    "<div class='flip-card-front'>"+
                                                                    "<img src='"+raza.cards[i].image+"' alt='"+raza.nombre+"'>"+
                                                                    "</div>"+
                                                                    "<div class='flip-card-back'>"+
                                                                    "<h1 class='card_title'>"+raza.cards[i].titulo+"</h1>"+
                                                                    "</div>"+
                                                                    "</div>"+
                                                                    "</div>";
    }
    // si diccionario contiene atributo

    document.querySelector('#raza').innerHTML += '<div class="anterior"><i class="fas fa-arrow-left" onclick="volver()"></i></div>';

}
