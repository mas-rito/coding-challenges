const buahBuahan = ["Pisang", "Mangga", "Jeruk", "Apel", "Anggur"];

// for (let i = 0; i < buahBuahan.length; i++) {
//   console.log(buahBuahan[i]);
// }

buahBuahan.map((buah, index) => {
  console.log(buah + " manis " + (index + 1));
});

// console.log(buahBuahan);
