// Apuntar al elemento con ID "resultado"
resultado=document.getElementById("resultado");

// Función suma
const suma = () => {
    let valorNum1=parseInt(document.getElementById("numero1").value);
    let valorNum2=parseInt(document.getElementById("numero2").value);
    resultado.value=valorNum1+valorNum2;
}

// Función resta
const resta = () => {
    let valorNum1=parseInt(document.getElementById("numero1").value);
    let valorNum2=parseInt(document.getElementById("numero2").value);
    resultado.value=valorNum1-valorNum2;
}

// Función multiplicación
const multiplicacion = () => {
    let valorNum1=parseInt(document.getElementById("numero1").value);
    let valorNum2=parseInt(document.getElementById("numero2").value);
    resultado.value=valorNum1*valorNum2;
}

// Función división
const division = () => {
    let valorNum1=parseInt(document.getElementById("numero1").value);
    let valorNum2=parseInt(document.getElementById("numero2").value);
    resultado.value=valorNum1/valorNum2;
}