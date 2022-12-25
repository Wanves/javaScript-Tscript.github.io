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

let boton = document.getElementById('button');
boton.addEventListener('click',preguntaEdad);

let h1 = document.getElementById('h1');
let h2 = document.getElementById('h2');

function preguntaEdad()
{let edad = prompt('Ingresa tu edad');
mostrarEdad(edad)
}


function mostrarEdad(edad)
{h1.textContent = edad;
h2.textContent = 'Simple-Poderoso'
};


