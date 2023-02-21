<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de IMC</title>
    <style>
        body {
          background-color: #f2f2f2;
          font-family: Arial, sans-serif;
          text-align: center;
        }
        
        h1 {
          color: #333333;
          margin-top: 50px;
        }
        
        form {
          margin-top: 30px;
        }
        
        label {
          display: block;
          margin-top: 10px;
        }
        
        input[type="number"] {
          padding: 5px;
          border-radius: 5px;
          border: none;
          background-color: #eeeeee;
        }
        
        button {
          padding: 10px;
          margin-top: 20px;
          background-color: #4caf50;
          color: #ffffff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        
        button:hover {
          background-color: #3e8e41;
        }
        
        .result {
          margin-top: 30px;
          font-size: 24px;
          font-weight: bold;
        }
        
        .result-ideal {
          color: #009933;
        }
        
        .result-overweight {
          color: #ff6600;
        }
        
        .result-obese {
          color: #cc0000;
        }
      </style>
</head>
<body>
    <h1>Calculadora de IMC</h1>
    <form>
      <label for="weight">Quantos KG você tem?</label>
      <input type="number" id="weight" name="weight">
      
      <label for="height">Qual é a sua altura?</label>
      <input type="number" id="height" name="height">
      
      <button type="button" onclick="calcularIMC()">Calcular</button>
    </form>
    <div class="result" id="result"></div>
</body>
</html>
<script>
    
  function calcularIMC() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const IMC = weight / (height ** 2);
  let resultText = `IMC: ${IMC.toFixed(2)} - `;
  if (IMC >= 18.5 && IMC < 25) {
    resultText += '<span class="result-ideal">Você está no peso ideal</span>';
  }
  else if (IMC < 17) {
    resultText += '<span class="result-obese">Você está muito abaixo do peso</span>';
  }
  else if (IMC >= 17 && IMC < 18.5) {
    resultText += 'Você está abaixo do peso';
  }
  else if (IMC >= 25 && IMC < 30) {
    resultText += '<span class="result-overweight">Você está com sobrepeso</span>';
  }
  else if (IMC >= 30 && IMC < 35) {
    resultText += '<span class="result-obese">Você está com obesidade</span>';
  }
  else if (IMC >= 35 && IMC < 40) {
    resultText += '<span class="result-obese">Você está com obesidade severa</span>';
  }
  else if (IMC >= 40) {
    resultText += '<span class="result-obese">Você está com obesidade mórbida</span>';
  }
  document.getElementById("result").innerHTML = resultText;
}

</script>
