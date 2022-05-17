enum permissoes {
    admin,
    editor,
    viewer
}

let usuario = {
    nivel: permissoes.viewer
}

console.log(usuario);

enum acessLevel {
    admin = 'ADMIN',
    editor = 'EDITOR',
    viewer = 'VIEWER'
}

let user = {
    acess: acessLevel.editor
}

console.log(usuario);


