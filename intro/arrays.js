const guitars = ["fender", "gibson"];
guitars.push("gretsch");

console.log("guitars: ", guitars);

console.log(guitars[0]);
const lastGuitar = guitars.pop();
console.log(guitars[guitars.length - 1]);
guitars.splice(1, 1);
guitars[0] = "guitar";
console.log(guitars);
