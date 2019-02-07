function average(list) {
  var sum = 0;

  for (var num of list) {
    sum += num;
  }

  return sum / list.length;

}

console.log(average([30, 5, 7]));
