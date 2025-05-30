function isInteiroPositivo(valor) {
  return Number.isInteger(valor) && valor > 0;
}

console.log(isInteiroPositivo(10));    // true
console.log(isInteiroPositivo(-5));    // false
console.log(isInteiroPositivo("10"));  // false 
console.log(isInteiroPositivo(10.5));  // false 
