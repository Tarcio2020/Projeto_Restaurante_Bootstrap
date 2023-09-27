

function bebidasSemAlcool() {
    document.getElementById('bebidasNaoAlcolicas').style.display ='block';
    document.getElementById('bebidasAlcoolicas').style.display ='none';
    document.getElementById('entrada').style.display ='none';
    document.getElementById('pratos').style.display ='none';    
    document.getElementById('sobremesas').style.display ='none';
}

function bebidasAlcoolicas() {
    document.getElementById('bebidasNaoAlcolicas').style.display ='none';
    document.getElementById('bebidasAlcoolicas').style.display ='block';
    document.getElementById('entrada').style.display ='none';
    document.getElementById('pratos').style.display ='none';
    document.getElementById('sobremesas').style.display ='none';
}

function entrada() {
    document.getElementById('bebidasNaoAlcolicas').style.display ='none';
    document.getElementById('bebidasAlcoolicas').style.display ='none';
    document.getElementById('entrada').style.display ='block';
    document.getElementById('pratos').style.display ='none';
    document.getElementById('sobremesas').style.display ='none';
}

function pratos() {
    document.getElementById('bebidasNaoAlcolicas').style.display ='none';
    document.getElementById('bebidasAlcoolicas').style.display ='none';
    document.getElementById('entrada').style.display ='none';
    document.getElementById('pratos').style.display ='block';
    document.getElementById('sobremesas').style.display ='none';
}

function sobremesas() {
    document.getElementById('bebidasNaoAlcolicas').style.display ='none';
    document.getElementById('bebidasAlcoolicas').style.display ='none';
    document.getElementById('entrada').style.display ='none';
    document.getElementById('pratos').style.display ='none';
    document.getElementById('sobremesas').style.display ='block';
}