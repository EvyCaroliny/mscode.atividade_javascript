function somar() {
   const numero1 = getComputedStyle.ElementById('numero1');
   const numero2 = getComputedStyle.ElementById('numero2');

   document.getElementById('btnSomar').onclick = function
    const resultado = calcular(Number(numero1.value), Number(numero2.value), '+');

    btnSomar.onclick = function () {
      const resultado = somar (numero1.value), numero2.value);

      document.getElementById('resultado'). innerText = resultado;
}

btnSubtrair.onclick = function () {
  const resultado = somar(numero1.value, numero2.value);

  document.getElementById('resultado').innerHTML = resultado;
}

btnSubtrair.onclick = function () {
  const resultado = subtrair(numero1.value, numero2.value);

  document.getElementById('resultado').innerHTML = resultado;

}

 function somar(numero1,numero2) {
    return Number(num1) + Number(num2);
 }

  function subtrair(numero1,numero2) {
    return Number(num1) - Number(num2);
 }