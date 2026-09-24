export class Cabecalho {
    #titulo
    #data

    constructor(titulo, data){
    this.#titulo = titulo,
    this.#data = data;
    }

get data() {
    return this.#data;
}

get titulo() {
    return this.#titulo;
}
}