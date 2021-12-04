var num = 266219;
var numReorginized = num.toString();
var multiply = 1;

for (var index = 0; index < numReorginized.length; index++) {
    multiply = multiply * numReorginized[index];
}
console.log(multiply);

var multiplyPowed = multiply ** 3;
console.log("multiplyPowed", multiplyPowed);

var result = multiplyPowed.toString();
console.log(result.substr(0, 2));