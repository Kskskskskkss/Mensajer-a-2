// Acceder a los elementos del DOM
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const photoInput = document.getElementById('photo-input');
const audioRecordButton = document.getElementById('audio-record-button');
const messageContainer = document.getElementById('message-container');

// Función para enviar un mensaje de texto
function sendMessage(message) {
    // Aquí podrías enviar el mensaje al servidor o simplemente mostrarlo en la interfaz de usuario
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);
}

// Evento al hacer clic en el botón de enviar mensaje
sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim() !== '') {
        sendMessage(message);
        messageInput.value = '';
    }
});

// Evento al seleccionar una foto
photoInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        // Aquí podrías procesar la foto y mostrarla en la interfaz de usuario
        console.log('Foto seleccionada:', file);
    }
});

// Evento al hacer clic en el botón de grabar audio
audioRecordButton.addEventListener('click', () => {
    // Aquí podrías utilizar la API de MediaStream Recording para grabar audio
    console.log('Comenzar a grabar audio...');
});
