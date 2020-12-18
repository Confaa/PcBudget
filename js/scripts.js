function Carrito() {
    this.productos = [];

    this.agregarProducto = function (item) {
        this.productos.push(item);
        localStorage.setItem("carrito", JSON.stringify(this.productos));
        alert("Agregado al carrito");
        cantidadProductosCarrito(this.productos);
        agregarProductoNav(item);
    };

    this.eliminarProducto = function (codigoBorrar) {
        this.productos = this.productos.filter(function (productos) {
            return productos.productoEnCarrito.codigo != codigoBorrar;
        });
        localStorage.setItem("carrito", JSON.stringify(this.productos));
        borrarProductoDom(codigoBorrar);
        calcularTotal(this.productos);
        cantidadProductosCarrito(this.productos);
    };

    this.vaciarCarrito = function () {
        this.productos.splice(0);
        localStorage.setItem("carrito", JSON.stringify(this.productos));
        $(".elementoCarrito").remove();
        calcularTotal(this.productos);
        cantidadProductosCarrito(this.productos);
    };

    this.levantarProductosEnNavegador = function () {
        if (localStorage.getItem("carrito") != null)
            this.productos = JSON.parse(localStorage.getItem("carrito"));
    };

    this.mostrarCarrito = function () {
        for (let i = 0; i < this.productos.length; i++) {
            agregarProductoCarrito(this.productos[i]);
            agregarProductoNav(this.productos[i]);
        }
        $("#cart").append(
            "<p>Total de la compra: <span id='total'>" +
                calcularTotal(this.productos) +
                "</span> $</p>" +
                "<button class='btn btn-danger' onclick='carrito.vaciarCarrito()'>Vaciar carrito</button> "
        );
        $(".carritoNavBar ul").append(
            "<a href='/views/carrito.html' class='irCarrito'>Ir al carrito</a>"
        );
        cantidadProductosCarrito(this.productos);
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

let botonesAgregarCarrito = document.getElementsByClassName("agregarCarrito");

let agregarEventosProductos = (botones) => {
    for (let i = 0; i < botones.length; i++) {
        let padre = $(botones[i]).parent();
        botones[i].addEventListener("click", function () {
            let cantidad = Number($(padre).find("input").val());
            $(padre).find("input").val(1);
            comparar(baseDatos, botones[i].value, cantidad);
        });
    }
};

function comparar(baseDeDatos, codigoBoton, cantidad) {
    for (i = 0; i < baseDeDatos.length; i++) {
        if (baseDeDatos[i].codigo == codigoBoton) {
            esta = estaEnCarrito(carrito.productos, codigoBoton, cantidad);
            if (esta == false) {
                let aux = new ProductoEnCarrito(baseDeDatos[i], cantidad);
                carrito.agregarProducto(aux);
            }
        }
    }
}

let estaEnCarrito = (carritoProductos, codigo, cant) => {
    let esta = false;
    for (let i = 0; i < carritoProductos.length; i++) {
        if (carritoProductos[i].productoEnCarrito.codigo == codigo) {
            console.log(cant);
            console.log(carritoProductos[i].cantidad);
            carritoProductos[i].cantidad += cant;
            console.log(carritoProductos[i].cantidad);
            esta = true;
            localStorage.setItem("carrito", JSON.stringify(carritoProductos));
            cantidadProductosCarrito(carritoProductos);
            alert("Cantidad actualizada");
            $(
                ".carritoNavBar ul li:nth-child(" +
                    (carritoProductos.length - i) +
                    ") p:first-child"
            ).text(carritoProductos[i].cantidad + "x");
        }
    }
    return esta;
};
agregarEventosProductos(botonesAgregarCarrito);

let carrito = new Carrito();
carrito.levantarProductosEnNavegador();

console.log(carrito.productos);

carrito.mostrarCarrito();

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
/* 
let botonesDesplegablesMobile = $(".desplegable i");
function botonesDesplegables(botones) {
    for (let i = 0; i > botones.length; i++) {
        botones[i].click(function () {
            console.log(i);
            $(".desplegable").css("max-height", "400px");
        });
    }
}
botonesDesplegables(botonesDesplegablesMobile); */

let baseDatos = [];
$.get("./../js/baseDatos.json", function (data) {
    baseDatos = data;
    imprimirDatosProducto(botonesAgregarCarrito, baseDatos);
});

function borrarProductoDom(codigoBorrar) {
    let botonesBorrarProductos = $(".elementoCarrito button");

    for (let i = 0; i < botonesBorrarProductos.length; i++) {
        if (codigoBorrar == botonesBorrarProductos[i].value) {
            let padreBotones = $(botonesBorrarProductos[i]).parent();
            padreBotones.remove();
        }
    }
    let botonesBorrarNav = $(".carritoNavBar li i");
    for (let i = 0; i < botonesBorrarNav.length; i++) {
        if (codigoBorrar == $(botonesBorrarNav[i]).attr("value")) {
            let padre = $(botonesBorrarNav[i]).parent();
            $(padre).remove();
        }
    }
}

function calcularTotal(carritoProductos) {
    let totalCompra = 0;

    for (let i = 0; i < carritoProductos.length; i++) {
        totalCompra += Number(
            carritoProductos[i].productoEnCarrito.precio *
                carritoProductos[i].cantidad
        );
    }
    totalCompra = totalCompra.toFixed(2);

    let cambiarEnDom = $("#total");
    cambiarEnDom.text(totalCompra);

    return totalCompra;
}
function cantidadProductosCarrito(carritoProductos) {
    let cantidadProductos = Number(carritoProductos.length);
    if (cantidadProductos == 0) {
        $(".irCarrito").css("display", "none");
    } else {
        $(".irCarrito").css("display", "block");
    }
    $(".carritoNavBar i").append("<span>" + cantidadProductos + "</span>");
    $(".carritoNavBar i span").addClass(
        "animate__animated animate__fadeIn animate__fast"
    );
}

/* let crearProducto = (producto) => {
    let crear = new Producto(
        producto.tipo,
        producto.marca,
        producto.modelo,
        producto.precio,
        producto.compatibilidad,
        producto.urlImagen,
        producto.codigo
    );
}; */
let botonesRestar = $(".rest");
let botonesSumar = $(".sum");

let sumaUnidades = (sumar) => {
    for (let i = 0; i < sumar.length; i++) {
        $(sumar[i]).click(() => {
            let padre = $(sumar[i]).parent();
            let valorActual = Number($(padre).find("input").val());
            if (valorActual < 99) {
                console.log(valorActual);
                $(padre)
                    .find("input")
                    .val(valorActual + 1);
                console.log($(padre).find("input").val());
            }
        });
    }
};

let restaUnidades = (restar) => {
    for (let i = 0; i < restar.length; i++) {
        $(restar[i]).click(() => {
            let padre = $(restar[i]).parent();
            let valorActual = Number($(padre).find("input").val());
            if (valorActual > 1) {
                console.log(valorActual);
                $(padre)
                    .find("input")
                    .val(valorActual - 1);
                console.log($(padre).find("input").val());
            }
        });
    }
};

sumaUnidades(botonesSumar);
restaUnidades(botonesRestar);

$(".carritoNavBar ul").append(carritoNavBar(carrito.productos));

function agregarProductoNav(producto) {
    let output =
        "<li><p>" +
        producto.cantidad +
        "x </p>" +
        "<p>" +
        producto.productoEnCarrito.marca +
        " " +
        producto.productoEnCarrito.modelo +
        "</p>" +
        "<i class='fas fa-times' onclick='carrito.eliminarProducto(attributes[2].value)' value='" +
        producto.productoEnCarrito.codigo +
        "'></i>" +
        "</li>";
    $(".carritoNavBar ul").prepend(output);
}

function agregarProductoCarrito(producto) {
    let output =
        "<div class='elementoCarrito'>" +
        "<img src='" +
        producto.productoEnCarrito.urlImagen +
        "' class='img-fluid h-100' loading='lazy' alt=''>" +
        "<span>" +
        "<p>Marca: " +
        producto.productoEnCarrito.marca +
        "</p>" +
        "<p>Modelo: " +
        producto.productoEnCarrito.modelo +
        "</p>" +
        "<p>Cantidad: " +
        producto.cantidad +
        "</p>" +
        "</span>" +
        "<p>Precio: " +
        (producto.productoEnCarrito.precio * producto.cantidad).toFixed(2) +
        "$</p>" +
        "<button class='btn btn-danger' onclick='carrito.eliminarProducto(event.target.value)' value='" +
        producto.productoEnCarrito.codigo +
        "'><i class='fas fa-trash-alt'></i></button>" +
        "</div>";

    $("#cart").prepend(output);
}

/* if (carritoProductos.length > 0) {
    output += "<a href='/views/carrito.html' class='irCarrito'>Ir al carrito</a>";
} */
