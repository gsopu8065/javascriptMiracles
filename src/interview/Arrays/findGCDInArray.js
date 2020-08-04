//Euclidean_algorithm
const gcd = (a, b) => a === 0 ? b : gcd(b%a, a);

const findGcd = (arr) => arr.reduce(gcd, arr[0]);

console.log(findGcd([8,4,16]));