function input(nama, umur) {
  return `Hallo, nama saya ${nama} umur saya ${umur}`;
}

function akar(number) {
  let hasilAkar = Math.sqrt(number);

  return hasilAkar * hasilAkar * hasilAkar;
}

function hitungPanjangNama(nama) {
  return `Banyak huruf dalam string ${nama.toUpperCase()} adalah ${
    nama.length
  }`;
}

function rataRata(number1, number2) {
  let number = (number1 + number2) / 2;

  if (number < 5) {
    return Math.floor(number);
  } else {
    return Math.ceil(number);
  }
}

console.log(rataRata(7, 4));
