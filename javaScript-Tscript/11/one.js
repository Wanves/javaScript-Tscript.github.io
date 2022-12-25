
function suma() {
  let a = (prompt("Hola, ingresa el primer número-> "));
  let b = (prompt("Ingrese el segundo número-> "));
  let resultado = a + b;
  alert("El resultado es: " + resultado);
}
suma();


async function traerPais(){
    const respuesta = await fetch('https://api.nationalize.io?name=Juan')
    const nombre = respuesta.json();
    return nombre;
    
}

function mostrarNombre(){
    let n = prompt("Mostrar nombre-> ");
    document.getElementById('p1').innerHTML = n;
    p1.document.write(n);
}


mostrarNombre();

traerPais().then(mostrarNombre);

















