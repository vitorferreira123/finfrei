import prompt from "prompt-sync";
import { escrever } from "./exibiçao.js";
let ler = prompt()

export function exibirMenu() {
    do{ 
        const VERDE = '\x1b[32m%s\x1b[0m';

        escrever(`== Oque deseja fazer ==`,VERDE )
        escrever(``)
        escrever("  1. Depositar");
        escrever("  2. Sacar");
        escrever("  3. Exibir saldo");
        escrever("  4. Simular investimento");
        escrever("  5. Sair");
        let opcao = Number(ler())

        return opcao
    }while(opcao != 5)

}






