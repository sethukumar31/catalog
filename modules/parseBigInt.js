const digits = '0123456789abcdefghijklmnopqrstuvwxyz';

function parseBigInt(str, base) {
    let result = 0n;
    const baseBigInt = BigInt(base);
    str = str.toLowerCase();

    for (const c of str) {
        const d = BigInt(digits.indexOf(c));
        if (d < 0n || d >= baseBigInt) {
            throw new Error(`Invalid character ${c} in value ${str} for base ${base}`);
        }
        result = result * baseBigInt + d;
    }
    return result;
}

module.exports = parseBigInt;
