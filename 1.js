function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let a = 1;
    let b = N - a;

    while (true) {
        const zeroIndex = String(b).split('').indexOf('0');
        if (zeroIndex !== -1) {
            n = Math.pow(10, zeroIndex);
            a += n;
            b -= n;
        } else break;
    }

    return [a, b]
}

console.log(solution(1040));
console.log(solution(2));
console.log(solution(500000));
