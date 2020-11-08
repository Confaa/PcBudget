/* var tope = prompt("Indiquenos su presupuesto: ");
var totalCompra = 0; */

function Presupuesto() {
    this.producto = [];

    this.agregarProducto = function (item) {
        this.producto.push(item);
        sessionStorage.setItem("lista", JSON.stringify(this.producto));
        /* alert("Agregado al presupuesto"); */
    };

    this.base = function () {
        if (sessionStorage.getItem("lista") != null)
            this.producto = JSON.parse(sessionStorage.getItem("lista"));
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

/* var tipo;
var marca;
var cantidad;
var componente;
var presupuesto = new Presupuesto();
var x;
var decision;
var sigoCargando = true;
while (tope >= totalCompra && sigoCargando == true) {
    x = false;
    tipo = prompt("Tipo de componente: ");
    marca = prompt("Marca: ");
    cantidad = prompt("Unidades: ");

    tipo = tipo.toLowerCase();

    marca = marca.trim();
    marca = marca.toUpperCase();

    if (marca == "ASUS") {
        totalCompra = totalCompra + 100 * cantidad;
    } else if (marca == "MSI") {
        totalCompra = totalCompra + 90 * cantidad;
    } else if (marca == "GIGABYTE") {
        totalCompra = totalCompra + 90 * cantidad;
    } else {
        x = true;
        alert("No se ha encontrado el producto solicitado");
    }
    if (totalCompra > tope) {
        alert("No se pudo cargar el producto solicitado, limite superado");
        break;
    }
    if (x == false) {
        componente = new Componente(tipo, marca, cantidad);
        presupuesto.agregarproducto(componente);
    }
    do {
        decision = prompt("Desea agregar algo mas al presupuesto? Y(Si) N(no)");
        decision = decision.toUpperCase();
        if (decision == "Y") {
            sigoCargando = true;
        } else if (decision == "N") {
            sigoCargando = false;
        } else {
            alert("Opcion incorrecta");
        }
    } while (decision != "N" && decision != "Y");
}

console.log(presupuesto);
console.log(typeof presupuesto);
alert("Dinero gastado: " + totalCompra); */
