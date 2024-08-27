function generateKey(length, characters) {
    let key = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        key += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return key;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);