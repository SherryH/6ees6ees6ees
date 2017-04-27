var Stack = function() {
  //LIFO
  var storage = [];
  //var length = 0;

  this.push = function(value){
    storage.push(value);
    //storage[length++] = value;
  };

  this.pop = function(){
    return (storage.pop());
    // var value = storage[--length];
    // delete storage[length];
    // return value;
  };

  this.size = function(){
    return storage.length;
  };
};

var Queue = function() {
  //FIFO

  //after enqueue, item added to inbox inbox.push
  //dequeue, push all items to the outbox, and pop the last item in outbox

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(value){
    inbox.push(value);
  };

  this.dequeue = function(){
    var length = inbox.size();
    for (var i = 0; i < length; i++) {
      outbox.push(inbox.pop());
    }
    var val = outbox.pop();
    length = outbox.size();
    for (var j = 0; j < length; j++) {
      inbox.push(outbox.pop());
    }
    return val;
    //if outbox.size() === 0
    // while inbox.size()!== 0
    //   dump inbox content to outbox
  };

  this.size = function(){
    return inbox.size();
  };
};