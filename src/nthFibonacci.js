nthFibonacci = function(n) {
  //return Fibonacci number without recursion
  //in linear time complexity

  //recursion version O(n) = exponential


  //dynamic programming. O(n) is linear, Space(n) is linear
  //store the values for future use
  //find out the value when n=0, n=1
  var fibArr = [];
  fibArr[0] = 0;
  fibArr[1] = 1;

  for (var i=2; i<=n; i++) {
    fibArr[i] = fibArr[i-1]+fibArr[i-2];
  }
  return fibArr[n];
};


/*
// Recursion
// Exponential time complexity O(1.6^n)
var fibRecurs = function(n){
  return n < 2 ? n : fibRecurs(n-1) + fibRecurs(n-2);
};

// Global memoize
// Linear time complexity
// (Constant if we've already calculated up to this fib before)
// Linear space complexity
var fibMem = function(n){
  if(fibMem.mem[n]) return fibMem.mem[n];
  for(var i = fibMem.mem.length; i <= n; i++){
    fibMem.mem[i] = i < 2 ? i : fibMem.mem[i-2] + fibMem.mem[i-1];
  }
  return fibMem.mem[n];
};

fibMem.mem = [];

// Dynamic approach
// Linear Time
// Constant Space
var fibSpace = function(n){
  var mem = [0,1];
  for(; n > 1; n--){
    mem.push(mem.shift() +mem[0]);
  }
  return mem[n];

*/