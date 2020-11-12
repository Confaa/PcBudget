/* var tope = prompt("Indiquenos su presupuesto: ");
var totalCompra = 0; */

function Presupuesto() {
    this.producto = [];

    this.agregarProducto = function (item) {
        this.producto.push(item);
        localStorage.setItem("lista", JSON.stringify(this.producto));
        /* alert("Agregado al presupuesto"); */
    };

    this.base = function () {
        if (localStorage.getItem("lista") != null)
            this.producto = JSON.parse(localStorage.getItem("lista"));
    };
}

function Componente(tip, mar, mod, pre, cons, comp, codPro) {
    this.tipo = tip;
    this.marca = mar;
    this.modelo = mod;
    this.precio = pre;
    this.consumo = cons;
    this.compatibilidad = comp;
    this.codigoProducto = codPro;
}

function Comparar(lista, valor) {
    for (i = 0; i < lista.length; i++) {
        if (lista[i].codigoProducto == valor) {
            presupuesto.agregarProducto(lista[i]);
        }
    }
}

var botones = document.getElementsByClassName("agregarPresupuesto");

function agregarEventos(lista) {
    for (let i = 0; i < lista.length; i++) {
        lista[i].addEventListener("click", function () {
            Comparar(baseDatos, lista[i].value);
        });
    }
}

var presupuesto = new Presupuesto();
presupuesto.base();
agregarEventos(botones);

console.log(presupuesto.producto);

var baseDatos = [
    {
        "tipo": "Mother",
        "marca": "Gigabyte",
        "modelo": "B460M AORUS PRO (rev. 1.0)",
        "precio": 599,
        "consumo": 40,
        "compatibilidad": "Intel",
        "codigoProducto": 1000
    },
    {
        "tipo": "Mother",
        "marca": "Gigabyte",
        "modelo": "B460M AORUS PRO (rev. 1.0)",
        "precio": 599,
        "consumo": 40,
        "compatibilidad": "Intel",
        "codigoProducto": 1001
    },
    {
        "tipo": "Mother",
        "marca": "Gigabyte",
        "modelo": "B460M AORUS PRO (rev. 1.0)",
        "precio": 599,
        "consumo": 40,
        "compatibilidad": "Intel",
        "codigoProducto": 1002
    },
    {
        "tipo": "Mother",
        "marca": "Gigabyte",
        "modelo": "B460M AORUS PRO (rev. 1.0)",
        "precio": 599,
        "consumo": 40,
        "compatibilidad": "Intel",
        "codigoProducto": 1003
    },
    {
        "tipo": "Mother",
        "marca": "Gigabyte",
        "modelo": "B460M AORUS PRO (rev. 1.0)",
        "precio": 599,
        "consumo": 40,
        "compatibilidad": "Intel",
        "codigoProducto": 1004
    },
    {
        "tipo": "Mother",
        "marca": "Gigabyte",
        "modelo": "B460M AORUS PRO (rev. 1.0)",
        "precio": 599,
        "consumo": 40,
        "compatibilidad": "Intel",
        "codigoProducto": 1005
    },
    {
        "tipo": "Mother",
        "marca": "Gigabyte",
        "modelo": "B460M AORUS PRO (rev. 1.0)",
        "precio": 599,
        "consumo": 40,
        "compatibilidad": "Intel",
        "codigoProducto": 1006
    },
    {
        "tipo": "Mother",
        "marca": "Gigabyte",
        "modelo": "B460M AORUS PRO (rev. 1.0)",
        "precio": 599,
        "consumo": 40,
        "compatibilidad": "Intel",
        "codigoProducto": 1007
    },
    {
        "tipo": "Mother",
        "marca": "Gigabyte",
        "modelo": "B460M AORUS PRO (rev. 1.0)",
        "precio": 599,
        "consumo": 40,
        "compatibilidad": "Intel",
        "codigoProducto": 1008
    }
];

function mostrarPresupuesto(lista) {
    var output = "";
    for (let i = 0; i < lista.length; i++) {
        output +=
            "<p>Marca: " +
            lista[i].marca +
            "</p>" +
            "<p>Modelo: " +
            lista[i].modelo +
            "</p>" +
            "<p>Precio: " +
            lista[i].precio +
            "$</p>";
    }
    return output;
}
$("#presupuesto").append(mostrarPresupuesto(presupuesto.producto));
/* $("#presupuesto").html(mostrarPresupuesto(presupuesto.producto)); */

/* document
    .getElementById("presupuesto")
    .appendChild(mostrarPresupuesto(presupuesto.producto));

document
    .getElementById("presupuesto")
    .innerHTML(mostrarPresupuesto(presupuesto.producto)) */
