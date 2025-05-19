function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value) / 100;
  
    if (peso && altura) {
      const imc = (peso / (altura * altura)).toFixed(2);
      let classificacao = "";
  
      if (imc < 18.5) {
        classificacao = "Abaixo do peso";
      } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso ideal 👏";
      } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
      } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade Grau I";
      } else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade Grau II (severa)";
      } else {
        classificacao = "Obesidade Grau III (mórbida)";
      }
  
      document.getElementById('resultado').innerText = `Seu IMC é ${imc} – ${classificacao}`;
    } else {
      document.getElementById('resultado').innerText = "Preencha todos os campos!";
    }
  }
  