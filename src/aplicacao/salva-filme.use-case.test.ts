import {describe, expect, it, test} from 'vitest'

import salvaFilme from './salva-filme.use-case'
import BancoEmMemoria from '../infra/banco/banco-em-memoria'

describe("Testando salva filme use case",()=>{
    test("Deve salvar um filme",()=>{
        const BancoEmMemoria = new BancoEmMemoria
        const salvaFilme = new SalvaFilme()
        const input:Input = {
                id:number,
                titulo:"test",
                descricao:"test",
                imagem:"test"
            }
        }
        const resultado:Output = salvaFilme.execute(input)
        expect(resultado).toEqual(input)
    })
})

type Input = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}
type Output = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}
