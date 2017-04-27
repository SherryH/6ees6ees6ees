var Node = function(value) {
  this.value = value;
  this.next = null;
};

var LinkedList = function (initialValue) {
  // Write your code here Pseudoclassical pattern
  //each head and tail is a node, with properties: node.value, node.next
  this.head = null;
  this.tail = null;
  var n = new Node(initialValue);
  if (initialValue) {
    this.head = n;
    this.tail = n;
  }
};

LinkedList.prototype.addToTail = function(value) {
  var n = new Node(value);
  //move the previous tail's pointer to the new tail
  if(!this.head) {
    this.head = n;
  } else if (this.head === this.tail) {
    this.head.next = n;
  } else {
    this.tail.next = n;
  }
  this.tail = n;
};
LinkedList.prototype.removeHead = function() {
  this.head = this.head.next;
  if(!this.head) {
    this.tail = null;
  }
};
LinkedList.prototype.contains = function(value) {
  //if that value is present in one of the nodes, return true
  var n = this.head;
  var val;
  while (n){
     val = n.value;
    if(val===value) {
      return true;
    }
    n = n.next;
  }
  return false;
};

