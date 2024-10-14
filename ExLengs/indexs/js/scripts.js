document.addEventListener('DOMContentLoaded', function() {
    // Función para mostrar mensaje de éxito
    function showSuccessMessage(message) {
        const successMessage = document.getElementById('success-message');
        successMessage.innerText = message;
        successMessage.style.display = 'block';
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 3000); // Ocultar el mensaje después de 3 segundos
    }

    // Función para mostrar mensaje de error
    function showErrorMessage(message) {
        const errorMessage = document.getElementById('error-message');
        errorMessage.innerText = message;
        errorMessage.style.display = 'block';
        setTimeout(function() {
            errorMessage.style.display = 'none';
        }, 3000); // Ocultar el mensaje después de 3 segundos
    }

    // Obtener el formulario de contacto y agregar un listener para el evento submit
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const gender = document.getElementById('gender').value;
        const email = document.getElementById('email').value;
        const reason = document.getElementById('reason').value;
        const message = document.getElementById('message').value;

        // Enviar el correo utilizando SMTP.js
        Email.send({
            Host: "smtp.yourisp.com",
            Username: "lopezperezivan06@gmail.com",
            Password: "yourpassword", // Nunca pongas contraseñas en código fuente público
            To: email,
            From: "lopezperezivan06@gmail.com",
            Subject: "Confirmación de Contacto",
            Body: `Hola ${name} ${surname},<br><br>Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos a la brevedad.<br><br>Motivo de consulta: ${reason}<br>Mensaje: ${message}<br><br>Saludos,<br>Iván López`
        }).then(
            message => showSuccessMessage('Mensaje enviado con éxito.')
        ).catch(
            error => showErrorMessage('Hubo un error al enviar el mensaje.')
        );
    });
});
