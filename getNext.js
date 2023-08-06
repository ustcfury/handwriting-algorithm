function getNext() {
  let num = this.num || 2;
  while (!isPrime(num)) {
    num++;
  }
  this.num = num + 1;
  return num;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(getNext());
console.log(getNext());
console.log(getNext());