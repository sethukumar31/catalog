function gcd(a, b) {
    a = a < 0n ? -a : a;
    b = b < 0n ? -b : b;

    while (b !== 0n) {
        const t = b;
        b = a % b;
        a = t;
    }
    return a;
}

module.exports = gcd;
