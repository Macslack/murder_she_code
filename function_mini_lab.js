function name(name1, name2){
  return "Hey I am " + name1 + " " + name2
}

console.log(name("Callum", "Mackenzie"));

function multiply(num1, num2){
  return num1 * num2
}

console.log(multiply(2,2));

namesArray = ["callum", "alan", "tom"]

 function arrayFunction(array1){
  return array1[0];
 }

 console.log(arrayFunction(namesArray));

const animals = ["cows", "pig", "chicken"];
const farm = [];

const addAnimalsToFarm = function(){
  for (let i = 0; i < animals.length; i++){
    farm.push(animals[i]);
  }
}
addAnimalsToFarm();

console.log(farm);

const printNames = function(names){
  console.log(names);
}

printNames(["Callum", "Alan"])
