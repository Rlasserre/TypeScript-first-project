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