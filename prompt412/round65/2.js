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
    const bar = input[1].split(' ');
    const lastOne = bar.lastIndexOf('1');
    const data = bar.reduce((acc, v, i) => {
        if (v === '1' && !acc.isStart) {
            acc.isStart = true;
            acc.zeroSection++;
        } else if (i === lastOne) {
            acc.isStart = false;
        } else if (v === '1' && acc.isStart) {
            acc.zeroSection++;
        } else if (v === '0' && acc.isStart) {
            if (acc[acc.zeroSection]) {
                acc[acc.zeroSection] += 1
            } else {
                acc[acc.zeroSection] = 1
            }
        }
        return acc
    }, {
        isStart: false,
        zeroSection: 0
    });

    if(data.zeroSection === 1) return 1;

    const tempArr = [];
    for (let i = 1; i <= data.zeroSection; i++) {
        tempArr.push(data[i] + 1);
    }

    return tempArr.reduce((acc, v) => acc * v);
}
