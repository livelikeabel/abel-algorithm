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
    const monies = input[1].split(' ').map(v => parseInt(v));
    let answer = 1, count = 1;
    monies.forEach((m, i, arr) => {
        if (i + 1 == arr.length) return;
        if (m <= arr[i + 1]) {
            count++;
            if (answer < count) {
                answer = count
            }
        } else {
            count = 1;
        }
    });


    return answer;
}
