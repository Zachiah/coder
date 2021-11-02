// fibonacci is a function that takes an integer and returns true if the number is a fibonacci number and false if it is not.
const fibonacci = (n: number): boolean => {
    if (n < 0) {
        return false;
    }
    if (n === 0 || n === 1) {
        return true;
    }
    let a = 0;
    let b = 1;
    let c = 0;
    while (c < n) {
        c = a + b;
        a = b;
        b = c;
    }
    return c === n;
};

export default fibonacci;