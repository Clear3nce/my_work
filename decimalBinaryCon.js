function decimalToBinary(decimal) {
  if (typeof decimal !== "number") {
    throw new Error("invalid input");
  }
  let binary = decimal.toString(2);
  return binary.padEnd(10, "0");
}

function binaryToDecimal(returnedV) {
  let sum = 0;
  let exponent = 0;
  for (let i = returnedV.length - 1; i >= 0; i--) {
    sum += parseInt(returnedV[i]) * 2 ** exponent;
    exponent++;
  }
  return sum;
}

function testBinaryConversion(decimalNumber) {
  return binaryToDecimal(decimalToBinary(decimalNumber));
}
