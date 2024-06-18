import prompt from "prompt-sync"
import { escrever } from "./exibiçao.js";
import { exibirMenu } from "./menu.js";
let ler = prompt()

export function depositar(saldo){
    let depositado = 0
    while(depositado <= 0){
    escrever(``) 
    escrever(`Qual o valor do deposito(c para cancelar):`);
    let Depositar = ler();
    if(Depositar <= 0){
        return depositar();
    }else if(Depositar === `c`){
        escrever(`deposito cancelado`)
        return exibirMenu()
    }
    Depositar = parseFloat(Depositar)
    
    escrever(``)
    escrever(`Deposito de ${Depositar.toFixed(2)}R$ concluido com sucesso.`);
    escrever(`========================================`)
   
    let novoValor = saldo + Depositar;
    return novoValor;
    }
}

export function sacar(saldo){
    let sacado = 0;
    while (sacado <= 0 || sacado > saldo){
        escrever(`Qual o valor do saque(c para cancelar):`);
        let saque = ler()
        if(saque === 'c'){
            return exibirMenu()
        }
        if(saque > saldo){
            escrever(``)
            escrever(`Saldo insuficiente vc tem só ${saldo.toFixed(2)}R$`)
            return sacar()
        }
        saque = parseFloat(saque)
        escrever(``)
        escrever(`Saque de ${saque.toFixed(2)}R$ concluido com sucesso.`);
        escrever(`========================================`)
        let novoValor = saldo-saque
        return novoValor
    }
}

export function exibirSaldo(saldo){
    escrever(`Seu saldo é de ${saldo.toFixed(2)}R$` );
    escrever(``)
    escrever(`========================================`)
    
    return saldo;
}

export function simularInvestimento(Juros, TempoInvestido ,capitalInicial ){
    escrever(`Informe quanto de dinheiro vc irá querer investir(c para cancelar):`);
    let capital = Number(ler())

    escrever(`Qual o valor da taxa de juros em %(c para cancelar):`);
    let juros = Number(ler())

    escrever(`Por quanto tempo vc irá investir em meses(c para cancelar):`);
    let tempo = Number(ler())
    escrever(``)
    let taxaJuros = juros/100
    let montante = capital * Math.pow(1 + taxaJuros, tempo);
    escrever(`Lucro com investimento após ${tempo} meses: R$ ${montante.toFixed(2)}`);
    escrever(``)
    escrever(`========================================`)
    
    return montante
}