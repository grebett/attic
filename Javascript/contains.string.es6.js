//⠨⠇⠁ ⠍⠁⠞⠥⠗⠊⠞⠿ ⠙⠑ ⠇ ⠓⠕⠍⠍⠑ ⠑⠎⠞ ⠙ ⠁⠧⠕⠊⠗ ⠗⠑⠞⠗⠕⠥⠧⠿ ⠇⠑ ⠎⠿⠗⠊⠑⠥⠭ ⠟⠥ ⠕⠝ ⠁⠧⠁⠊⠞ ⠁⠥ ⠚⠑⠥ ⠟⠥⠁⠝⠙ ⠕⠝ ⠿⠞⠁⠊⠞ ⠑⠝⠋⠁⠝⠞
// Checks if the string contains the current substring (starting at specified index if provided)
//⠨⠁⠇⠁⠊⠝ ⠨⠙⠁⠍⠁⠎⠊⠕ ⠨⠇⠁ ⠨⠓⠕⠗⠙⠑ ⠙⠥ ⠨⠉⠕⠝⠞⠗⠑⠧⠑⠝⠞

var str = 'Hello everybody, my name is Aurelio De Rosa.';
var result = str.contains('Aurelio');

// prints "true"
console.log(result);

result = str.contains('Hello', 10);

// prints "false"
console.log(result);