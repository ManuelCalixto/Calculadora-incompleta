let resultado = document.getElementById("resultado");
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let punto = document.getElementById("punto");
let reset = document.getElementById("reset");
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplica = document.getElementById("mult");
let igual = document.getElementById("igual");
let bandera = true; // sigue agregando números al frente
let operacion = 0;
let operador;

resultado.textContent = "0";

uno.onclick = function (e) {
    numero("1");
};

dos.addEventListener("click", () => {
    numero("2");
});

punto.addEventListener("click", () => {
    puntouno(".");
});

reset.addEventListener("click", resetear);

suma.onclick = function (e) {
    bandera = false; // indica que se va a ingresar un nuevo número
    operacion = parseFloat(resultado.textContent);
    console.log(operacion);
    operador = "+";
};
multiplica.onclick = function (e) {
    bandera = false;
    operacion = parseFloat(resultado.textContent);
    console.log(operacion);
    operador = "*";
}
resta.onclick = function (e) {
    bandera = false;
    operacion = parseFloat(resultado.textContent);
    console.log(operacion);
    operador = "-";
};

igual.onclick = function (e) {
    if (operador === "+") {
        operacion += parseFloat(resultado.textContent);
        resultado.textContent = operacion;
    } else if (operador === "-") {
        operacion -= parseFloat(resultado.textContent);
        resultado.textContent = operacion;
    } else if (operador === "*") {
        operacion *= parseFloat(resultado.textContent);
        resultado.textContent = operacion;
    }
    bandera = true;
};

function resetear() {// FUNCION PARA LIMPIAR LA PANTALLA
    resultado.textContent = "0";
    bandera = true;
}

function numero(contador) {
    if (bandera) {
        if (resultado.textContent.length < 9) {
            if (resultado.textContent === "0") {
                resultado.textContent = contador;
            } else {
                resultado.textContent += contador;
            }
        }
    } else {
        resultado.textContent = contador;
        bandera = true;
    }
}

function puntouno(puntouno) {
    if (bandera) {
        if (resultado.textContent.length < 9) {
            if (resultado.textContent.indexOf(".") === -1) { // Me verifica si el punto no está presente en el contenido
                resultado.textContent += puntouno;
            }
        }
    }
}    