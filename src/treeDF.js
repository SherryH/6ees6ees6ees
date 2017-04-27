/*
Implement a depth-first method on a tree class.

DFSelect accepts a filter function, calls that function on each of the nodes in Depth First order, and returns a flat array of node values of the tree for which the filter returns true.
Example:

var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);

root1.DFSelect(function (value, depth) {
  return value % 2 === 1;
}) //=> [1, 5, 3, 7]

root1.DFSelect(function (value, depth) {
  return depth === 1;
}) //=> [2, 3]
*/
var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.DFSelect = function(filter) {
  //filter accepts value and depth as argument
  //depth first traverse thru the tree
  //pass the (value,depth) to filter as we go
  //need to keep track of the depth as we recurse
  /*{
    '0':[1],
    '1':[2,3],
    '2':[4,5,6,7]
  }*/
  //filter(value, depth)
  var results = [];
  function traverseTree(node, depth) {
    if (filter(node.value, depth)){
      results.push(node.value);
    }
    for (var i= 0; i < node.children.length; i++) {
      traverseTree(node.children[i], depth+1);
    }
  }
  traverseTree(this,0);
  return results;
};

Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
