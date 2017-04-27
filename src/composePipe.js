/*
var greet = function(name){ return 'hi: ' + name;}
var exclaim = function(statement) { return statement.toUpperCase() + '!';}

var welcome = compose(greet, exclaim);
welcome('phillip'); //=> 'hi: PHILLIP!'

*/

//  Impl 1, work for single value
// var compose = function(...funcArr){
//   //input functions: functions
//   //ouput: curried function
//   return function (a) {
//     for (var i = funcArr.length -1; i >=0; i--) {
//       a = funcArr[i].call(null, a);
//     }
//     return a;
//   };
// };

//Impl 2, work for multiple values
// var compose = function(...funcArr){
//   return function(...val) {
//     var v = funcArr[funcArr.length -1].apply(this, val);
//     for (var i = funcArr.length -2; i>=0; i--){
//       v = funcArr[i](v);
//     }
//     return v;
//   };
// };

//Impl 3, reduce work for single value
// var compose = function(...funcArr){
//   return function (val) {
//     return funcArr.reduceRight((preVal, curFunc)=>{
//       return curFunc(preVal);
//     }, val);
//   };
// };

//Impl 4, reduce work for multiple values
var compose = function(...funcArr){
  return function (...val) {
    return funcArr.slice(0,-1).reduceRight((preVal, curFunc)=>{
      return curFunc(preVal);
    }, funcArr[funcArr.length-1].apply(this, val));
  };
};

/*
var add2 = function(number){ return number + 2; }
var multiplyBy3 = function(number){ return number * 3; }

pipe(add2, multiplyBy3)(5) //=> 21
pipe(add2, multiplyBy3, multiplyBy3)(5) //=> 63
*/

// Imple 1
// var pipe = function(...funcArr){
//   //Your code here
//   //Input: functions
//   //Output: curried function
//   return function(a) {
//     funcArr.forEach((func)=>{
//       a = func(a);
//     });
//     return a;
//   };
// };

//reduce work for multiple values
var pipe = function(firstFunc, ...funcArr){
  return function(...val){
    return funcArr.reduce((preVal, curFunc)=>{
      return curFunc(preVal);
    },firstFunc.apply(this,val));
  };
};

//ES6 fun

// Fun with es6
var pipe = (first, ...rest)=>{
  return (...innerArgs) =>{
    return rest.reduce((preVal, curFunc)=>{
      return curFunc(preVal);
    }, first(...innerArgs));
  };
};
//Fun with ES6, 2nd version, remove '{return}'
var pipe = (first, ...rest)=>
  (...innerArgs) =>
    rest.reduce((preVal, curFunc)=>
      curFunc(preVal)
    , first(...innerArgs));

//Fun with ES6, 3rd version, 1line code
var pipe = (first, ...rest)=>  (...innerArgs) =>rest.reduce((preVal, curFunc)=>curFunc(preVal), first(...innerArgs));

