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
    };

    this.vaciarCarrito = function () {
        this.productos.splice(0);
        localStorage.setItem("carrito", JSON.stringify(this.productos));
        $(".elementoCarrito").remove();
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

function Comparar(datos, codigoBoton) {
    for (i = 0; i < datos.length; i++) {
        if (datos[i].codigo == codigoBoton) {
            carrito.agregarProducto(datos[i]);
        }
    }
}

var botonesProductos = document.getElementsByClassName("agregarCarrito");

function agregarEventosProductos(botones) {
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", function () {
            Comparar(baseDatos, botones[i].value);
        });
    }
}

var carrito = new Carrito();
carrito.levantarProductosEnNavegador();
agregarEventosProductos(botonesProductos);

console.log(carrito.productos);

function mostrarCarrito(carritoProductos) {
    var output = "";
    var totalCompra = 0;
    for (let i = 0; i < carritoProductos.length; i++) {
        output +=
            "<div class='elementoCarrito'>" +
            "<img src='" +
            carritoProductos[i].urlImagen +
            "' class='img-fluid h-100' loading='lazy' alt=''>" +
            "<span>" +
            "<p>Marca: " +
            carritoProductos[i].marca +
            "</p>" +
            "<p>Modelo: " +
            carritoProductos[i].modelo +
            "</p>" +
            "</span>" +
            "<p>Precio: " +
            carritoProductos[i].precio +
            "$</p>" +
            "<button class='btn btn-danger' onclick='carrito.eliminarProducto(event.target.value)' value='" +
            carritoProductos[i].codigo +
            "'><i class='fas fa-trash-alt'></i></button>" +
            "</div>";
        totalCompra += Number(carritoProductos[i].precio);
    }
    output +=
        "<p>Total de la compra: " +
        totalCompra +
        "$</p>" +
        "<button class='btn btn-danger' onclick='carrito.vaciarCarrito()'>Vaciar carrito</button> ";
    return output;
}

$("#cart").append(mostrarCarrito(carrito.productos));

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
