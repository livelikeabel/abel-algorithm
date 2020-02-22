const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line)
}).on('close', function () {
    console.log(func(input));
    process.exit();
});


function func(input) {
    const queryNum = input[0];
    const answerArr = [];

    for (let i = 1; i <= queryNum; i++) {
        let [n, k] = input[i].split(' ');
        let count = 0;

        while (n > 0) {
            if (n % k === 0) {
                n = n / k;
            } else {
                n--;
            }
            count++;
        }
        answerArr.push(count);
    }

    return answerArr.reduce((acc, n)=> acc + '\n' + n);
}
