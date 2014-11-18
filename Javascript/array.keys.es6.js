//⠨⠇⠁ ⠍⠁⠞⠥⠗⠊⠞⠿ ⠙⠑ ⠇ ⠓⠕⠍⠍⠑ ⠑⠎⠞ ⠙ ⠁⠧⠕⠊⠗ ⠗⠑⠞⠗⠕⠥⠧⠿ ⠇⠑ ⠎⠿⠗⠊⠑⠥⠭ ⠟⠥ ⠕⠝ ⠁⠧⠁⠊⠞ ⠁⠥ ⠚⠑⠥ ⠟⠥⠁⠝⠙ ⠕⠝ ⠿⠞⠁⠊⠞ ⠑⠝⠋⠁⠝⠞
// Returns an iterator (looking like a chained list) which runs through the keys of the array
//⠨⠁⠇⠁⠊⠝ ⠨⠙⠁⠍⠁⠎⠊⠕ ⠨⠇⠁ ⠨⠓⠕⠗⠙⠑ ⠙⠥ ⠨⠉⠕⠝⠞⠗⠑⠧⠑⠝⠞

var arr = [1, 2, 3, 4];
var iterator = arr.keys();

// prints "0, 1, 2, 3", one at a time, because the
// array contains four elements and these are their indexes
var index = iterator.next();
while(!index.done) {
  console.log(index.value);
  index = iterator.next();
}

//⠨⠇⠁ ⠍⠁⠞⠥⠗⠊⠞⠿ ⠙⠑ ⠇ ⠓⠕⠍⠍⠑ ⠑⠎⠞ ⠙ ⠁⠧⠕⠊⠗ ⠗⠑⠞⠗⠕⠥⠧⠿ ⠇⠑ ⠎⠿⠗⠊⠑⠥⠭ ⠟⠥ ⠕⠝ ⠁⠧⠁⠊⠞ ⠁⠥ ⠚⠑⠥ ⠟⠥⠁⠝⠙ ⠕⠝ ⠿⠞⠁⠊⠞ ⠑⠝⠋⠁⠝⠞
// Returns an iterator (looking like a chained list) which runs through the values of the array
//⠨⠁⠇⠁⠊⠝ ⠨⠙⠁⠍⠁⠎⠊⠕ ⠨⠇⠁ ⠨⠓⠕⠗⠙⠑ ⠙⠥ ⠨⠉⠕⠝⠞⠗⠑⠧⠑⠝⠞

var arr2 = [1, 2, 3, 4];
var iterator2 = arr.values();

// prints "1, 2, 3, 4", one at a time, because the
// array contains these four elements
var index2 = iterator.next();
while(!index2.done) {
  console.log(index2.value);
  index2 = iterator.next();
}