let texto = document.getElementById('textoLineas');
let boton = document.getElementById('botoncito');

boton.addEventListener('click',ingresaEdad)

let h1 = document.getElementById('h1');
let h2 = document.getElementById('h2');
function ingresaEdad(){
    
    let edad = prompt('Ingresa edad');
    let valor = texto.value;
    mostrarEdad(edad,valor)
   
}

function mostrarEdad(edad,valor){
    h1.textContent = 'Tu edad es: ' + edad + ' años';
    h2.textContent = valor;
}