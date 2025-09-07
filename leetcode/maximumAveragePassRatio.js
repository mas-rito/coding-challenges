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
  // Helper function to calculate the improvement in pass ratio when adding one student
  const calculateImprovement = (pass, total) => {
    const currentRatio = pass / total;
    const newRatio = (pass + 1) / (total + 1);
    return newRatio - currentRatio;
  };

  // Create a max heap (priority queue) to always get the class with maximum improvement
  // Since JavaScript doesn't have a built-in heap, we'll use a simple approach
  // For each extra student, find the class that gives maximum improvement
  
  for (let student = 0; student < extraStudents; student++) {
    let maxImprovement = -1;
    let bestClassIndex = -1;
    
    // Find the class that gives maximum improvement when adding one student
    for (let i = 0; i < classes.length; i++) {
      const [pass, total] = classes[i];
      const improvement = calculateImprovement(pass, total);
      
      if (improvement > maxImprovement) {
        maxImprovement = improvement;
        bestClassIndex = i;
      }
    }
    
    // Add one student to the best class
    classes[bestClassIndex][0] += 1;  // Increment pass count
    classes[bestClassIndex][1] += 1;  // Increment total count
  }

  console.log("Final classes:", classes);

  // Calculate the average pass ratio
  let totalRatio = 0;
  for (let i = 0; i < classes.length; i++) {
    const [pass, total] = classes[i];
    totalRatio += pass / total;
  }
  
  const averageRatio = totalRatio / classes.length;
  console.log("Average ratio:", averageRatio);
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