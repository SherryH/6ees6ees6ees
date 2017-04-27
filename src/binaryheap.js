function BinaryHeap () {
  this._heap = [];
  // this compare function will result in a minHeap, use it to make comparisons between nodes in your solution
  this._compare = function (i, j) { return i < j; };
}
// This function works just fine and shouldn't be modified
BinaryHeap.prototype.getRoot = function () {
  return this._heap[0];
};
//logarithmic time
BinaryHeap.prototype.insert = function (value) {
  // TODO: Your code here
  //insert function always insert to the last node
  //  this._heap[this._heap.length]
  //compare value with parent index: this._compare(cV,pV)
  //  parentIndex = Math.floor( (index - 1) / 2 )
  //while the parent index is not 0
  //  if child value is smaller than pV, swap
  this._heap[this._heap.length] = value;
  var ind = this._heap.length - 1;
  var p_ind = Math.floor( (ind - 1) / 2 );
  var cV, pV, temp;
  var comparing = true;
  while (comparing) {
    cV = this._heap[ind];
    pV = this._heap[p_ind];
    // console.log('ind cV',ind,cV);
    // console.log('p_ind pV',p_ind,pV);
    if(this._compare(cV, pV) && ind > 0){
      temp = cV;
      this._heap[ind] = pV;
      this._heap[p_ind] = temp;
      ind = p_ind;
      p_ind = Math.floor( (ind - 1) / 2 );
    } else {
      comparing = false;
    }
  }
};
//logrithmic time
BinaryHeap.prototype.removeRoot = function () {
  // TODO: Your code here
  //make the last value to be root, this._heap[0] = this._heap[this._heap.length-1]
  //compare with both children. swap if d > 0
  //childrenIndices = [index * 2 + 1, index * 2 + 2]
  // while loop starts
  //  compare with cA, dA = p - cA
  //  compare with cB, dB = p - cB
  //  pick the biggest d,
  //  if (dA > dB && dA > 0) swap p and cA. update p_ind
  //  else if (dB > dA && dB > 0) swap p and cB. update p_ind
  //  else stop while loop
  var rootNode = this._heap[0];
  this._heap[0] = this._heap.pop();
  var comparing = true;
  var index = 0;
  var cA, cB, p, dA, dB;
  while (comparing){
    childrenIndices = [index * 2 + 1, index * 2 + 2];
    cA = this._heap[childrenIndices[0]];
    cB = this._heap[childrenIndices[1]];
    p = this._heap[index];
    dA = p - cA;
    dB = p - cB;
    if (dA > dB && dA > 0) {
      this._heap[childrenIndices[0]] = p;
      this._heap[index] = cA;
      index = childrenIndices[0];
    } else if (dB > dA && dB > 0) {
      this._heap[childrenIndices[1]] = p;
      this._heap[index] = cB;
      index = childrenIndices[1];
    } else {
      comparing = false;
    }
  }
  return rootNode;

};