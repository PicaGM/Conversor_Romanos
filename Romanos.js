function convertToRoman(num) {
const numerosN = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const numerosRomanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  
  let resultado = "";
  
  for (let i = 0; i < numerosN.length; i++) {
    while (num >= numerosN[i]) {
      resultado += numerosRomanos[i];
      num -= numerosN[i];
    }
  }
  return resultado;
}
convertToRoman(36);
