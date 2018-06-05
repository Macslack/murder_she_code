// const person = {
//   name: "Guybrush",
//   age: 32,
//   weapon: "cutlass",
//   isAwesome: true,
//   talk: function(){
//     console.log("Shiver me timbers!");
//   },
//   sayName: function(){
//     console.log("Hi, my name is " + this.name);
//   }
// };
//
// console.log(person.name);
//
// person.talk();
//
// person.sayName();

// const bear = {
//   type: "polar",
//   name: "Callum",
//   belly: [],
//   eat: function(food){
//     bear.belly.push(food);
//   }
//
// };
//
// bear.eat("fish");
//
// console.log(bear.belly);

var murderer = 'Rick';

var outerFunction = function() {
  var murderer = 'Morty';

  var innerFunction = function() {
    murderer = 'Jerry';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);
