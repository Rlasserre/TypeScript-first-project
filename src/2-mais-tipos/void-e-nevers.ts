function principal() {
    console.log('executando');
}

principal();

//Type VOID usado para funções que não tem retorno explicito.

function funcaoQueNuncaRetorna(): never {
    while (true) {

    }
}

funcaoQueNuncaRetorna();