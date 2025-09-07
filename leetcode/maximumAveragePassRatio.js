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
  let minAverageRatio = Infinity;
  let minArrayIndex = -1;

  for (let i = 0; i < classes.length; i++) {
    const currentRatio = classes[i][0] / classes[i][1];

    if (currentRatio < minAverageRatio) {
      minAverageRatio = currentRatio;
      minArrayIndex = i;
    }
  }

  // CORRECTED: Properly modify the sub-array values
  // Method 1: Direct assignment to array indices
  classes[minArrayIndex][0] += extraStudents;  // Add extraStudents to pass count
  classes[minArrayIndex][1] += extraStudents;  // Add extraStudents to total count

  // Alternative methods to modify sub-array values:
  
  // Method 2: Using destructuring and reassignment
  // let [pass, total] = classes[minArrayIndex];
  // classes[minArrayIndex] = [pass + extraStudents, total + extraStudents];

  // Method 3: Using splice to replace the entire sub-array
  // classes.splice(minArrayIndex, 1, [
  //   classes[minArrayIndex][0] + extraStudents,
  //   classes[minArrayIndex][1] + extraStudents
  // ]);

  console.log(classes);

  let passRatio = classes.map(([pass, total]) => pass / total);
  console.log(passRatio);
  
  // Calculate average pass ratio (sum of all ratios divided by number of classes)
  let averageRatio = passRatio.reduce((sum, ratio) => sum + ratio, 0) / passRatio.length;
  return averageRatio;
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