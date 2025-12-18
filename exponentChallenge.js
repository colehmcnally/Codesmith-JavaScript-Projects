function pow(base, exponent) {
    if (exponent === 0) { // base case: if exponent is zero, return one
        return 1;
    }
    return base * pow(base, exponent - 1); // return base number * the recursive call with the reduced exponent value passed in

}

console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243