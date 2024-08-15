function encriptar(texto) {
    if (/[^a-z\s]/.test(texto)) {
        return "El texto contiene caracteres no permitidos.";
    }

    const encriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    return encriptado;
}

function desencriptar(texto) {
    // Reemplazamos las secuencias encriptadas en el orden inverso
    const desencriptado = texto
        .replace(/ufat/g, "u")
        .replace(/ober/g, "o")
        .replace(/ai/g, "a")
        .replace(/imes/g, "i")
        .replace(/enter/g, "e");

    return desencriptado;
}

function encriptarTexto() {
    const inputTexto = document.getElementById("inputTexto").value;
    const resultado = encriptar(inputTexto);
    if(inputTexto == ""){
        alert("No hay texto en el area.");
    }
    else{
        document.getElementById("outputTexto").value = resultado;
        // Mostrar el botón de copiar
        document.getElementById("copiar").style.display = "inline-block";
        document.getElementById("ocultar").style.display = "none";
    }
   
}

function desencriptarTexto() {
    const inputTexto = document.getElementById("inputTexto").value;
    const resultado = desencriptar(inputTexto);
    document.getElementById("outputTexto").value = resultado;
}

function copiarTexto() {
    const outputTexto = document.getElementById("outputTexto");
    outputTexto.select();
    outputTexto.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");

    alert("Texto copiado al portapapeles: " + outputTexto.value);
}
