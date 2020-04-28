function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let isMinus;
    if (N < 0) {
        isMinus = true;
        N = Math.abs(N);
    }

    const nums = String(N).split('');
    const arr = new Array(nums.length + 1).fill(null);
    const nArr = arr.map((_, i) => {
        const newNums = [...nums];
        newNums.splice(i, 0, '5')
        return newNums;
    });
    const sortedArr = nArr.map(n => parseInt(n.join(''))).sort()
    return isMinus ? sortedArr.shift() * -1 : sortedArr.pop();
}

console.log(solution(268));
console.log(solution(670));
console.log(solution(0));
console.log(solution(-999));
console.log(solution(-8000));
console.log(solution(8000));

