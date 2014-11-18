// prints "true"
console.log(Number.isInteger(19));

// prints "false"
console.log(Number.isInteger(3.5));

// prints "false"
console.log(Number.isInteger([1, 2, 3]));


// prints "true"
console.log(Number.isSafeInteger(5));

// prints "false"
console.log(Number.isSafeInteger('19'));

// prints "false"
console.log(Number.isSafeInteger(Math.pow(2, 53)));

// prints "true"
console.log(Number.isSafeInteger(Math.pow(2, 53) - 1));


// prints "true"
console.log(Number.isFinite(10));

// prints "true"
console.log(Number.isFinite(Number.MAX_VALUE));

// prints "false"
console.log(Number.isFinite(null));

// prints "false"
console.log(Number.isFinite([]));


// prints "true"
console.log(Number.isNaN(0/0));

// prints "true"
console.log(Number.isNaN(NaN));

// prints "false"
console.log(Number.isNaN(undefined));

// prints "false"
console.log(Number.isNaN({prop: 'value'}));