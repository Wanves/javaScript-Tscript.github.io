let ataqueJugador;
let ataqueaEnemigo;

function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccinarMascotaJugador);

  let botonFuego = document.getElementById('boton-fuego');
  botonFuego.addEventListener('click',ataqueFuego);

  let botonAgua = document.getElementById('boton-agua');
  botonAgua.addEventListener('click',ataqueAgua);

  let botonTierra = document.getElementById('boton-tierra');
  botonTierra.addEventListener('click',ataqueTierra);
  // -------------------------------------
 

}

function seleccinarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let spanMascotaJugador = document.getElementById('mascota-jugador');
  if(inputHipodoge.checked){
    spanMascotaJugador.innerHTML= 'Hipodege';
  }else if(inputCapipepo .checked){
    spanMascotaJugador.innerHTML= 'Capipepo';
  }else if(inputRatigueya.checked){
    spanMascotaJugador.innerHTML= 'Ratigueya';
  }else{
    alert('Selecciona una mascota')
  }

  seleccinarMascotaEnemigo()

}

function seleccinarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3);
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');


    if(mascotaAleatoria == 1){
     spanMascotaEnemigo.innerHTML =  'Hipodoge'
    }else if(mascotaAleatoria == 2){
     spanMascotaEnemigo.innerHTML =  'Capipepo'
    }else{
     spanMascotaEnemigo.innerHTML =  'Ratigueya'
    }
}

function ataqueFuego(){
  ataqueJugador = 'FUEGO';
  ataqueAleatorioEnemigo();
}
function ataqueAgua(){
  ataqueJugador = 'AGUA';
  ataqueAleatorioEnemigo();
}

function ataqueTierra(){
  ataqueJugador = 'TIERRA';
  ataqueAleatorioEnemigo();
}


function ataqueAleatorioEnemigo(){
  let ataqueAleatorio = aleatorio(1,3)

  if(ataqueAleatorio == 1){
    ataqueEnemigo = 'FUEGO'
   }else if(ataqueAleatorio == 2){
    ataqueEnemigo = 'AGUA'
   }else{
    ataqueEnemigo = 'TIERRA'
   }

   crearMensaje()
  
}

function crearMensaje(){
  let sectionMensajes = document.getElementById('mensajes')
  let parrafo = document.createElement('p')
  parrafo.innerHTML='Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con' + ataqueEnemigo +' - Pendiente 🎉🎉🎉'

  sectionMensajes.appendChild(parrafo)
}

function aleatorio(min,max){
  return Math.floor(Math.random()*(max-min + 1) + min)
}



window.addEventListener("load", iniciarJuego);
















// -----------------------------------
// function eleccion(jugada){
//     let resultado = ''
//     if (jugada == 1){
//         resultado ='Piedra 🪨🪨';
//     }else if (jugada == 2){
//         resultado = 'Papel 📃📃';
//     }else if(jugada == 3){
//         resultado = 'Tijera ✂️✂️';
//     }else {
//         resultado = 'ValueError--Vuelve a intentarlo'
//     }return resultado;
// }

// let jugador = 0;
// let pc = 0
// let triunfos = 0
// let perdidas = 0
// while (triunfos < 3 && perdidas < 3) {
//     pc = aleatorio(1,3);
//     jugador = prompt('Elige: 1 para piedra, 2 para papel, 3 para tijera');
//     // alert('Elegiste ' + jugador);

//     alert('PC elige: ' + eleccion(pc));
//     alert('Tú eliges: ' + eleccion(jugador));

//     //COMBATE
//     if (pc == jugador){
//         alert('EMPATE')
//     } else if (jugador == 1 && pc == 3){
//         alert('GANASTE')
//         triunfos = triunfos + 1;
//     } else if (jugador == 2 && pc == 1){
//         alert('GANASTE')
//         triunfos = triunfos + 1;
//     }else if (jugador == 3 && pc == 2){
//         alert('GANASTE')
//         triunfos = triunfos + 1;
//     }
//     else{
//         alert('PERDISTE')
//         perdidas = perdidas + 1;
//        }
//     }

//     alert('Ganaste' + triunfos + 'veces. perdidas' + perdidas + 'veces')
