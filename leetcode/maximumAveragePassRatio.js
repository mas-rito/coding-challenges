// There is a school that has classes of students and each class will be having a final exam. You are given a 2D integer array classes, where classes[i] = [passi, totali]. You know beforehand that in the ith class, there are totali total students, but only passi number of students will pass the exam.

// You are also given an integer extraStudents. There are another extraStudents brilliant students that are guaranteed to pass the exam of any class they are assigned to. You want to assign each of the extraStudents students to a class in a way that maximizes the average pass ratio across all the classes.

// The pass ratio of a class is equal to the number of students of the class that will pass the exam divided by the total number of students of the class. The average pass ratio is the sum of pass ratios of all the classes divided by the number of the classes.

// Return the maximum possible average pass ratio after assigning the extraStudents students. Answers within 10-5 of the actual answer will be accepted.

// Example 1:

// Input: classes = [[1,2],[3,5],[2,2]], extraStudents = 2
// Output: 0.78333
// Explanation: You can assign the two extra students to the first class. The average pass ratio will be equal to (3/4 + 3/5 + 2/2) / 3 = 0.78333.
// Example 2:

// Input: classes = [[2,4],[3,9],[4,5],[2,10]], extraStudents = 4
// Output: 0.53485

var maxAverageRatio = function (classes, extraStudents) {
  if (classes.length === 0) return 0;
  const calculateImprovement = (pass, total) => (pass + 1) / (total + 1) - pass / total;

  class MaxHeap {
    constructor(compare) { this.data = []; this.compare = compare; }
    push(val) {
      this.data.push(val);
      this._siftUp(this.data.length - 1);
    }
    pop() {
      const top = this.data[0];
      const last = this.data.pop();
      if (this.data.length) {
        this.data[0] = last;
        this._siftDown(0);
      }
      return top;
    }
    _siftUp(idx) {
      while (idx > 0) {
        const parent = Math.floor((idx - 1) / 2);
        if (this.compare(this.data[idx], this.data[parent])) {
          [this.data[idx], this.data[parent]] = [this.data[parent], this.data[idx]];
          idx = parent;
        } else break;
      }
    }
    _siftDown(idx) {
      const len = this.data.length;
      while (true) {
        let left = 2 * idx + 1;
        let right = 2 * idx + 2;
        let swapIdx = idx;
        if (left < len && this.compare(this.data[left], this.data[swapIdx])) swapIdx = left;
        if (right < len && this.compare(this.data[right], this.data[swapIdx])) swapIdx = right;
        if (swapIdx === idx) break;
        [this.data[idx], this.data[swapIdx]] = [this.data[swapIdx], this.data[idx]];
        idx = swapIdx;
      }
    }
  }

  const heap = new MaxHeap((a, b) =>
    calculateImprovement(a[0], a[1]) > calculateImprovement(b[0], b[1])
  );
  for (const cls of classes) heap.push(cls);
  for (let i = 0; i < extraStudents; i++) {
    const cls = heap.pop();
    cls[0]++; cls[1]++;
    heap.push(cls);
  }
  return classes.reduce((sum, [p, t]) => sum + p/t, 0) / classes.length;
};

console.log(
  maxAverageRatio(
    [
      [1, 2],
      [3, 5],
      [2, 2],
    ],
    2
  )
);
console.log(
  maxAverageRatio(
    [
      [2, 4],
      [3, 9],
      [4, 5],
      [2, 10],
    ],
    4
  )
);
