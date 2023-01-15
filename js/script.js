
function encriptar() {

    let frase = document.getElementById("textUser").value;

    if (frase.length == 0) {
        alert("Ingrese Un Texto a Encriptar o Desincriptar ")
        document.getElementById("textUser").focus();
    } else {
        var textoEncriptado = frase.replace(/e/img, "enter");
        var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
        var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
        var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
        var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");


        document.getElementById("container-inicio").style.display = "none";

        document.getElementById("container-resultado").style.display = "show";

        document.getElementById("container-resultado").style.display = "inherit";

        document.getElementById("textResultado").innerHTML = textoEncriptado;
    }

}

function desencriptar() {

    let frase = document.getElementById("textUser").value.toLowerCase();

    if (frase.length == 0) {
        alert("Ingrese Un Texto a Encriptar o Desincriptar ")
        document.getElementById("textUser").focus();
    } else {

        var textoDesencriptado = frase.replace(/enter/img, "e");
        var textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
        var textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
        var textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
        var textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");

        document.getElementById("container-inicio").style.display = "none";

        document.getElementById("container-resultado").style.display = "show";

        document.getElementById("container-resultado").style.display = "inherit";

        document.getElementById("textResultado").innerHTML = textoDesencriptado;
    }


}

function copiar() {

    let contenido = document.querySelector("#textResultado").value;
    navigator.clipboard.writeText(contenido);
}