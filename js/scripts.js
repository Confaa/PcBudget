function Carrito() {
    this.productos = [];

    this.agregarProducto = function (item) {
        this.productos.push(item);
        localStorage.setItem("carrito", JSON.stringify(this.productos));
        alert("Agregado al carrito");
    };

    this.eliminarProducto = function (codigoBorrar) {
        this.productos = this.productos.filter(function (productos) {
            return productos.codigo != codigoBorrar;
        });
        localStorage.setItem("carrito", JSON.stringify(this.productos));
        borrarProductoDom(codigoBorrar);
        calcularTotal(this.productos);
    };

    this.vaciarCarrito = function () {
        this.productos.splice(0);
        localStorage.setItem("carrito", JSON.stringify(this.productos));
        $(".elementoCarrito").remove();
        calcularTotal(this.productos);
    };

    this.levantarProductosEnNavegador = function () {
        if (localStorage.getItem("carrito") != null)
            this.productos = JSON.parse(localStorage.getItem("carrito"));
    };
}

function Producto(tip, mar, mod, pre, comp, url, cod) {
    this.tipo = tip;
    this.marca = mar;
    this.modelo = mod;
    this.precio = pre;
    this.compatibilidad = comp;
    this.urlImagen = url;
    this.codigo = cod;
}

function ProductoEnCarrito(prod, cant) {
    this.productoEnCarrito = prod;
    this.cantidad = cant;
}

var botonesProductos = document.getElementsByClassName("agregarCarrito");

function agregarEventosProductos(botones) {
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", function () {
            Comparar(baseDatos, botones[i].value);
        });
    }
}

function Comparar(baseDeDatos, codigoBoton) {
    for (i = 0; i < baseDeDatos.length; i++) {
        if (baseDeDatos[i].codigo == codigoBoton) {
            let aux = new ProductoEnCarrito(baseDeDatos[i], 1);
            carrito.agregarProducto(aux);
        }
    }
}
var carrito = new Carrito();
carrito.levantarProductosEnNavegador();
agregarEventosProductos(botonesProductos);

console.log(carrito.productos);

function mostrarCarrito(carritoProductos) {
    var output = "";

    for (let i = 0; i < carritoProductos.length; i++) {
        output +=
            "<div class='elementoCarrito'>" +
            "<img src='" +
            carritoProductos[i].productoEnCarrito.urlImagen +
            "' class='img-fluid h-100' loading='lazy' alt=''>" +
            "<span>" +
            "<p>Marca: " +
            carritoProductos[i].productoEnCarrito.marca +
            "</p>" +
            "<p>Modelo: " +
            carritoProductos[i].productoEnCarrito.modelo +
            "</p>" +
            "<p>Cantidad: " +
            carritoProductos[i].cantidad +
            "</p>" +
            "</span>" +
            "<p>Precio: " +
            carritoProductos[i].productoEnCarrito.precio +
            "$</p>" +
            "<button class='btn btn-danger' onclick='carrito.eliminarProducto(event.target.value)' value='" +
            carritoProductos[i].productoEnCarrito.codigo +
            "'><i class='fas fa-trash-alt'></i></button>" +
            "</div>";
    }

    output +=
        "<p>Total de la compra: <span id='total'>" +
        calcularTotal(carritoProductos) +
        "</span> $</p>" +
        "<button class='btn btn-danger' onclick='carrito.vaciarCarrito()'>Vaciar carrito</button> ";
    return output;
}

$("#cart").append(mostrarCarrito(carrito.productos));

var botonesAgregarCarrito = $(".agregarCarrito");
function imprimirDatosProducto(botonesAgregar, baseDeDatos) {
    for (let i = 0; i < botonesAgregar.length; i++) {
        let padre = $(botonesAgregar[i]).parent();
        for (let j = 0; j < baseDeDatos.length; j++) {
            if (botonesAgregar[i].value == baseDeDatos[j].codigo) {
                $(padre)
                    .find(".textoComponente")
                    .append(
                        "<p>Marca: " +
                            baseDeDatos[j].marca +
                            "</p>" +
                            "<p>Modelo: " +
                            baseDeDatos[j].modelo +
                            "</p>" +
                            "<p>Compatibilidad: " +
                            baseDeDatos[j].compatibilidad +
                            "</p>" +
                            "<p>Precio: $" +
                            baseDeDatos[j].precio +
                            "</p>"
                    );
                break;
            }
        }
    }
}

$(".toggle-button").click(function () {
    $(".navBar li").toggle();
});

$(".grid").append(
    "<span class='botonOcultarNav'><button class='btn btn-light'><i class='fas fa-eye-slash'></i></button><small>Navegacion</small></span>"
);
$(".botonOcultarNav button").click(function () {
    $(".navBar").slideToggle(500);
});

var botonesDesplegablesMobile = $(".desplegable i");
function botonesDesplegables(botones) {
    for (let i = 0; i > botones.length; i++) {
        botones[i].click(function () {
            console.log(i);
            $(".desplegable").css("max-height", "400px");
        });
    }
}
botonesDesplegables(botonesDesplegablesMobile);

var baseDatos = [];
$.get("/js/baseDatos.json", function (data) {
    baseDatos = data;
    imprimirDatosProducto(botonesAgregarCarrito, baseDatos);
});

function borrarProductoDom(codigoBorrar) {
    var botonesBorrarProductos = $(".elementoCarrito button");
    var padreBotones;
    for (let i = 0; i < botonesBorrarProductos.length; i++) {
        if (codigoBorrar == botonesBorrarProductos[i].value) {
            padreBotones = $(botonesBorrarProductos[i]).parent();
            padreBotones.remove();
        }
    }
}

function calcularTotal(carritoProductos) {
    let totalCompra = 0;

    for (let i = 0; i < carritoProductos.length; i++) {
        totalCompra += Number(carritoProductos[i].productoEnCarrito.precio);
    }
    totalCompra = totalCompra.toFixed(2);

    let cambiarEnDom = $("#total");
    cambiarEnDom.text(totalCompra);

    return totalCompra;
}
