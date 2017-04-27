  var makeHashTable = function(){
    var table = {};
    var storage = [];
    var storageLimit = 1000;

    table.insert = function(key, value){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      storage[index] = storage[index] || [];
      //storage[index] is an bucket array
      //the key value pairs are saved there as tuples
      storage[index].push([key,value]);
    };

    table.retrieve = function(key){
      //given key and storageLimite, use hashtable to find the index
      //from index, loop through the bucket array to find the value from key
      var index = getIndexBelowMaxForKey(key, storageLimit);
      var bucket = storage[index];
      var value;
      if(!bucket) {
        return undefined;
      } else {
        bucket.forEach((tuple)=>{
          (tuple[0]===key) && (value = tuple[1]);
        });
      }
      return value;
    };

    table.remove = function(key){
      //remove the tuple from the bucket
      var index = getIndexBelowMaxForKey(key, storageLimit);
      //from index, find the bucket
      var bucket = storage[index];

      for (var i =0; i< bucket.length; i++) {
        if (bucket[i][0]===key) {
          delete storage[index][i];
        }
      }
    };
    return table;
  };
 var getIndexBelowMaxForKey = function(str, max){
   var hash = 0;
   for (var i = 0; i < str.length; i++) {
     hash = (hash<<5) + hash + str.charCodeAt(i);
     hash = hash & hash; // Convert to 32bit integer
     hash = Math.abs(hash);
   }
   return hash % max;
 };
