let inicio = document.getElementsByClassName('page')[0];
// inicio.style.visibility = 'visible';
let historia = document.getElementsByClassName('page')[1];
let libros = document.getElementsByClassName('page')[2];
let series_y_peliculas = document.getElementsByClassName('page')[3];
let personajes = document.getElementsByClassName('page')[4];
let lugares = document.getElementsByClassName('page')[5];
let razas = document.getElementsByClassName('page')[6];

categorias = [inicio, historia, libros, series_y_peliculas, personajes, lugares, razas];

function mostrarPagina(index) {
    for (let i = 0; i < categorias.length; i++) {
        categorias[i].style.visibility = 'hidden';
    }
    categorias[index].style.visibility = 'visible';
}

let page = document.getElementsByClassName('page')[7];
page.style.visibility = 'visible';