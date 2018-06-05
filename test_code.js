var globalVariable = 99;

var separateFunction = function() {
  var separateA = 2;
};

var outerFunction = function() {
  var outerA = 1;

  var innerFunction = function() {
    console.log('outerA ', outerA);
    // 1
    console.log('globalVariable', globalVariable)
    // 99
    // console.log('separateA ', separateA);
    // not defin
  };

  innerFunction()
};

outerFunction();
