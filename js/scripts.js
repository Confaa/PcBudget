/* var tope = prompt("Indiquenos su presupuesto: ");
var totalCompra = 0; */

function Presupuesto() {
    this.producto = [];

    this.agregarproducto = function (item) {
        this.producto.push(item);
        localStorage.setItem("lista", JSON.stringify(this.producto));
        /* alert("Agregado al presupuesto"); */
    };

    this.base = function () {
        if (localStorage.getItem("lista") != null)
            this.producto = JSON.parse(localStorage.getItem("lista"));
    };
}

function Componente(tip, mar, cant) {
    this.tipo = tip;
    this.marca = mar;
    this.cantidad = cant;
}

var presupuesto = new Presupuesto();
var compo = new Componente("mother", "asus", 1);

presupuesto.base();
presupuesto.agregarproducto(compo);

console.log(presupuesto.producto);

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
