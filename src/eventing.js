var mixEvents = function(obj) {
  //Your code here
  var events = {};

  obj.trigger = function (event, ...args) {
    //Your code here
    if(events[event]){
      events[event].forEach((callback)=>{
        callback.apply(this, args);
      });

    }
  };

  // Register a callback to be fired on this event.
  obj.on = function (event, callback) {
    events[event] = events[event] || [];
    events[event].push(callback);
    console.log(events[event]);
  };
  return obj;
};