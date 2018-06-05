// var myName = "Callum";
//
// if (myName === "Callum"){
//   console.log("Hello " + myName);
// }
//
// var counter = -1;
// if (counter > 0){
//   console.log("The counter is greater than zero");
// } else if (counter < 0) { "The counter is less than zero"
// } else { console.log("the counter is less than zero or equal");
// }
// var pet = "cat";
//
// switch (pet) {
//   case "cat":
//   console.log("Soft kitty warm kitty little ball of fur.");
//   break;
//   case "dog":
//   console.log("Who lets the dogs out?");
//   break;
//   default:
//   console.log("no pet :(");
// }
// 1 + 1 === 2 ? console.log("yay math!") : console.log("no bad maths");

// var pets =["dog", "cat", "hamster"];
//
// for (var i = 0; i < pets.length; i++){
//   console.log(pets[i]);
// }
//
// for (var pet of pets){
//   console.log(pet);
// }


var obj = {paul : 1, andrew : 2, liam : 3}

console.log(obj.paul);

for (var key in obj){
  console.log(obj[key]);
}

var counter = 0;

while (counter < 10) {
  console.log("loop" + counter);
  // counter = counter + 1
  counter++

}
