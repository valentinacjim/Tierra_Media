

function crearPaginaCategoria(categoria){
    // console.log(categoria);
    document.querySelector('#categoria h1').innerHTML = categoria.nombre;
    document.querySelector('#categoria .introduccion').innerHTML = categoria.introducción;
    document.querySelector('#categoria .card_container_categoria').innerHTML = '';   
    for(let i = 0; i < categoria.cards.length; i++){
        document.querySelector('.card_container_categoria').innerHTML += "<div class='flip-card_peliculas' onclick='mostrarPagina("+categoria.cards[i].tipo+", "+categoria.cards[i].nombre_objeto+", "+categoria.nombre_objeto +")'>"+
                                                                    "<div class='flip-card-inner'>"+
                                                                    "<div class='flip-card-front'>"+
                                                                    "<img src='"+categoria.cards[i].image+"' alt='"+categoria.nombre+"'>"+
                                                                    "</div>"+
                                                                    "<div class='flip-card-back'>"+
                                                                    "<h1 class='card_title'>"+categoria.cards[i].titulo+"</h1>"+
                                                                    "</div>"+
                                                                    "</div>"+
                                                                    "</div>";
    }
    // si diccionario contiene atributo

    document.querySelector('#categoria').innerHTML += '<div class="anterior"><i class="fas fa-arrow-left" onclick="volver()"></i></div>';

}
