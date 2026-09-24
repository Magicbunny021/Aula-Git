import { Boletim } from "./Boletim.js" 

export class BoletimProducao extends Boletim {
    #producao

    constructor(titulo, data, status, producao){
        super(titulo, data, status)
    this.#producao = producao;
    }
    
apresentar() {
    console.log(`Foi produzido ${this.#producao} unidades`)
}

getProducao() {
    return this.#producao
}
}