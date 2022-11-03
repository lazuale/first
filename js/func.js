function getMathResult(a, b) {
    let str = '---';
    let prostr = a;

    if (typeof(b) != "number" || typeof(b) <= 0) {
        return console.log(a);
    } else {
        for (let i = 2; i <= b; i++) {
            prostr = prostr + str + a * i;
        }
        return console.log(prostr);
    }
}

getMathResult(15, 5);