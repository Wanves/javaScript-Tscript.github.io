// let boton = document.getElementById('button');
// boton.addEventListener('click',preguntarNombre);

// let h1 = document.getElementById('h1');
// let h2 = document.getElementById('h2');

// function preguntarNombre(){
//     let nombre = prompt('Ingresa tu nombre: ');
//     mostrarNombre(nombre);
// }

// function mostrarNombre(nombre){
//     h2.textContent = 'Hacemos de algo simple algo extraordinario😀';
//     h1.textContent = nombre;
//     if (nombre == 'Juan')
//     {h2.textContent = 'Lo estas entendiendo muy bien'}
//     else if (nombre == 'Zoe')
//     {h2.textContent = 'Vas por muy buen camino'}
//     else
//     {h2.textContent = 'Todo lo estas logrando'}
// }

// let boton  = document.getElementById('button');
// boton.addEventListener('click', edadUsuario);

// let h1 = document.getElementById('h1');
// let h2 = document.getElementById('h2');

// function edadUsuario()
// {let edad = prompt('Ingresa tu Edad');
// mostrarEdadUsuario(edad)};

// function mostrarEdadUsuario(edad)
// {h1.textContent ='Tu edad es: '+ edad + ' años';
// h2.textContent = 'Genial! lo has logrado';
// if (edad >=18 )
// {h1.textContent ='Tu edad es: ' +edad + ' Eres mayor de edad'}
// else
// {h2.textContent = 'Eres menor de edad'};

// }

document.write('<h1 class=h1js id=h1js>Hola mundo</h1>');
document.write('<button class=btnjs id=btnjs>Genial</button>');
document.write("<img class=imgjs width=460 height= 260 src='https://images4.alphacoders.com/936/936378.jpg' >")
document.write('<p class=pjs>Hacemos de algo simple algo extraordinario</p>');



let boton = document.getElementById('btnjs');
boton.addEventListener('click',haciendoMagia);

let h1js = document.getElementById('h1js');

function haciendoMagia(){
    let magia = prompt('click a aceptar y mira la magia');
    mostrarLaMagia(magia);
    if (magia == magia) {
        alert('Lo haces muy bien')
    }
}

function mostrarLaMagia(magia){
    h1js.textContent = 'Núnca dejes de aprender ' + magia + '😀';
    
}

