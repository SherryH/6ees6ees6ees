/*
Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

Your function should return the common characters in the same order that they appear in the first argument. Do not return duplicate characters and ignore whitespace in your returned string.

*/

commonCharacters = function(string1, string2){
  var newS = '';
  for (var i = 0; i< string1.length; i++) {
    newS = (string2.indexOf(string1[i]) >= 0 && newS.indexOf(string1[i])<0)? newS.concat(string1[i]).trim():newS;
  }
  return newS;
};

/*
O(n)!

*/