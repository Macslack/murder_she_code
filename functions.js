// function hello(){
//   return("hello, g5");
// }

// console.log(hello());

function mood(name, mood, weather) {
  console.log(name + " you are : " + mood + "and it is " + weather);
}

// mood("Callum", "SAD ", "sunny");

// function add(num1,num2){
//   return num1 + num2;
// }

// console.log("the return value is: " + add(1,1,8));

function sum() {
  let i;
  let total = 0;

  for(i = 0; i < arguments.length; i++){
    total += arguments[i];
  }
  return total;
}

// console.log(sum(1,2,3,4));

const hello = function(){
  return "Hello";
}

// console.log(hello);

const add = function add(num1,num2){
  return num1 + num2;
}

const wow = function(functionToInvoke){
  console.log(functionToInvoke(2,2));
}

console.log(wow(add));
