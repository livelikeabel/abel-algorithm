// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(riddle) {
    // write your code in JavaScript (Node.js 8.9.4)
    riddle = riddle.split('');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    while (true) {
        const questionMarkIndex = riddle.indexOf('?');
        if (questionMarkIndex !== -1) {
            const before = riddle[questionMarkIndex - 1];
            const after = riddle[questionMarkIndex + 1];

            const _alphabet = alphabet.filter(a => a !== before && a !== after);
            riddle[questionMarkIndex] = _alphabet[Math.floor(Math.random() * _alphabet.length)];
        } else break;
    }

    return riddle.join('');
}


console.log(solution('ab?ac?'));
console.log(solution('rd?e?wg??'));
console.log(solution('????????'));
console.log(solution('????????????????????????????????????????????????????????????????????????'));
