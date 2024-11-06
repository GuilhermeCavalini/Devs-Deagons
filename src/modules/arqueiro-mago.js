import { Arquiero } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem {
    ladoArqueiro
    ladoMagico
    static tipo = 'ArqueiroMago'
    static descricao = 'Detentor de lanças e flechas mágicas!'

    constructor(nome, destreza, elementoMagico, levelMagico, inteligencia){
        super(nome)
        this.ladoArqueiro = new Arquiero(nome, destreza)
        this.ladoMago = new Mago(nome, elementoMagico, levelMagico, inteligencia)
    }

    obterInsignia(){
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    }
}