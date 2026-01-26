const Car = require("./car-array");

let result = Car.addOne("Corolla","Red",3);
console.log(Car.result);
result = Car.addOne("Civic","Blue",2);
console.log(Car.result)

console.log("getAll called:",Car.getAll());

console.log("findById called:",Car.findById(1));

console.log("updateOneById called",Car.updateOneById(1,{age:1,colour:"black"}));
console.log("findById called after item update:",Car.findById(1));

console.log("deleteOneById called:", Car.deleteOneById(1));
console.log("findById called after item deletion:",Car.findById(1));
