export default class SalvaFilme{
    private repositorio 
    constructor(repositorio){
        this.repositorio = repositorio

    }
    public execute(input:Input):Output{
        const {id,titulo,descricao,imagem} = input
        return this.repositorio.salvar({id,titulo,descricao,imagem})
        this.repositorio.salvar()

    }
}

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