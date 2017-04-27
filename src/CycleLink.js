function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

var hasCycle = function(linkedList){
  //Your beautiful code here
  //linkedlist is the head
  // go thru all the nodes in the linkedList
  // if the there is a repeat on any 2 nodes in the list
  // or if linkedList.next never === null
  // there is a cycle!
  var hasACycle = false;
  var linkMap = {};

  //loop through linkedList
  while (linkedList.next!==null){
    // linkMap['A'] = Node('A')
    // if this value has been saved in the map before
    if (linkMap[linkedList.value]!== undefined){
      if(linkMap[linkedList.value]===linkedList){
        hasACycle = true;
        break;
      }
    }
    linkMap[linkedList.value] = linkedList;

    linkedList = linkedList.next;
  }
  return hasACycle;
  //create an object to store the key and value = value in Node

};




// Solution code

// Using Floyd Algorithm
var hasCycle = function(linkedList){
// Both pointers start at the head of the list
var fast = linkedList;
var slow = linkedList;
// pause will alternate between true and false
var pause = false;

// Assigning fast to be the next item, and checking
// if that next item exists in one line
while (fast = fast.next) {
  // If the fast pointer catches the slow pointer
  // we have a cycle
  if (fast === slow) {
  return true;
  }
  // Make sure the slow pointer only moves
  // half of the time
  if (pause) {
  slow = slow.next;
  }
  // Alternate the pause variable
  pause = !pause;
}
 // If the while loop terminated, the fast pointer
 // reached the end of the list and there is no cycle
