const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');

const btnSomar = document.getElementById('btnSomar');
const btnSubtrair = document.getElementById('btnSubtrair');

btnSomar.onclick = function () {
    const resultado = somar(numero1.value, numero2.value);
    document.getElementById('resultado').innerText = resultado;
};

btnSubtrair.onclick = function () {
    const resultado = subtrair(numero1.value, numero2.value);
    document.getElementById('resultado').innerText = resultado;
};

function somar(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtrair(num1, num2) {
    return Number(num1) - Number(num2);
}