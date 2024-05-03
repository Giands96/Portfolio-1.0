document.getElementById('botonCalcular').addEventListener('click', function () {
    var montoCuenta = parseFloat(document.getElementById('montoCuenta').value);
    var porcentajePropina = parseFloat(document.getElementById('porcentajePropina').value);

    if (isNaN(montoCuenta) || isNaN(porcentajePropina)) {
        alert('Por favor, introduce números válidos.');
        return;
    }

    var montoPropina = montoCuenta * (porcentajePropina / 100);
    var montoTotal = montoCuenta + montoPropina;

    document.getElementById('totalPropina').innerHTML = 'Propina: $' + montoPropina.toFixed(2) + '<br>Total a pagar: $' + montoTotal.toFixed(2);
});