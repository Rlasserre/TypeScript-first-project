type User = {
    name: String;
    lastName: String;
    DateOfBirth: String;
    age?: Number; // a interrogação ? torna o campo opcional.
}

const Rafael: User = {
    name: 'Rafael',
    lastName: 'Lassere',
    DateOfBirth: '01/01/1981'
    //a falta de qualquer atributo, sem interrogação dará um erro.
}

/* Union types tem a função de ||, 
ele idinca que o type vai ser de um tipo ou de outro. */

type logLevel = 'info' | 'error' | 'debug';

function logMessage(message: string, level: logLevel) {
    console.log(`[${level} - ${message}]`);
}

logMessage('Uma mensagem info', 'error');
logMessage('Uma mensagem info', 'info');
logMessage('Uma mensagem info', 'debug');
logMessage('Uma mensagem info', 'aushSANDAJN');