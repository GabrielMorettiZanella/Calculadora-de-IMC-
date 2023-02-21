const M = parseFloat(prompt("Quantos KG você tem?"));
const A = parseFloat(prompt("Qual é a sua altura?"));
const IMC = M / (A ** 2);

console.log(`IMC: ${IMC.toFixed(2)}`);

if (IMC >= 18.5 && IMC < 25) {
  console.log("Você está no peso ideal");
}

if (IMC < 17) {
  console.log("Você está muito abaixo do peso");
}

if (IMC >= 17 && IMC < 18.5) {
  console.log("Você está abaixo do peso");
}

if (IMC >= 25 && IMC < 30) {
  console.log("Você está com sobrepeso");
}

if (IMC >= 30 && IMC < 35) {
  console.log("Você está com obesidade");
}

if (IMC >= 35 && IMC < 40) {
  console.log("Você está com obesidade severa");
}

if (IMC >= 40) {
  console.log("Você está com obesidade mórbida");
}