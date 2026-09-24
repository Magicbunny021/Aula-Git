import { Boletim } from "./Boletim.js" 

export class BoletimManutencao extends Boletim {
    #equipamento

    constructor(codigo, titulo, data, equipamento){
        super(codigo, titulo, data)
        this.#equipamento = equipamento;
    }
    
apresentar() {
    console.log(`O equipamento ${this.#equipamento} foi atendido`)
}

getEquipamento() {
    return this.#equipamento;
}
}