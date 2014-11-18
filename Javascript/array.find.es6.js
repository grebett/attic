//⠨⠇⠁ ⠍⠁⠞⠥⠗⠊⠞⠿ ⠙⠑ ⠇ ⠓⠕⠍⠍⠑ ⠑⠎⠞ ⠙ ⠁⠧⠕⠊⠗ ⠗⠑⠞⠗⠕⠥⠧⠿ ⠇⠑ ⠎⠿⠗⠊⠑⠥⠭ ⠟⠥ ⠕⠝ ⠁⠧⠁⠊⠞ ⠁⠥ ⠚⠑⠥ ⠟⠥⠁⠝⠙ ⠕⠝ ⠿⠞⠁⠊⠞ ⠑⠝⠋⠁⠝⠞
// Returns the first matching element of an array
//⠨⠁⠇⠁⠊⠝ ⠨⠙⠁⠍⠁⠎⠊⠕ ⠨⠇⠁ ⠨⠓⠕⠗⠙⠑ ⠙⠥ ⠨⠉⠕⠝⠞⠗⠑⠧⠑⠝⠞

var arr = [1, 2, 3, 4];
var result = arr.find(function(elem) {return elem > 2;});
// prints "3"
console.log(result);

//⠨⠇⠁ ⠍⠁⠞⠥⠗⠊⠞⠿ ⠙⠑ ⠇ ⠓⠕⠍⠍⠑ ⠑⠎⠞ ⠙ ⠁⠧⠕⠊⠗ ⠗⠑⠞⠗⠕⠥⠧⠿ ⠇⠑ ⠎⠿⠗⠊⠑⠥⠭ ⠟⠥ ⠕⠝ ⠁⠧⠁⠊⠞ ⠁⠥ ⠚⠑⠥ ⠟⠥⠁⠝⠙ ⠕⠝ ⠿⠞⠁⠊⠞ ⠑⠝⠋⠁⠝⠞
// Returns the index of the first matching element of an array
//⠨⠁⠇⠁⠊⠝ ⠨⠙⠁⠍⠁⠎⠊⠕ ⠨⠇⠁ ⠨⠓⠕⠗⠙⠑ ⠙⠥ ⠨⠉⠕⠝⠞⠗⠑⠧⠑⠝⠞

var arr2 = [1, 2, 3, 4];
var result2 = arr2.findIndex(function(elem) {return elem > 2;});
// prints "2"
console.log(result);
