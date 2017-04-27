function mergeSort(arr){
  //Your code here
  //Recursive approach

  // conditional
  if (arr.length <= 1) {
    return arr;
  }
  // 1. split array in half
  var midInd = Math.floor(arr.length / 2);
  var arr1 = arr.slice(0, midInd);
  var arr2 = arr.slice(midInd);
  // 2. recursively splitting the array
  //var newArr1 = mergeSort(arr1).concat(mergeSort(arr2));
  var newArr1 = mergeSort(arr1);
  var newArr2 = mergeSort(arr2);
  // 3. merge and sort the items in merged array
  var mergedArr = [];
  while (newArr1.length > 0 && newArr2.length > 0) {
    var item1 = newArr1[0];
    var item2 = newArr2[0];
    if ((item1 - item2) < 0) {
      mergedArr.push(newArr1.shift());
    } else {
      mergedArr.push(newArr2.shift());
    }
  }
  //after 1 newArr is empty, merge the remaining items in another newArr into merge array
  if (newArr1.length > 0) {
    mergedArr = mergedArr.concat(newArr1);
  } else {
    mergedArr = mergedArr.concat(newArr2);
  }
  return mergedArr;
}

console.log(mergeSort([4,7,4,3,9,1,2]));

/*Implement a function that sorts an array of numbers using the “mergesort” algorithm.

Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N as a set of N “sublists” of length 1, which are considered to be sorted. Adjacent sublists are then “merged” into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
after the first merge, and so on.)

This can be implemented using either a recursive (“top-down”) or an iterative (“bottom-up”) approach.

Illustration of an iterative approach:

  1.Initial step: Input array is split into "sorted" sublists
     [4,7,4,3,9,1,2] -> [[4],[7],[4],[3],[9],[1],[2]]

  2.Merge step: Adjacent sublists are merged into sorted sublists
     [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]

  3.Repeat merge step:
     [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]

  4.Repeat merge step:
     [[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]

  5.Done! Return the sorted array:
     [1,2,3,4,4,7,9]
Illustration of a recursive approach:

  1.Split the input array in half
   [4, 7, 4, 3, 9, 1, 2] -> [4, 7, 4], [3, 9, 1, 2

  2.Both sides are sorted recursively:
   [4, 7, 4] -> [4, 4, 7]
   [3, 9, 1, 2] -> [1, 2, 3, 9]

  3.Both halves are merged:
   [4, 7, 4], [3, 9, 1, 2] -> [1, 2, 3, 4, 4, 7, 9]
Step 2 might seem a bit mystical - how do we sort both sides? The
simple answer is that we use mergesort! After all, mergesort sorts
arrays, right? We can test this on [4, 7, 4] by just following the
steps above but imagining that [4, 7, 4] is the whole array, which
is what happens when you call mergesort on it.

   1.Split the input array in half
     [4, 7, 4] -> [4], [7, 4]

   2.Both sides are sorted recursively:
    [4] -> [4]
    [7, 4] -> [4, 7]

   3.Both halves are merged:
   [4], [4, 7] -> [4, 4, 7]
I cheated again by going directly from [7, 4] to [4, 7], but that’s
really just:

  1.Split the input array in half
    [7, 4] -> [7], [4]

  2.Both sides are sorted recursively:
    [7] -> [7]
    [4] -> [4]

  3.Both halves are merged:
    [7], [4] -> [4, 7]
As you can see, all the work actually gets done in step 3, the merge
step. Everything else is just splitting and recursing.

Mergesort is an optimized sorting algorithm which is a common choice to implement sort
methods in standard libraries as an alternative to quicksort or heapsort. (For example,
Firefox’s Array.sort method uses a tuned mergesort; the WebKit engine used by Chrome and
Safari uses quicksort for numeric arrays, and mergesort for arrays of strings.)*/