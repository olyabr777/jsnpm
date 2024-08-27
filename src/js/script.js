function padString(str, length, char, addLeft = false) {
    if (typeof str !== 'string') return 'Помилка: перший аргумент повинен бути рядком';
    if (typeof length !== 'number') return 'Помилка: другий аргумент повинен бути числом';
    if (typeof char !== 'string' || char.length !== 1) return 'Помилка: третій аргумент повинен бути рядком довжиною 1 символ';

    if (str.length >= length) return str.substr(0, length);

    const padLength = length - str.length;
    const padding = char.repeat(padLength);

    return addLeft ? padding + str : str + padding;
}

// Приклади використання:
console.log(padString('hello', 8, '*')); 
console.log(padString('hello', 6, '*', false)); 
console.log(padString('hello', 2));
console.log(padString('hello', 10, '!', true)); 
console.log(padString('hello', 10, '!')); 