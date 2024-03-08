let resultado = document.getElementById("resultado");
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let punto = document.getElementById("punto");
let reset = document.getElementById("reset");
let borrar = document.getElementById("eliminar");
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplica = document.getElementById("mult");
let igual = document.getElementById("igual");
let signo = document.getElementById("signo");
let bandera = true; // sigue agregando números al frente
let bandera2 = false;
// Variable para controlar si se ha mostrado el signo de menos
let signoMostrado = false;
// Variable para controlar si se ha eliminado el cero inicial
let ceroEliminado = false;
let bandera3 =  false;
let operacion = 0;
let total = 0;
let operador;

resultado.textContent = "0";

uno.onclick = function (e) {
    numero("1");
};

dos.addEventListener("click", () => {
    numero("2");
});

punto.addEventListener("click", () => {
    puntos(".");
});

signo.onclick = function (e) {
    // Si hay un resultado y no se ha mostrado el signo 
    if (resultado && !signoMostrado) {
        // Si el contenido del resultado es 0 eliminarlo
        if (resultado.textContent === "0" && !ceroEliminado) {
            resultado.textContent = "";
            ceroEliminado = true; // Marcamos que el cero inicial ha sido eliminado
        }
        resultado.textContent = "-" + resultado.textContent;  // Agregar el signo
        signoMostrado = true; // Marcamos que se ha mostrado el signo
    } else {
        // Si ya se mostró el signo -, quitarlo
        resultado.textContent = resultado.textContent.replace("-", "");
        signoMostrado = false; // Marcamos que se ha quitado el signo
    }
};


reset.addEventListener("click", resetear);

suma.onclick = function (e) {
    if (bandera2) {
        total = parseFloat(operacion) + parseFloat(resultado.textContent);
        resultado.textContent = total;
    }
    operacion = parseFloat(resultado.textContent);
    // resultado.textContent = "0";
    operador = "+";
    bandera = false; // indica que se va a ingresar un nuevo número
    bandera2 = true;
};
multiplica.onclick = function (e) {
    bandera = false;
    operacion = parseFloat(resultado.textContent);
    console.log(operacion);
    operador = "*";
};
resta.onclick = function (e) {
    bandera = false;
    operacion = parseFloat(resultado.textContent);
    console.log(operacion);
    operador = "-";
};

igual.onclick = function (e) {
    if (operador === "+") {
        operacion += parseFloat(resultado.textContent);
        total += operacion;
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

borrar.onclick = function (e) {
    resultado.textContent = resultado.textContent.slice(0, -1);
    if (resultado.textContent.length < 1) {
        resultado.textContent = "0";
    }
};

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

function puntos(contador) {
    if (resultado.textContent.indexOf(".") < 1) {
        if (bandera) {
            if (resultado.textContent.length < 9) {
                if (resultado.textContent === "0") {
                    resultado.textContent = "0" + contador;
                } else {
                    resultado.textContent += contador;
                }
            }
        } else {
            resultado.textContent = "0" + contador;
            bandera = true;
        }
    } else if (!bandera) {
        resultado.textContent = "0" + contador;
        bandera = true;
    }
}


function resetear() {
    // FUNCION PARA LIMPIAR LA PANTALLA
    resultado.textContent = "0";
    bandera = true;
    total = 0;
    bandera2 = false;
    ceroEliminado = false; 
    signoMostrado = false;
}
