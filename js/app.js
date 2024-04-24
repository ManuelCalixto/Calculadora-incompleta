let resultado = document.getElementById("resultado");
let cero = document.getElementById("cero");
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let punto = document.getElementById("punto");
let reset = document.getElementById("reset");
let borrar = document.getElementById("eliminar");
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplica = document.getElementById("mult");
let igual = document.getElementById("igual");
let signo = document.getElementById("signo");
let porcentaje = document.getElementById("modulo");
let raiz = document.getElementById("raiz");
let division = document.getElementById("division");
// let porcentajes;
let bandera = true; // sigue agregando números
let bandera2 = false;
let operacion = 0;
let total = 0;
let operador;

resultado.textContent = "0";
cero.addEventListener("click", () => {
    numero("0");
});

uno.onclick = function (e) {
    numero("1");
};

dos.addEventListener("click", () => {
    numero("2");
});

tres.addEventListener("click", () => {
    numero("3");
});

cuatro.addEventListener("click", () => {
    numero("4");
});

cinco.addEventListener("click", () => {
    numero("5");
});

seis.addEventListener("click", () => {
    numero("6");
});

siete.addEventListener("click", () => {
    numero("7");
});

ocho.addEventListener("click", () => {
    numero("8");
});

nueve.addEventListener("click", () => {
    numero("9");
});

punto.addEventListener("click", () => {
    puntos(".");
});


signo.onclick = function (e) {
    resultado.textContent = parseFloat(resultado.textContent) * -1;
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
resta.onclick = function (e) {
    if (bandera2) {
        total = parseFloat(operacion) - parseFloat(resultado.textContent);
        resultado.textContent = total;
    }
    operacion = parseFloat(resultado.textContent);
    console.log(operacion);
    operador = "-";
    bandera = false;
    bandera2 = true;
};
multiplica.onclick = function (e) {
    if (bandera2) {
        total = parseFloat(operacion) * parseFloat(resultado.textContent);
        resultado.textContent = total;
    }
    operacion = parseFloat(resultado.textContent);
    console.log(operacion);
    operador = "*";
    bandera = false;
    bandera2 = true;
};

division.onclick = function (e) {
    if (bandera2) {
        total = parseFloat(operacion) / parseFloat(resultado.textContent);
        resultado.textContent = total;
    }
    operacion = parseFloat(resultado.textContent);
    console.log(operacion);
    operador = "d";
    bandera = false;
    bandera2 = true;
};


porcentaje.onclick = function (e) {
    bandera = false;
    operacion = parseFloat(resultado.textContent);
    operador = "%";
};

raiz.onclick = function (e) {
    bandera = false;
    operacion = parseFloat(resultado.textContent);
    operador = "r";
};

igual.onclick = function (e) {
    if (operador === "+") {
        total += operacion;
        operacion += parseFloat(resultado.textContent);
        resultado.textContent = operacion;
    } else if (operador === "-") {
        total-=operacion;
        operacion -= parseFloat(resultado.textContent);
        resultado.textContent = operacion;
    } else if (operador === "*") {
        total*=operacion;
        operacion *= parseFloat(resultado.textContent);
        resultado.textContent = operacion;
    } else if (operador === "%") {
        operacion = parseFloat(resultado.textContent/100);// x100 ya que lo multiplica para colocar el punto decimal
        resultado.textContent = operacion;
    } else if (operador === "r") {
        operacion = Math.sqrt(operacion); 
        resultado.textContent = operacion.toFixed(2);
    } else if(operador === "d"){
        operacion= parseFloat(operacion) / parseFloat(resultado.textContent);
        resultado.textContent = operacion.toFixed(2);
    }
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
    operador = null; 
}

document.addEventListener('keydown', function (e) {

    if (e.key === 'Backspace') {
        resultado.textContent = resultado.textContent.slice(0, -1);
        if (resultado.textContent.length < 1) {
            resultado.textContent = "0";
        }
    }

    if (e.key === "Enter") {
        document.getElementById("igual").click();
    }

    if (e.key === "Delete") {
        resetear();
    }
    if(e.key === "d"){
        document.getElementById("division").click();
    }
    if (e.key === "%") {
        document.getElementById("modulo").click();
    }

    if (e.key === "+") {
        document.getElementById("suma").click();
    }

    if (e.key === "-") {
        document.getElementById("resta").click();
    }
    
    if(e.key === "*"){
        document.getElementById("mult").click();
    }

    if (e.key === '0') {
        numero('0')
    }

    if (e.key === '1') {
        numero('1');
    }
    if (e.key === '2') {
        numero('2')
    }
    if (e.key === '3') {
        numero('3')
    }
    if (e.key === '4') {
        numero('4')
    }
    if (e.key === '5') {
        numero('5')
    }
    if (e.key === '6') {
        numero('6')
    }
    if (e.key === '7') {
        numero('7')
    }
    if (e.key === '8') {
        numero('8')
    }
    if (e.key === '9') {
        numero('9')
    }
    if (e.key === '.') {
        puntos(".");
    }
})