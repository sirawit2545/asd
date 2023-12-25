const numStr1 = "123456789";
const numStr2 = "53657687691428890";
const numStr3 = "1981023568910";


function missingDigits(numStr) {
  const allDigits = new Set("0123456789");
  const numSet = new Set(numStr);
  const missingDigitsSet = new Set([...allDigits].filter(digit => !numSet.has(digit)));

  if (missingDigitsSet.size === 0) {
    return `${numStr} has no missing digits`;
  } else {
    const missingDigitsStr = Array.from(missingDigitsSet).sort().join(", ");
    return `${numStr} Missing Digit = ${missingDigitsStr}`;
  }
}

console.log(missingDigits(numStr1));
console.log(missingDigits(numStr2));
console.log(missingDigits(numStr3));
