//⠨⠇⠁ ⠍⠁⠞⠥⠗⠊⠞⠿ ⠙⠑ ⠇ ⠓⠕⠍⠍⠑ ⠑⠎⠞ ⠙ ⠁⠧⠕⠊⠗ ⠗⠑⠞⠗⠕⠥⠧⠿ ⠇⠑ ⠎⠿⠗⠊⠑⠥⠭ ⠟⠥ ⠕⠝ ⠁⠧⠁⠊⠞ ⠁⠥ ⠚⠑⠥ ⠟⠥⠁⠝⠙ ⠕⠝ ⠿⠞⠁⠊⠞ ⠑⠝⠋⠁⠝⠞
// Clones an array (mapping a function to it optionally)
//⠨⠁⠇⠁⠊⠝ ⠨⠙⠁⠍⠁⠎⠊⠕ ⠨⠇⠁ ⠨⠓⠕⠗⠙⠑ ⠙⠥ ⠨⠉⠕⠝⠞⠗⠑⠧⠑⠝⠞

function double(arr) {
  return Array.from(arguments, function(elem) {
    return elem * 2;
  });
}

var result = double(1, 2, 3, 4);
// prints [2, 4, 6, 8]
console.log(result);