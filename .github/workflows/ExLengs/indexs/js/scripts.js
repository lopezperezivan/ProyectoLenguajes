document.addEventListener('DOMContentLoaded', function() {
    // Función para mostrar mensaje de éxito
    function showSuccessMessage() {
        const successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block';
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 3000); // Ocultar el mensaje después de 3 segundos
    }

    // Función para mostrar mensaje de error
    function showErrorMessage() {
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
        setTimeout(function() {
            errorMessage.style.display = 'none';
        }, 3000); // Ocultar el mensaje después de 3 segundos
    }

    // Obtener el formulario y agregar un listener para el evento submit
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto
        
        // Aquí puedes agregar validaciones u otras funciones antes de mostrar el mensaje
        
        // Simular éxito o error aleatoriamente
        const random = Math.random();
        if (random < 0.5) {
            showSuccessMessage();
        } else {
            showErrorMessage();
        }
    });
    
});
