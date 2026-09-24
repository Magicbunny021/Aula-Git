import {Cabecalho} from "./Cabecalho.js"

export class Boletim {
    #status;
    #cabecalho;

    constructor(codigo, titulo, data) {
        this.#status = "Rascunho";
        this.codigo = codigo;
        this.#cabecalho = new Cabecalho(titulo, data);
    }

iniciar() {
    this.#status = "Em Elaboração";
}

concluir() {
    this.#status = "Finalizado";
}

apresentar() {
    throw new Error ("O método apresentar deve ser definido")
}

getStatus(){
    return this.#status;
}
get Titulo() {
    return this.#cabecalho.titulo
}

get Data() {
    return this.#cabecalho.data
}

}