/*If the first element is greater than the second element, it swaps the two.
It then compares the second to the third, and the third to the fourth, and so on.
In this way, the largest values ‘bubble’ to the end of the array.
Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.*/
var bubbleSort = function(array) {
  //for each item in array, array[i]
  //if array[i]<array[i+1] (comparator(array[i],array[i+1])<0)
  //  nothing happens, move on sorting next item
  //else if array[0]>array[1] (comparator(array[i],array[i+1])>0)
  //  swap position, by setting temp = array[i]
  //  array[i]=array[i+1]
  //  array[i+1]=temp
  //  then compare with the next item until the end of array

  //optimisation: record the position of the last swap
  //items after last swap are already sorted, do not need to be sorted again

  var temp, newn;
  var n = array.length -1;
  //for (var j = 0; j<array.length;j++){
  while (n > 0){
    newn = 0; //if everything is sorted, newn = 0 by default
    for (var i = 0; i<array.length; i++){
      if (comparator(array[i],array[i+1]) > 0){
        temp = array[i];
        array[i]=array[i+1];
        array[i+1]=temp;
        newn = i+1;
      }
    }
    n = newn;
  }

  return array;

  function comparator(a,b){
    return a-b;
  }
};

/*
// Here we are stopping our inner loop
// one index earlier after each pass
// BUT time complexity is still O(n^2)
var bubbleSort = function (array) {
  var len = array.length;

  for (var i = 0; i < len - 1; i++) {
    var swaps = false;

    for(var j = 0; i < len-1-i; j++) {
      if (array[j] < array[j + 1]) {
         swaps = true;
         swap(j, j + 1, array);
      }
    }

    if (!swaps) { break; }
  };

  return array;
};
// "Normal" swapping function
var swap = function (i, j, array) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
};

// Swap with destructuring
var swap = function (i, j, array) {
  [array[i], array[j]] = [array[j], array[i]];
  return array;
};

// Bitwise swap using exclusive or
// The XOR operator converts both numbers to binary
// and then checks the bits at corresponding locations
// returning a 1 for that location if EXACTLY 1 bit equals 1
// and a 0 otherwise
var swap = function (i, j, array) {
  array[i] ^= array[j];
  array[j] ^= array[i];
  array[i] ^= array[j];
  return array;
};
// Examples:
// I = 1111                      K = 010010111 ^
// J = 0000                      L = 110101001

// I ^= J // I:1111, J:0000      K ^= L // K:100111110, L:110101001
// J ^= I // I:1111, J:1111      L ^= K // K:100111110, L:010010111
// I ^= J // I:0000, J:1111      K ^= L // K:110101001, L:010010111
*/

//After first for loop
//[3,2,1]
//[2,3,1]
//[2,1,3]
//need to start sorting from i = 0

//[2,1,3,1] start from 2 (i=0)
//[1,2,3,1] swap, 2@(i=1) no need for 2 to go thru the rest of for loop, move on to (i+1)
//
//[1,2,3,1]
