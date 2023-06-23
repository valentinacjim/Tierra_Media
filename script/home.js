
let paginas = document.getElementsByClassName('page');
let historial = [[0]];
// console.log(paginas.length);

function mostrarPagina(index, name=null, actual=null) {
    historial.push([index, actual]);
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

function volver() {
    historial.pop();
    
    let anterior = historial[historial.length-1];

    for (let i = 0; i < paginas.length; i++) {
        paginas[i].style.visibility = 'hidden';
    }
    paginas[anterior[0]].style.visibility = 'visible';
    if (anterior[0] == 8) {
        crearPaginaPersonaje(anterior[1]);
    }
    if (anterior[0] == 7) {
        crearPaginaRaza(anterior[1]);
    }

}


mostrarPagina(0);