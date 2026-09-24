const boletins = [];

export function cadastrarBoletim(Boletim) {
    boletins.push(Boletim);
}

export function listarBoletim() {
    return boletins;
}

export function deletarBoletim(indice) {
    boletins.splice(indice, 1);
}

export function atualizarBoletim(indice, Boletim) {
    boletins[indice] = Boletim
}

export function buscarPorIndice(indice) {
    return boletins[indice];
}