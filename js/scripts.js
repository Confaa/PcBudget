function Carrito() {
    this.productos = [];

    this.agregarProducto = function (item) {
        this.productos.push(item);
        localStorage.setItem("carrito", JSON.stringify(this.productos));
        alert("Agregado al carrito");
        cantidadProductosCarrito(this.productos);
    };

    this.eliminarProducto = function (codigoBorrar) {
        this.productos = this.productos.filter(function (productos) {
            return productos.productoEnCarrito.codigo != codigoBorrar;
        });
        console.log(codigoBorrar);
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
        let output = "";

        for (let i = 0; i < this.productos.length; i++) {
            output +=
                "<div class='elementoCarrito'>" +
                "<img src='" +
                this.productos[i].productoEnCarrito.urlImagen +
                "' class='img-fluid h-100' loading='lazy' alt=''>" +
                "<span>" +
                "<p>Marca: " +
                this.productos[i].productoEnCarrito.marca +
                "</p>" +
                "<p>Modelo: " +
                this.productos[i].productoEnCarrito.modelo +
                "</p>" +
                "<p>Cantidad: " +
                this.productos[i].cantidad +
                "</p>" +
                "</span>" +
                "<p>Precio: " +
                (this.productos[i].productoEnCarrito.precio * this.productos[i].cantidad).toFixed(
                    2
                ) +
                "$</p>" +
                "<button class='btn btn-danger' onclick='carrito.eliminarProducto(event.target.value)' value='" +
                this.productos[i].productoEnCarrito.codigo +
                "'><i class='fas fa-trash-alt'></i></button>" +
                "</div>";
        }

        output +=
            "<p>Total de la compra: <span id='total'>" +
            calcularTotal(this.productos) +
            "</span> $</p>" +
            "<button class='btn btn-danger' onclick='carrito.vaciarCarrito()'>Vaciar carrito</button> ";
        cantidadProductosCarrito(this.productos);
        return output;
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
        }
    }
    return esta;
};
agregarEventosProductos(botonesAgregarCarrito);

let carrito = new Carrito();
carrito.levantarProductosEnNavegador();

console.log(carrito.productos);

$("#cart").append(carrito.mostrarCarrito());

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
}

function calcularTotal(carritoProductos) {
    let totalCompra = 0;

    for (let i = 0; i < carritoProductos.length; i++) {
        totalCompra += Number(
            carritoProductos[i].productoEnCarrito.precio * carritoProductos[i].cantidad
        );
    }
    totalCompra = totalCompra.toFixed(2);

    let cambiarEnDom = $("#total");
    cambiarEnDom.text(totalCompra);

    return totalCompra;
}
function cantidadProductosCarrito(carritoProductos) {
    let cantidadProductos = Number(carritoProductos.length);

    $(".carritoNavBar i").append("<span>" + cantidadProductos + "</span>");
    $(".carritoNavBar i span").addClass("animate__animated animate__fadeIn animate__fast");
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

let carritoNavBar = (carritoProductos) => {
    let output = "";
    for (let i = 0; i < carritoProductos.length; i++) {
        output +=
            "<li><p>" +
            carritoProductos[i].cantidad +
            "x </p>" +
            "<p>" +
            carritoProductos[i].productoEnCarrito.marca +
            " " +
            carritoProductos[i].productoEnCarrito.modelo +
            "</p>" +
            "<i class='fas fa-times'></i>" +
            "</li>";
    }
    return output;
};

$(".carritoNavBar ul").append(carritoNavBar(carrito.productos));
