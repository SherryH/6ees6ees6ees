var should = chai.should()

describe('BinaryHeap', function () {

  it('should exist', function () {
    should.exist(BinaryHeap);
  });

  it('should be a Function', function () {
    BinaryHeap.should.be.a.Function;
  });

});

describe('BinaryHeap.prototype.insert', function () {

  it('should exist', function () {
    should.exist(BinaryHeap.prototype.insert);
    BinaryHeap.prototype.insert.should.be.a.Function;
  });

  it('should add a value to an empty BinaryHeap instance', function () {
    var binaryHeap = new BinaryHeap();
    binaryHeap.insert(4);

    binaryHeap._heap.length.should.equal(1);
    binaryHeap._heap[0].should.equal(4);
  });

  it('should add multiple values to a Binary Heap when called multiple times', function () {
    var binaryHeap = new BinaryHeap();
    binaryHeap.insert(4);
    binaryHeap.insert(8);
    binaryHeap.insert(12);

    binaryHeap._heap.length.should.equal(3);
    binaryHeap._heap[0].should.equal(4);
    binaryHeap._heap[1].should.equal(8);
    binaryHeap._heap[2].should.equal(12);
  });

  it('should maintain sorting based on BinaryHeap._compare between a parent node and its children', function () {
    var binaryHeap = new BinaryHeap();
    binaryHeap.insert(4);
    binaryHeap.insert(5);
    binaryHeap.insert(9);
    binaryHeap.insert(8);
    binaryHeap.insert(1);

    var compare = binaryHeap._compare;
    var heap = binaryHeap._heap;

    // heap[0] is the parent of heap[1] and heap[2]
    // heap[1] is the parent of heap[3] and heap[4]
    compare(heap[0], heap[1]).should.be.true;
    compare(heap[0], heap[2]).should.be.true;
    compare(heap[1], heap[3]).should.be.true;
    compare(heap[1], heap[4]).should.be.true;
  });

});

describe('BinaryHeap.prototype.removeRoot', function () {

  it('should exist', function () {
    should.exist(BinaryHeap.prototype.insert);
    BinaryHeap.prototype.removeRoot.should.be.a.Function;
  });

  it('should return `undefined` on an empty heap', function () {
    var binaryHeap = new BinaryHeap();
    var root = binaryHeap.removeRoot();

    should.equal(root, undefined);
  });

  it('should remove a single element from BinaryHeap._heap', function () {
    var binaryHeap = new BinaryHeap();
    binaryHeap.insert(6);
    binaryHeap.insert(4);
    binaryHeap.insert(9);
    binaryHeap.removeRoot();

    binaryHeap._heap.length.should.equal(2);

  });

  it('should return the root node in BinaryHeap._heap', function () {
    var binaryHeap = new BinaryHeap();
    binaryHeap.insert(8);
    var actualRoot = binaryHeap._heap[0];
    var removedRoot = binaryHeap.removeRoot();

    should.equal(actualRoot, removedRoot);

    binaryHeap.insert(6);
    binaryHeap.insert(4);
    binaryHeap.insert(9);

    actualRoot = binaryHeap._heap[0];
    removedRoot = binaryHeap.removeRoot();

    should.equal(actualRoot, removedRoot);
  });

  it('should maintain sorting between parents and children after removing nodes', function () {
    var binaryHeap = new BinaryHeap();
    binaryHeap.insert(4);
    binaryHeap.insert(5);
    binaryHeap.insert(9);
    binaryHeap.insert(8);
    binaryHeap.insert(1);
    binaryHeap.insert(0);
    binaryHeap.removeRoot();

    var compare = binaryHeap._compare;
    var heap = binaryHeap._heap;

    // heap[0] is the parent of heap[1] and heap[2]
    // heap[1] is the parent of heap[3] and heap[4]
    compare(heap[0], heap[1]).should.be.true;
    compare(heap[0], heap[2]).should.be.true;
    compare(heap[1], heap[3]).should.be.true;
    compare(heap[1], heap[4]).should.be.true;
  });

});