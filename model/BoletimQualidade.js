import { Boletim } from "./Boletim.js" 

export class BoletimQualidade extends Boletim {
    #reprovado

    constructor(titulo, data, status, reprovado){
        super(titulo, data, status)
    this.#reprovado = reprovado;
    }
    
apresentar() {
    console.log(`${this.#reprovado} items foram reprovados`)
}

getReprovado() {
    return this.#reprovado;
}
}