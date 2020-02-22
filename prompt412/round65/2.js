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
    const barLength = input[0];
    const bar = input[1];
    console.log(bar);

    return '';
}
