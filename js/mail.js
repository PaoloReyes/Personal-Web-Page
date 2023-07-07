generate();

function send_mail() {
    const form = document.forms["enviar"];
    const topico = document.getElementById("topico").innerHTML;
    let input_captcha = document.getElementById("captcha").value;
    let captcha = document.getElementById("image").innerHTML;
    const msg = document.getElementById("msg");
    if (input_captcha == captcha) {
        const mensaje = form["mensaje"].value;
        const nombre = form["nombre"].value;
        const destino = form["correo_destino"].value;
        Email.send({
            SecureToken : "19e6f42c-2c74-423e-83ef-2ac93be2c6b6",
            To: [destino, "contactopaoloinspires@gmail.com"],
            From: "contactopaoloinspires@gmail.com",
            Subject: "Propuesta de " + nombre + " - " + topico,
            Body: "<h4>This is an automated email that has been sent to both Paolo and you.</h4><h4>Paolo will contact you as soon as possible with an answer.</h4> <strong>Your Message: </strong>" + mensaje,
        }).then(function () {
            msg.style.color = "#61b752";
            msg.innerHTML = "Message Sent!";
            setTimeout(function(){
                msg.innerHTML = "";
            }, 5000);
            form.reset();
            generate();
        });
    } else {
        msg.style.color = "#ff004f";
        msg.innerHTML = "Incorrect CAPTCHA";
        setTimeout(function(){
            msg.innerHTML = "";
        }, 5000);
    }
}

function generate() {
    let captcha = document.getElementById("image");
    if (captcha != null) {
        let uniquechar = "";
        const randomchar = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 5; i++) {
            uniquechar += randomchar.charAt(
                Math.random() * randomchar.length)
        }

        captcha.innerHTML = uniquechar;
    }
}