// coding challenge 2: string transformation

function transformString(input) {
    let result = '';
    let asciiResult = '';

    if (input.length % 3 === 0 && input.length % 5!== 0) {
        result = input.split('').reverse().join('');
    } else if (input.length % 5 === 0 && input.length % 3!== 0) {
        asciiResultResult = input.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (input.length % 15 === 0) {
        result = input.split('').reverse().join('');
        asciiResult = result.split('').map(char => char.charCodeAt(0)).join(' ');
        return `The reverse is '${result}' and asciicode is '${asciiResult}'`;
    } else {
        result = input;
    }
    
    return result;
}


console.log(transformString("Hamburger"));
console.log(transformString("Pizza"));
console.log(transformString("Chocolate Chip Cookie"));
console.log(transformString("I want 15 chars"));