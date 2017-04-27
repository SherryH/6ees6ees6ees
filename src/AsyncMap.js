/*Implement the function asyncMap:

asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
Each of the tasks takes a separate callback and invokes that callback when complete.

The callback passed to asyncMap is then performed once on the array of results of the callbacks of the tasks.

The order of these results should be the same as the order of the tasks.
It is important to note that this is not the order in which the tasks return,
but the order in which they are passed to asyncMap.

Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
on the results array.

Example:

asyncMap([
  function(cb){
    setTimeout(function(){
      cb('one');
    }, 200);
  },
  function(cb){
    setTimeout(function(){
      cb('two');
    }, 100);
  }
 ],
  function(results){
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results); // ['one', 'two']
 });
 */

 var asyncMap = function(tasks, callback) {
  //Your code here
  // tasks = [()=>fn(cb), ()=>fn2(cb)...]
  var answers = [];
  var i = 0;
  function asyncCall(i) {
    if(i === tasks.length) {
      return callback(answers);
    }
    tasks[i]((ans)=>{
      answers.push(ans);
      return asyncCall(i+1);
    });
  }
  return asyncCall(0);
};

/*
HRR answers of 4 implementations:
// Using an IIFE to manage scope of i variable
var asyncMap = function(tasks, callback){
  var resultsArray = [];
  var resultsCount = 0;

  for(var i = 0; i < tasks.length; i++){
    (function (i) {
      tasks[i](function (result) {
    // Putting the results into the results
    // array in the order they arrived in task array
        resultsArray[i] = result;
        resultsCount++;
    // Only apply final callback when we have
    // all the results
        if(resultsCount === tasks.length){
          callback(resultsArray);
        }
      });
    })(i);
  }
};

// Using a forEach to manage scope of i variable
var asyncMap = function(tasks, callback){
  var resultsArray = [];
  var resultsCount = 0;

  tasks.forEach(function(task, i){
    task(function (result) {
      resultsArray[i] = result;
      resultsCount++;
      if(resultsCount === tasks.length){
        callback(resultsArray);
      }
    });
  });
};

// Using let to manage scope of i
var asyncMap = function(tasks, callback){
  var resultsArray = [];
  var resultsCount = 0;

  for(let i = 0; i < tasks.length; i++){
    tasks[i](function (result) {
      resultsArray[i] = result;
      resultsCount++;
      if(resultsCount === tasks.length){
        callback(resultsArray);
      }
    });
  }
};

// Using promises
function promisify(asyncFn) {
  return new Promise(function(resolve, reject) {
  // We are simply passing 'resolve' as the callback to
  // the original async function - resolve will recieve
  // the final data
    asyncFn(resolve)
  })
}

var asyncMap = function(tasks, callback) {

  var pTasks = tasks.map(function(task) {
    promisify(task);
  });

  // Promise.all expects an array of promises
  Promise.all(pTasks)
  // and returns an array of the results in the same order
  .then(function(results) {
    callback(results);
  })
};

// Shortening the callbacks in the Promise version
var asyncMap = function(tasks, callback){
  var pTasks = tasks.map(promisify)
  Promise.all(pTasks)
  .then(callback)
};



*/




// asyncMap([
//   function(cb){
//     setTimeout(function(){
//       cb('one');
//     }, 200);
//   },
//   function(cb){
//     setTimeout(function(){
//       cb('two');
//     }, 100);
//   }
//  ],
//   function(results){
//     // the results array will equal ['one','two'] even though
//     // the second function had a shorter timeout.
//     console.log(results); // ['one', 'two']
//  });