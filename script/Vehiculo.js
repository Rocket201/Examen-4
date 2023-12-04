import {mostrarResultado} from "./main.js";
// creo la clase vehiculo con sus atributos y metodos privados
export  class Vehículo{
    #marca;
    #modelo;
    #color;
    #año;
    #cilindrada;

    constructor(marca,modelo,color,año,cilindrada){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#color = color;
        this.#año = año;
        this.#cilindrada = cilindrada;
    }
    
get marca(){
    return this.#marca;
}
set marca(value){
    this.#marca = value;
}

get modelo(){
    return this.#modelo;
}

set modelo(value){
    this.#modelo = value;
}

get color (){
    return this.#color;
}

set color(value){
    this.#color = value;
}

get año(){
    return this.#año
}

set año(value){
    this.#año = value;
}

get cilindrada(){
    return this.#cilindrada;
}

set cilindrada(value){
    this.#cilindrada = value;
}
//Método para mostrar los datos del vehículo
mostrarDatos(){
    const datos = 
        `La marca es ${this.#marca} 
        <br> El modelo es ${this.#modelo}
        <br> El color es ${this.#color}
        <br> El año es ${this.#año}
        <br> La cilindrada es ${this.#cilindrada}`
        mostrarResultado(`<p>${datos}</p}`)

}
//Método para acelerar el vehículo
    acelerar(velocidad){
        const mensaje = `<br/>Se ha acelerado hasta: ${velocidad}`;
        mostrarResultado(`<p>${mensaje}</p>`);
    }


//metodo para arrancar el vehiculo
    arrancar(){
        const mensaje = `<br/> EL coche ${this.#marca}, ${this.#modelo}, de color ${this.#color}, arranca`;
        mostrarResultado(`<p>${mensaje}</p>`);
    }
//metodo para frenar el vehiculo
    frenar(){
        const mensaje = `<br/> EL coche ${this.#marca}, ${this.#modelo}, de color ${this.#color}, ha frenado`;
        mostrarResultado(`<p>${mensaje}</p>`);
    }
//metodo para activar el modo deportivo
    activarModoDeportivo(){
        console.log('Modo deportivo activado');
        const mensaje = `Modo deportivo activado`;
        mostrarResultado(`<p>${mensaje}</p>`);
    }
}


