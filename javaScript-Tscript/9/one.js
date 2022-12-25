var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(teclas);

document.addEventListener('keydown',dibujarTeclado);

function dibujarTeclado(evento){
    
    switch(evento.keyCode){
        case teclas.UP:
            console.log('arriba');
        breaks;
        case teclas.DOWN:
            console.log('abajo');
        breaks;
        case teclas.LEFT:
            console.log('izquierda');
        breaks;
        case teclas.RIGHT:
            console.log('derecha');
        breaks;


        default:
            console.log('otra tecla');
        breaks;    

    }
    
}