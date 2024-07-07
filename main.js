function validateText(text) {
    const regex = /^[a-z0-9\s]+$/; // Solo permite minúsculas, números y espacios
    return regex.test(text);
}

function showMessage(message) {
    document.getElementById('message').innerText = message;
}

function encryptText() {
    var inputText = document.getElementById('inputText').value;
    if (!validateText(inputText)) {
        showMessage('No se aceptarán mayúsculas ni caracteres especiales.');
        return;
    }
    showMessage(''); // Limpia el mensaje de validación
    var encryptedText = inputText.split('').reverse().join(''); // Ejemplo simple de cifrado
    var outputText = document.getElementById('outputText');
    outputText.value = encryptedText;
    outputText.style.display = 'block'; // Muestra el área de presentación de texto
}

function decryptText() {
    var inputText = document.getElementById('inputText').value;
    if (!validateText(inputText)) {
        showMessage('No se aceptarán mayúsculas ni caracteres especiales.');
        return;
    }
    showMessage(''); // Limpia el mensaje de validación
    var decryptedText = inputText.split('').reverse().join(''); // Ejemplo simple de descifrado
    var outputText = document.getElementById('outputText');
    outputText.value = decryptedText;
    outputText.style.display = 'block'; // Muestra el área de presentación de texto
}

function copyText() {
    var outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}