
paginas = document.getElementsByClassName('page');
// console.log(paginas.length);

function mostrarPagina(index) {
    for (let i = 0; i < paginas.length; i++) {
        paginas[i].style.visibility = 'hidden';
    }
    paginas[index].style.visibility = 'visible';
}

let page = document.getElementsByClassName('page')[10];
page.style.visibility = 'visible';