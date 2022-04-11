function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admion') {
            getAdmins.push(key);
        }
    }
    return admins;
}

const usuarios = new new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'User');
usuarios.set('Jorge', 'Usuer');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios));