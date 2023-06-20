
paginas = document.getElementsByClassName('page');
// console.log(paginas.length);

function mostrarPagina(index, name=null) {
    for (let i = 0; i < paginas.length; i++) {
        paginas[i].style.visibility = 'hidden';
    }
    paginas[index].style.visibility = 'visible';
    if (index == 8) {
        crearPaginaPersonaje(name);
    }
    if (index == 7) {
        crearPaginaRaza(name);
    }
}

let page = document.getElementsByClassName('page')[7];
page.style.visibility = 'visible';
crearPaginaRaza(ainur);