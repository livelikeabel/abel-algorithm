function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    while (true) {
        const targets = ['AB', 'BA', 'CD', 'DC'];
        targets.forEach(target => {
            S = S.replace(target, '');
        });
        const isHave = targets.some(t => S.includes(t));
        if (!isHave) break;
    }
    return S
}

solution('CBACD');
solution('CABABD');
solution('CABCABABDCABABDCAQWEIOBABDABDCABABDCACABABDBABD');
