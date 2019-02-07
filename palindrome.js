function isPalindrome(str) {
  var noSpaces = str.split(" ").join("").toLowerCase();
  // console.log("noSpaces is " + noSpaces);
  var mid = Math.floor(noSpaces.length / 2);
  // console.log("mid is " + mid);
  var last = noSpaces.length - 1;
  // console.log("last is " + last);


  for (var i = 0; i < mid; i++) {
    if (noSpaces[i] !== noSpaces[last - i]){
      // console.log('noSpaces[i]:', noSpaces[i]);
      // console.log('noSpaces[last - i]:', noSpaces[last - i]);
      return false;
    }
  }
  return true;
}
// Test driver code. These should all log true.
console.log(isPalindrome('p') === true);
console.log(isPalindrome('foo') === false);
// console.log('racecar return value:', isPalindrome('racecar'));
console.log(isPalindrome('racecar') === true);
console.log(isPalindrome('Kayak') === true);
console.log(isPalindrome('a santa at NASA') === true);
console.log(isPalindrome('live without evil') === false);
console.log(isPalindrome('just some random words') === false);