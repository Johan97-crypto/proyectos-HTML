document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const mensajeInput = document.getElementById("mensaje");
        const mensaje = mensajeInput.value;

        // Realizamos la solicitud POST utilizando fetch
        fetch("/formulario", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `mensaje=${encodeURIComponent(mensaje)}`
        })
        .then(response => response.text())
        .then(data => {
            alert(data); // Mostramos la respuesta del servidor
            formulario.reset(); // Reiniciamos el formulario
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});
