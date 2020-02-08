const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line)
}).on('close', function () {
    console.log(lineLandMail(input));
    process.exit();
});


function lineLandMail(input) {
    const cityLocations = input[1].split(' ').map(i => Number(i));

    let answer = '';

    cityLocations.forEach((cl, i, cls) => {
        let min, max;
        if (i == 0) {
            min = Math.abs(cl) + cls[i + 1];
            max = Math.abs(cl) + cls[cls.length - 1];
        } else if (i == cls.length - 1) {
            min = cl - cls[i - 1];
            max = cl - cls[0];
        } else {
            let leftAbs = Math.abs(cls[i - 1] - cl);
            let rightAbs = Math.abs(cls[i + 1] - cl);
            min = leftAbs <= rightAbs ? leftAbs : rightAbs;

            let firstAbs = Math.abs(cls[0] - cl);
            let lastAbs = Math.abs(cls[cls.length - 1] - cl);
            max = firstAbs >= lastAbs ? firstAbs : lastAbs;
        }

        answer += `${min} ${max}\n`
    });

    return answer.trim()
}
