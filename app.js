import {cadastrarBoletimManutencao,
    cadastrarBoletimProducao,
    cadastrarBoletimQualidade,
    atualizarBoletimManutencao,
    atualizarBoletimProducao,
    atualizarBoletimQualidade,
    excluirBoletim,
    IniciarBoletim,
    ConcluirBoletim,
    listar
} from './controller/boletimController.js'

cadastrarBoletimManutencao('0', 'PC', '15-09-2026', 'Computador')
cadastrarBoletimProducao('1', 'Produtor', '15-09-2026', '500')
cadastrarBoletimQualidade('2', 'Qualidade', '15-09-2026', '3')

listar()

IniciarBoletim(0)
ConcluirBoletim(1)
atualizarBoletimQualidade(2, '6', 'Qualitatificantarantula', '27-09-2026', '70')
excluirBoletim(0)
console.log("=========================================================================================================")
console.log("Após atts)")
console.log("=========================================================================================================")
listar()