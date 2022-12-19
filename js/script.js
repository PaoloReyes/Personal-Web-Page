const msg = document.getElementById("msg");
const form = document.forms["enviar"];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const mensaje = form["mensaje"].value;
    const nombre = form["nombre"].value;
    const destino = form["correo_destino"].value;
    Email.send({
        SecureToken : "19e6f42c-2c74-423e-83ef-2ac93be2c6b6",
        To: [destino, "contactopaoloinspires@gmail.com"],
        From: "contactopaoloinspires@gmail.com",
        Subject: "Propuesta de " + nombre,
        Body: "<h4>Este es un correo automático que se le ha enviado tanto a Paolo como a usted.</h4><h4>Paolo pronto lo contactará con una respuesta</h4> <strong>Mensaje: </strong>" + mensaje,
    }).then(function () {
        msg.innerHTML = "Mensaje Enviado con Éxito";
        setTimeout(function(){
            msg.innerHTML = "";
        }, 5000);
        form.reset();
    });
})