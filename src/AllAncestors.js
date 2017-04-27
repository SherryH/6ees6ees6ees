var Tree = function(){
  this.children = [];
  this.parent = null;
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
    child.parent = this;
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};



Tree.prototype.getAncestorPath = function(target) {
  if (this === target) {
    return [this];
  }
  for (var i=0; i< this.children.length;i++){
    //go thru the children,
    //check if that child is target
    // if (this.children[i] === target) {
    //   return [this, this.children[i]];
    // }
    //refactor using recursion for checking down branches
    var path = this.children[i].getAncestorPath(target);
    //concate the returned path from child
    if (path) {
      return [this].concat(path);
    }

  }
  return null;
};


Tree.prototype.getClosestCommonAncestor = function(child1, child2) {
  //if this === child1,2 , return this
  //use getAncestorPath
  var path1 = this.getAncestorPath(child1);
  var path2 = this.getAncestorPath(child2);
  //if either path1 or path2 are null, return null
  if (!path1 || !path2){ return null; }

  //find the common node across path1 and path2 furthest to right
  for(var i = path1.length-1;i>=0; i--){
    for (var j = path2.length-1; j>=0; j--) {
      if (path1[i]===path2[j]) {
        return path1[i];
      }
    }
  }
  return null;
};




/*
Tree.prototype.ancestorPath = function(target) {
  if (this === target) return [this];
  for (var i = 0; i < this.children.length; i++) {
    var pathFromChild =
      this.children[i].ancestorPath(target);
    if (pathFromChild) {
      return [this].concat(pathFromChild);
    }
  }
  // If no subtree contains the target:
  return null;
};

Tree.prototype.closestCommonAncestor =
  function(child1, child2) {
    var path1 = this.ancestorPath(child1);
    var path2 = this.ancestorPath(child2);
    // If either of the children can’t be found:
    if (!path1 || !path2) return null;
    // We know this is a common ancestor
    var closestAncestor = this;
    // path1[i] && path2[i] holds when i is less
    // than the lengths of both path1 and path2
    for (var i = 0; path1[i] && path2[i]; i++) {
      if (path1[i] === path2[i]) {
        closestAncestor = path1[i];
      }
    }
*/


// My attempt to resolve this by adding parent state, but challenge app doesnt accept
// Tree.prototype.getClosestCommonAncestor = function(tree1, tree2){
//   // TODO: implement me!
//   var parent;
//   if (tree1.isDescendant(tree2)) {
//     return tree1;
//   } else {
//     // tree1.parent.isDescendant(tree2);
//     parent = tree1.parent;
//     while (!parent.isDescendant(tree2)){
//       parent = parent.parent;
//       if(parent===null) {
//         return null;
//       }
//     }
//     return parent;
//   }
// };

// Tree.prototype.getAncestorPath = function(child){
//   // TODO: implement me!
//   var path = [];
//   //check if the child is a descendant of the tree
//   if (this.isDescendant(child)){
//     //return the oldest to yongest tree obj in the Path
//     while (child !==null){
//       path.unshift(child);
//       child = child.parent;
//     }
//     console.log(path);
//   }else {
//     return null; //the child is not in the ancestor path
//   }
// };

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
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

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};

      var root = new Tree();

      var left = new Tree();
      root.addChild(left);

      var right1 = new Tree();
      root.addChild(right1);

      var right2 = new Tree();
      right1.addChild(right2);

      var right3 = new Tree();
      right1.addChild(right3);
      var right4 = new Tree();
      right3.addChild(right4);
      var a = root.getClosestCommonAncestor(left, right1);
      console.log(a===root);

      var trunk = new Tree();
      var leaf1 = new Tree();
      var leaf2 = new Tree();
      trunk.addChild(leaf1);
      var commonAncestor = trunk.getClosestCommonAncestor(leaf1, leaf2);
      console.log('commonAncestor',commonAncestor);


      var grandma = new Tree();
      var mom = new Tree();
      var auntElaine = new Tree();
      var me = new Tree();
      grandma.addChild(mom);
      grandma.addChild(auntElaine);
      mom.addChild(me);
      //var path = grandma.getAncestorPath(me);
      //console.log(path);