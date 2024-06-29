// Two Sum
// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]

// 27 February 2024

// function twoSum(nums, target) {
//   const numMap = new Map();

//   // Iterasi melalui array angka
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];

//     // Periksa apakah angka penyeimbang (complement) ada dalam peta
//     if (numMap.has(complement)) {
//       // Kembalikan indeks pasangan yang ditemukan
//       return [numMap.get(complement), i];
//     }

//     // Tambahkan angka ke peta dengan indeksnya
//     numMap.set(nums[i], i);
//   }

//   // Jika tidak ada pasangan yang ditemukan
//   return null;
// }

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }
}

console.log(twoSum([1, 2, 3], 4));
