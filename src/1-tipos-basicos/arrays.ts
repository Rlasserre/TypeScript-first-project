let cats: string[] = [
    'Lora',
    'Thor'
];

//cats.push(5); Error, o array só aceitara Strings.

cats.push('Amendoim');

function showCats(gatos: string[]) {
    return `Os gatos são ${gatos.join(', ')}`
}

showCats(cats); 