document.getElementById('correoButton').addEventListener('click', function() {
    document.getElementById('infoCorreo').style.display = 'block';
});

document.getElementById('fechaButton').addEventListener('click', function() {
    document.getElementById('infoNacimiento').style.display = 'block';
});

document.getElementById('direccButton').addEventListener('click', function() {
    document.getElementById('infoDireccion').style.display = 'block';
});

document.getElementById('telButton').addEventListener('click', function() {
    document.getElementById('infoTelefono').style.display = 'block';
});

function mostrarInfo(buttonValue, mostrarInfo) {
    document.getElementById(buttonValue).addEventListener('click', function() {
        document.getElementById(mostrarInfo).style.display = 'block';
    });
}