// function with single parameter from the command line
// parameter = number
// rolls six sided dice

var diceSides = [1, 2, 3, 4, 5, 6];
var temp = roller(process.argv.slice(2));

function roller(temp) {
    var array = [];
    for (i = 0; i < temp; i++) {
        var result = diceSides[Math.floor(Math.random() * diceSides.length)];
        array.push(result);
    }
    console.log("Rolled " + temp + " dice: " + array);
}