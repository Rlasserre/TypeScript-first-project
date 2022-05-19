//Type VOID usado para funções que não tem retorno explicito.

function principal(): void {
    console.log('executando');
}

principal();

/* Type Never, laços de repetições infinitos ou
funções que disparam Erros */

function funcaoQueNuncaRetorna(): never {
    while (true) {

    }
}

funcaoQueNuncaRetorna();


function funcaoQueDisparaErro(): never {
    throw new Error("Erro");

}

funcaoQueDisparaErro();