// Selección de elementos DOM
const entradaTexto = document.querySelector(".entrada-texto");
const salidaTexto = document.querySelector(".salida-texto");
const seccionTexto1 = document.querySelector(".texto1");
const seccionTexto2 = document.querySelector(".texto2");
const btnCopiar = document.querySelector(".copiar");

// Mapa de validación y sustitución
const validChars = /^[a-z\s]+$/i;
const encriptMap = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};
const desencriptMap = {
    "ai": "a",
    "enter": "e",
    "imes": "i",
    "ober": "o",
    "ufat": "u"
};

// Función para validar el texto
function validar(texto) {
    return validChars.test(texto);
}

// Función para encriptar el texto
function encriptar() {
    const texto = entradaTexto.value.toLowerCase();
    if (!validar(texto)) {
        alert("Texto inválido, verifique su texto.");
        return;
    }
    const salida = texto.replace(/[aeiou]/g, match => encriptMap[match]);
    actualizarSalida(salida);
}

// Función para desencriptar el texto
function desencriptar() {
    const texto = entradaTexto.value.toLowerCase();
    if (!validar(texto)) {
        alert("Texto inválido, verifique su texto.");
        return;
    }
    const salida = texto.replace(/ai|enter|imes|ober|ufat/g, match => desencriptMap[match]);
    actualizarSalida(salida);
}

// Función para actualizar la salida y ocultar elementos innecesarios
function actualizarSalida(salida) {
    entradaTexto.value = "";
    salidaTexto.value = salida;
    ocultar();
}

// Función para ocultar elementos y mostrar el texto encriptado/desencriptado
function ocultar() {
    salidaTexto.style.background = "white";
    seccionTexto1.style.display = "none";
    seccionTexto2.style.display = "none";
    btnCopiar.style.display = "block";
}

// Función para restaurar la vista inicial
function mostrar() {
    salidaTexto.style.background = "#FFF no-repeat center url(imagenes/buscar.png)";
    seccionTexto1.style.display = "block";
    seccionTexto2.style.display = "block";
    btnCopiar.style.display = "none";
}

// Función para copiar el texto y mostrar la notificación
function copiar() {
    navigator.clipboard.writeText(salidaTexto.value).then(() => {
        const anuncio = document.querySelector(".anuncio");
        anuncio.textContent = "Texto copiado";
        anuncio.style.display = "block";
        setTimeout(() => {
            anuncio.style.display = "none";
        }, 950);
        salidaTexto.value = "";
        mostrar();
    });
}
