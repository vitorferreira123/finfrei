import prompt from "prompt-sync";
let ler = prompt()

export function entrada(){
    const VERDE = '\x1b[32m%s\x1b[0m';
    const AZUL = '\x1b[1;34m%s\x1b[0m';

    const TITULO = `
███████╗██╗███╗   ███╗    ███████╗██████╗ ███████╗██╗
██╔════╝██║████╗ ████║    ██╔════╝██╔══██╗██╔════╝██║
█████╗  ██║██╔████╔██║    █████╗  ██████╔╝█████╗  ██║
██╔══╝  ██║██║╚██╔╝██║    ██╔══╝  ██╔══██╗██╔══╝  ██║
██║     ██║██║ ╚═╝ ██║    ██║     ██║  ██║███████╗██║
╚═╝     ╚═╝╚═╝     ╚═╝    ╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝
`
console.log();
console.log(VERDE,`                   ==BEM VINDO AO==`);
console.log(AZUL,TITULO);
}

export function escrever(mensagem){
    console.log(mensagem);
}

