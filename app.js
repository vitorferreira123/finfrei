import prompt from "prompt-sync";
import { exibirMenu } from "./menu.js"
import { depositar, sacar, exibirSaldo , simularInvestimento} from './financeiro.js';
import { entrada, escrever } from "./exibiçao.js";
let ler = prompt()

entrada()

let saldo = 0

do{
let opcao = exibirMenu()

if(opcao == 1){
    saldo = depositar(saldo)
}else if(opcao == 2){
    saldo = sacar(saldo)
}else if(opcao == 3){
    saldo = exibirSaldo(saldo)
}else if(opcao == 4){
    saldo = simularInvestimento()
}else if(opcao == 5){
    escrever(`saindo...`)
    process.exit(0);
}
}while (exibirMenu !== 5)

     


