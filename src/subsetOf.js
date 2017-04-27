//Make an array method that can return whether or not a context array is a subset of an input array. To simplify the problem, you can assume that both arrays will contain only strings.

Array.prototype.isSubsetOf = function(inputArr) {
  if (this.length===0) {
    return true;
  }
  //should return true if all of the elements in the first array are in the second
  for (var i =0; i< this.length; i++){
    if (inputArr.indexOf(this[i])===-1){
      return false;
    };
  }
  return true;
};