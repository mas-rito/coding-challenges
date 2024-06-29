const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const gross = 144;
const lusin = 12;

rl.question(`Quantity? `, (quantity) => {
  //   console.log("Gross:", Math.floor(quantity / gross));
  //   console.log("Lusin:", Math.floor((quantity % gross) / lusin));
  //   console.log("Pcs:", quantity % lusin);

  var jml_gross = Math.floor(quantity / gross);
  var jml_lusin = Math.floor((quantity % gross) / lusin);
  var jml_pcs = quantity % lusin;

  console.log("Quantity:", quantity);
  console.log("Gross:", jml_gross);
  console.log("Lusin:", jml_lusin);
  console.log("Pcs:", jml_pcs);

  console.log("Total harga awal:", quantity * 1000);
  if (quantity * 1000 > 100000) {
    console.log("Total diskon:", (quantity * 1000 * 5) / 100);
    console.log(
      "Total harga akhir",
      quantity * 1000 - (quantity * 1000 * 5) / 100
    );
  } else {
    console.log("Total diskon:", 0);
    console.log("Total harga akhir", quantity * 1000);
  }
  rl.close();
});
