function printInFrame(list) {
  var list = list.split(' ');
  var longest = longestStr(list).length;
  var leftBorder = '* ';
  var rightBorder = '*';
  var border = repeat('*', longest + leftBorder.length + rightBorder.length);

  console.log(border);
  for (word of list) {
    console.log(leftBorder + word + repeat(' ', longest - word.length) + rightBorder);
  }
  console.log(border);
}

function repeat(str, times) {
  var result = str;

  for (var i = 0; i < times; i++) {
    result += str;
  }

  return result;
}

function longestStr(list) {
  var longest = list[0];
  // console.log(longest.length);

  for (var str of list) {
    if (str.length > longest.length) {
      longest = str;
    }
    // console.log(str.length);

  }

  return longest;
}

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');


