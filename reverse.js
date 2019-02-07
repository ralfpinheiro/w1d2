var input = process.argv.splice(2);

if (input)
  console.log(reverse(input));

function reverse(original) {
  return original.reverse().join(' ');
}

