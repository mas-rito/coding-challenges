// how callstack works
function berhitungLagi() {
  console.log("5");
}
async function berhitung() {
  console.log("3");
  await berhitungLagi();
  console.log("4");
}

berhitung();
