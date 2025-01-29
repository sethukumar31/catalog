const parseBigInt = require('./parseBigInt');
const gcd = require('./gcd');

function computeSecret(input) {
    const keys = input.keys;
    const k = keys.k;

    const points = [];
    for (const key of Object.keys(input)) {
        if (key === 'keys') continue;
        const x = parseInt(key, 10);
        const entry = input[key];
        const base = parseInt(entry.base, 10);
        const valueStr = entry.value;
        const y = parseBigInt(valueStr, base);
        points.push({ x, y });
    }

    points.sort((a, b) => a.x - b.x);
    const selectedPoints = points.slice(0, k);

    let sumNum = 0n;
    let sumDen = 1n;

    for (let i = 0; i < k; i++) {
        const xi = selectedPoints[i].x;
        const yi = selectedPoints[i].y;

        let productNumerator = 1n;
        let productDenominator = 1n;

        for (let j = 0; j < k; j++) {
            if (j === i) continue;
            const xj = selectedPoints[j].x;
            productNumerator *= BigInt(-xj);
            productDenominator *= BigInt(xi - xj);
        }

        const termNumerator = yi * productNumerator;
        const termDenominator = productDenominator;

        if (termDenominator === 0n) {
            throw new Error('Division by zero in term denominator');
        }

        const newNum = sumNum * termDenominator + termNumerator * sumDen;
        const newDen = sumDen * termDenominator;

        const commonGCD = gcd(newNum, newDen);
        sumNum = newNum / commonGCD;
        sumDen = newDen / commonGCD;

        if (sumDen < 0n) {
            sumNum *= -1n;
            sumDen *= -1n;
        }
    }

    if (sumDen !== 1n) {
        throw new Error(`Sum denominator is not 1: ${sumDen}`);
    }

    return sumNum.toString();
}

module.exports = computeSecret;

