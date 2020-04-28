// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    class NObj {
        constructor(n) {
            this.n = n;
        }

        value() {
            return this.n;
        }

    }

    return A.map(n => new NObj(n));
}

// console.log(solution([4, 2]));
const a = solution([4, 2]);
console.log(a[0]);
console.log(a[0].value === a[0].value)
console.log(a[0].hasOwnProperty('value'))

console.log(solution([-9007, 991]));
