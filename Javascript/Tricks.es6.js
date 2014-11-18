//⠨⠇⠁ ⠍⠁⠞⠥⠗⠊⠞⠿ ⠙⠑ ⠇ ⠓⠕⠍⠍⠑ ⠑⠎⠞ ⠙ ⠁⠧⠕⠊⠗ ⠗⠑⠞⠗⠕⠥⠧⠿ ⠇⠑ ⠎⠿⠗⠊⠑⠥⠭ ⠟⠥ ⠕⠝ ⠁⠧⠁⠊⠞ ⠁⠥ ⠚⠑⠥ ⠟⠥⠁⠝⠙ ⠕⠝ ⠿⠞⠁⠊⠞ ⠑⠝⠋⠁⠝⠞
// New object short cut: creates a {foo: foo, bar: bar} object.
//⠨⠁⠇⠁⠊⠝ ⠨⠙⠁⠍⠁⠎⠊⠕ ⠨⠇⠁ ⠨⠓⠕⠗⠙⠑ ⠙⠥ ⠨⠉⠕⠝⠞⠗⠑⠧⠑⠝⠞

var foo = 'Hello';
var bar = 'World';
var object = {foo, bar};

//⠨⠇⠁ ⠍⠁⠞⠥⠗⠊⠞⠿ ⠙⠑ ⠇ ⠓⠕⠍⠍⠑ ⠑⠎⠞ ⠙ ⠁⠧⠕⠊⠗ ⠗⠑⠞⠗⠕⠥⠧⠿ ⠇⠑ ⠎⠿⠗⠊⠑⠥⠭ ⠟⠥ ⠕⠝ ⠁⠧⠁⠊⠞ ⠁⠥ ⠚⠑⠥ ⠟⠥⠁⠝⠙ ⠕⠝ ⠿⠞⠁⠊⠞ ⠑⠝⠋⠁⠝⠞
// Multiple assignments
//⠨⠁⠇⠁⠊⠝ ⠨⠙⠁⠍⠁⠎⠊⠕ ⠨⠇⠁ ⠨⠓⠕⠗⠙⠑ ⠙⠥ ⠨⠉⠕⠝⠞⠗⠑⠧⠑⠝⠞

// Creating variables x and y from object coords
var {x, y} = { x: 0, y: 1 };

// Arrays work the same
var [left, right] = ['School', 'Work'];

// Oh, and we get to swap too!
[left, right] = [right, left];

function f() {
  return [1, 2];
}

var [x, y] = f();

