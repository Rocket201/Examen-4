import { Vehículo } from "./Vehiculo.js";

export class AutomovilDeportivo extends Vehículo{
    #potenciaMotor;

    constructor (marca,modelo,color,año,cilindrada,potenciaMotor){
        super(marca,modelo,color,año,cilindrada);
        this.#potenciaMotor = potenciaMotor;
    }

    get potenciaMotor(){
        return this.#potenciaMotor;
    }
    set potenciaMotor(value){
        this.#potenciaMotor = value;
    }

   
}