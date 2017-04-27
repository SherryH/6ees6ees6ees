deepEquals = function(a, b){
//check if a ,b objects are deep equal
var result = true;
  if(Array.isArray(a)!==Array.isArray(b)){
    return false;
  }
  if (Object.keys(a).length === 0 && Object.keys(b).length === 0){
    result = true;
  }
  if (Object.keys(a).length !== Object.keys(b).length){
    result = false;
  }
  for (var prop in a) {
    if(b.hasOwnProperty(prop)){
      if(typeof a[prop] === 'object'){
        result = result && deepEquals(a[prop],b[prop]);
      } else {
        if(a[prop] !== b[prop]){
          result = false;
        }
      }
    }else{
      result = false;
    }
  }
  return result;
};