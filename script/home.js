
paginas = document.getElementsByClassName('page');
// console.log(paginas.length);

function mostrarPagina(index, name=null) {
    for (let i = 0; i < paginas.length; i++) {
        paginas[i].style.visibility = 'hidden';
    }
    paginas[index].style.visibility = 'visible';
    if (index == 10) {
        crearPaginaPersonaje(name);
    }
}

let page = document.getElementsByClassName('page')[10];
page.style.visibility = 'visible';
crearPaginaPersonaje(gandalf);