import { cadastrarBoletim, deletarBoletim, listarBoletim, atualizarBoletim, buscarPorIndice } from "../repository/boletimRepository.js"
import { BoletimManutencao } from "../model/BoletimManutencao.js"
import { BoletimProducao } from "../model/BoletimProducao.js"
import { BoletimQualidade } from "../model/BoletimQualidade.js"
import { Boletim } from "../model/Boletim.js"
import {Cabecalho} from "../model/Cabecalho.js"

export function cadastrarBoletimManutencao(codigo, titulo, data, equipamento) {
    const boletim = new BoletimManutencao (codigo, titulo, data, equipamento)
    cadastrarBoletim(boletim)
}

export function cadastrarBoletimProducao(codigo, titulo, data, producao) {
    const boletim = new BoletimProducao (codigo, titulo, data, producao)
    cadastrarBoletim(boletim)
}

export function cadastrarBoletimQualidade(codigo, titulo, data, reprovado) {
    const boletim = new BoletimQualidade (codigo, titulo, data, reprovado)
    cadastrarBoletim(boletim)
}
    
export function atualizarBoletimManutencao(indice, codigo, titulo, data, equipamento) {
    const boletim = new BoletimManutencao(codigo, titulo, data, equipamento)
    atualizarBoletim(indice, boletim)
}

export function atualizarBoletimProducao(indice, codigo, titulo, data, producao) {
    const boletim = new BoletimProducao(codigo, titulo, data, producao)
    atualizarBoletim(indice, boletim)
}

export function atualizarBoletimQualidade(indice, codigo, titulo, data, reprovado) {
    const boletim = new BoletimProducao(codigo, titulo, data, reprovado)
    atualizarBoletim(indice, boletim)
}

export function excluirBoletim (indice) {
    deletarBoletim(indice);
}

export function IniciarBoletim (indice) {
    const boletim = buscarPorIndice(indice)
    boletim.iniciar();
}

export function ConcluirBoletim (indice) {
    const boletim = buscarPorIndice(indice)
    boletim.concluir();
}

export function listar() {
    const Boletim = listarBoletim();

    for (let i = 0; i <Boletim.length; i++) {
        const boletim = Boletim[i];

        console.log("---------------------")
        console.log(`Indice: ${i}`)
        console.log(`Titulo: ${boletim.Titulo}`)
        console.log(`Data:   ${boletim.Data}`)
        console.log(`Codigo: ${boletim.codigo}`)
        console.log(`Status: ${boletim.getStatus()}`)
        boletim.apresentar()

    }
}