
let paginas = document.getElementsByClassName('page');
let historial = [[0]];
// console.log(paginas.length);

function mostrarPagina(index, name=null, actual=null) {
    // historial.push();
    if (actual == null) {
        for (let i = 0; i < paginas.length; i++) {
            if (paginas[i].style.visibility == 'visible') {
                actual = i;
            }
        }
    }
    historial.push(actual);

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
     console.log(historial);
    let anterior = historial[historial.length-1];
    console.log(anterior);
    for (let i = 0; i < paginas.length; i++) {
        paginas[i].style.visibility = 'hidden';
    }
    if (typeof(anterior) == 'number'){
      paginas[anterior].style.visibility = 'visible';
    }
    else {
        // si existe atributo cards en anterior
        if (anterior.hasOwnProperty('cards')) {

            crearPaginaRaza(anterior);
            paginas[7].style.visibility = 'visible';
        }
        else {
            crearPaginaPersonaje(anterior);
            paginas[8].style.visibility = 'visible';
        }
    }

    historial.pop();

}


mostrarPagina(0);