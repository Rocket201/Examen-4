import { Vehículo } from "./Vehiculo.js";
//git hub: https://github.com/Rocket201/Examen-4.git
const resultadoContainer = document.createElement('div');
document.body.appendChild(resultadoContainer);

export function mostrarResultado(mensaje){
    resultadoContainer.innerHTML += `<p>${mensaje}</p>`;
}

 const vehiculo1 = new Vehículo("BMW","CLK","ROJO",1992,'2400');
 mostrarResultado('---------- Vehículo 1 ------------'); 
 vehiculo1.mostrarDatos();
 vehiculo1.arrancar();
 vehiculo1.acelerar(140);
 vehiculo1.frenar();

const vehiculo2 = new Vehículo("Mercedes","CLK","ROJO",1992,'2400');
mostrarResultado('---------- Vehículo deportivo ------------');
vehiculo2.mostrarDatos();
vehiculo2.arrancar();
vehiculo2.acelerar(200);
vehiculo2.frenar();
vehiculo2.activarModoDeportivo();

//guardar los datos del objeto en el localstorage


console.log(localStorage.getItem('vehiculo1'));

console.log(JSON.parse(localStorage.getItem('vehiculo1')));

//guardar los datos del objeto en el localstorage

const deportivoObject = {
    marca: vehiculo1.marca,
    modelo: vehiculo1.modelo,
    color: vehiculo1.color,
    fabricacion: vehiculo1.año,
    cilindrada: vehiculo1.cilindrada
};

localStorage.setItem('vehiculo1', JSON.stringify(deportivoObject));
//recuperar los datos del localstorage
for (let key in deportivoObject) {
    if (deportivoObject.hasOwnProperty(key)) {
        localStorage.setItem(key, deportivoObject[key]);
    }
}
//funcion para borrar todos los datos del localstorage
localStorage.clear();
//quita la marca del localstorage
localStorage.removeItem('marca');