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
    };

    this.vaciarCarrito = function () {
        this.productos.splice(0);
        localStorage.setItem("carrito", JSON.stringify(this.productos));
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
            "<div>" +
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

var baseDatos = [
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i9-10900K",
        "precio": 529.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/cpuIntel/Intel-Core-i9-10900K.png",
        "codigo": 1000
    },
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i9-9900K",
        "precio": 383.99,
        "compatibilidad": "Intel - Socket LGA1151",
        "urlImagen": "../img/fotosProductos/cpuIntel/Intel-Core-i9-9900K.png",
        "codigo": 1001
    },
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i9-10850K",
        "precio": 449.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/cpuIntel/Intel-Core-i9-10850K.png",
        "codigo": 1002
    },
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i7-10700K",
        "precio": 369.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos//cpuIntel/Intel-Core-i7-10700K.png",
        "codigo": 1003
    },
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i7-9700k",
        "precio": 289.99,
        "compatibilidad": "Intel - Socket LGA1151",
        "urlImagen": "../img/fotosProductos/cpuIntel/Intel-Core-i7-9700K.png",
        "codigo": 1004
    },
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i5-10600K",
        "precio": 264.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/cpuIntel/Intel-Core-i5-10600K.png",
        "codigo": 1005
    },
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i5-10500",
        "precio": 239.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/cpuIntel/Intel-Core-i5-10500.png",
        "codigo": 1006
    },
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i5-9600K",
        "precio": 194.99,
        "compatibilidad": "Intel - Socket LGA1151",
        "urlImagen": "../img/fotosProductos/cpuIntel/Intel-Core-i5-9600K.png",
        "codigo": 1007
    },
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i5-10400",
        "precio": 174.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/cpuIntel/Intel-Core-i5-10400.png",
        "codigo": 1008
    },
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i3-10320",
        "precio": 196,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/cpuIntel/Intel-Core-i3-10320.png",
        "codigo": 1009
    },
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i3-10100",
        "precio": 113,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/cpuIntel/Intel-Core-i3-10100.png",
        "codigo": 1010
    },
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i3-9100",
        "precio": 109.99,
        "compatibilidad": "Intel - Socket LGA1151",
        "urlImagen": "../img/fotosProductos/cpuIntel/Intel-Core-i3-9100.png",
        "codigo": 1011
    },
    {
        "tipo": "Mother",
        "marca": "Asus",
        "modelo": "ROG STRIX Z490-E GAMING",
        "precio": 286.62,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/motherIntel/Asus-ROG-STRIX-Z490-E-GAMING.png",
        "codigo": 1012
    },
    {
        "tipo": "Mother",
        "marca": "MSI",
        "modelo": "MPG Z490 GAMING EDGE WIFI",
        "precio": 199.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/motherIntel/MSI-MPG-Z490-GAMING-EDGE-WIFI.png",
        "codigo": 1013
    },
    {
        "tipo": "Mother",
        "marca": "MSI",
        "modelo": "MPG Z490 GAMING PLUS",
        "precio": 169.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/motherIntel/MSI-MPG-Z490-GAMING-PLUS.png",
        "codigo": 1014
    },
    {
        "tipo": "Mother",
        "marca": "Asus",
        "modelo": "PRIME Z490-A",
        "precio": 209.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/motherIntel/Asus-PRIME-Z490-A.png",
        "codigo": 1015
    },
    {
        "tipo": "Mother",
        "marca": "MSI",
        "modelo": "MAG Z490 TOMAHAWK",
        "precio": 189.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/motherIntel/MSI-MAG-Z490-TOMAHAWK.png",
        "codigo": 1016
    },
    {
        "tipo": "Mother",
        "marca": "Asus",
        "modelo": "ROG MAXIMUS XII FORMULA",
        "precio": 496.88,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/motherIntel/Asus-ROG-MAXIMUS-XII-FORMULA.png",
        "codigo": 1017
    },
    {
        "tipo": "Mother",
        "marca": "Gigabyte",
        "modelo": "Z490 AORUS ULTRA",
        "precio": 290.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/motherIntel/Gigabyte-Z490-AORUS-ULTRA.png",
        "codigo": 1018
    },
    {
        "tipo": "Mother",
        "marca": "ASRock",
        "modelo": "Z490 Taichi",
        "precio": 351.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/motherIntel/ASRock-Z490-Taichi.png",
        "codigo": 1019
    },
    {
        "tipo": "Mother",
        "marca": "Asus",
        "modelo": "ROG STRIX Z390-E GAMING",
        "precio": 325.07,
        "compatibilidad": "Intel - Socket LGA1151",
        "urlImagen": "../img/fotosProductos/motherIntel/Asus-ROG-STRIX-Z390-E-GAMING.png",
        "codigo": 1020
    },
    {
        "tipo": "Mother",
        "marca": "MSI",
        "modelo": "B360 GAMING PLUS",
        "precio": 99.99,
        "compatibilidad": "Intel - Socket LGA1151",
        "urlImagen": "../img/fotosProductos/motherIntel/MSI-B360-GAMING-PLUS.png",
        "codigo": 1021
    },
    {
        "tipo": "Mother",
        "marca": "ASRock",
        "modelo": "B365M Phantom Gaming 4",
        "precio": 102.99,
        "compatibilidad": "Intel - Socket LGA1151",
        "urlImagen": "../img/fotosProductos/motherIntel/ASRock-B365M-Phantom-Gaming-4.png",
        "codigo": 1022
    },
    {
        "tipo": "Mother",
        "marca": "MSI",
        "modelo": "Z270 GAMING PRO CARBON",
        "precio": 381.49,
        "compatibilidad": "Intel - Socket LGA1151",
        "urlImagen": "../img/fotosProductos/motherIntel/MSI-Z270-GAMING-PRO-CARBON.png",
        "codigo": 1023
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 5 3600",
        "precio": 239.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-5-3600.png",
        "codigo": 1024
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 7 3700X",
        "precio": 304.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-7-3700X.png",
        "codigo": 1025
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 9 3900X",
        "precio": 429.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-9-3900X.png",
        "codigo": 1026
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 3 3100",
        "precio": 118.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-3-3100.png",
        "codigo": 1027
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 5 5600X",
        "precio": 417.12,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-5-5600X.png",
        "codigo": 1028
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 7 3800X",
        "precio": 339.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-7-3800X.png",
        "codigo": 1029
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 3 3200G",
        "precio": 99.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-3-3200G.png",
        "codigo": 1030
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 5 2600",
        "precio": 149.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-5-2600.png",
        "codigo": 1031
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 9 3950X",
        "precio": 704.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-9-3950X.png",
        "codigo": 1032
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 5 2600X",
        "precio": 165.88,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-5-2600X.png",
        "codigo": 1033
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 7 2700",
        "precio": 369.76,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-7-2700.png",
        "codigo": 1034
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 5 2400G",
        "precio": 267,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-5-2400G.png",
        "codigo": 1035
    },
    {
        "tipo": "Mother",
        "marca": "MSI",
        "modelo": "MAG B550 TOMAHAWK",
        "precio": 179.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/MSI-MAG-B550-TOMAHAWK.png",
        "codigo": 1036
    },
    {
        "tipo": "Mother",
        "marca": "Gigabyte",
        "modelo": "B550M DS3H",
        "precio": 94.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/Gigabyte-B550M-DS3H.png",
        "codigo": 1037
    },
    {
        "tipo": "Mother",
        "marca": "Asus",
        "modelo": "ROG Strix X570-E Gaming",
        "precio": 299.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/Asus-ROG-Strix-X570-E-Gaming.png",
        "codigo": 1038
    },
    {
        "tipo": "Mother",
        "marca": "Asus",
        "modelo": "ROG Crosshair VIII Hero (WI-FI)",
        "precio": 379.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/Asus-ROG-Crosshair-VIII-Hero-WIFI.png",
        "codigo": 1039
    },
    {
        "tipo": "Mother",
        "marca": "ASRock",
        "modelo": "B550M Pro4",
        "precio": 109.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/ASRock-B550M-Pro4.png",
        "codigo": 1040
    },
    {
        "tipo": "Mother",
        "marca": "Gigabyte",
        "modelo": "B550I AORUS PRO AX",
        "precio": 179.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/Gigabyte-B550I-AORUS-PRO-AX.png",
        "codigo": 1041
    },
    {
        "tipo": "Mother",
        "marca": "Gigabyte",
        "modelo": "B550 AORUS ELITE",
        "precio": 156.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/Gigabyte-B550-AORUS-ELITE.png",
        "codigo": 1042
    },
    {
        "tipo": "Mother",
        "marca": "MSI",
        "modelo": "MEG X570 UNIFY",
        "precio": 299.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/MSI-MEG-X570-UNIFY.png",
        "codigo": 1043
    },
    {
        "tipo": "Mother",
        "marca": "Asus",
        "modelo": "ROG Crosshair VIII Hero",
        "precio": 359.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/Asus-ROG-Crosshair-VIII-Hero.png",
        "codigo": 1044
    },
    {
        "tipo": "Mother",
        "marca": "Asus",
        "modelo": "ROG Crosshair VIII Formula",
        "precio": 549.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/Asus-ROG-Crosshair-VIII-Formula.png",
        "codigo": 1045
    },
    {
        "tipo": "Mother",
        "marca": "MSI",
        "modelo": "MEG X570 GODLIKE",
        "precio": 629.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/MSI-MEG-X570-GODLIKE.png",
        "codigo": 1046
    },
    {
        "tipo": "Mother",
        "marca": "Gigabyte",
        "modelo": "A520M S2H",
        "precio": 69.98,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/Gigabyte-A520M-S2H.png",
        "codigo": 1047
    },
    {
        "tipo": "Cooler",
        "marca": "Cooler Master",
        "modelo": "Hyper 212 EVO",
        "precio": 34.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/cooler/Cooler-Master-Hyper-212-EVO.png",
        "codigo": 1048
    },
    {
        "tipo": "Cooler",
        "marca": "Corsair",
        "modelo": "H100i RGB PLATINUM",
        "precio": 159.49,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/cooler/Corsair-H100i-RGB-PLATINUM.png",
        "codigo": 1049
    },
    {
        "tipo": "Cooler",
        "marca": "NZXT",
        "modelo": "KRAKEN Z73",
        "precio": 274.06,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/cooler/NZXT-Kraken-Z73.png",
        "codigo": 1050
    },
    {
        "tipo": "Cooler",
        "marca": "Noctua",
        "modelo": "NH-D15",
        "precio": 89.95,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/cooler/Noctua-NH-D15.png",
        "codigo": 1051
    },
    {
        "tipo": "Cooler",
        "marca": "Cooler Master",
        "modelo": "MasterLiquid ML240L RGB",
        "precio": 49.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/cooler/Cooler-Master-MasterLiquid-ML240L-RGB.png",
        "codigo": 1052
    },
    {
        "tipo": "Cooler",
        "marca": "Thermaltake",
        "modelo": "UX100",
        "precio": 19.98,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/cooler/Thermaltake-UX100.png",
        "codigo": 1053
    },
    {
        "tipo": "RAM",
        "marca": "Corsair",
        "modelo": "Vengeance LPX 16GB (2x8GB)",
        "precio": 68.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/ram/Crucial-Ballistix-16GB-2x8GB.png",
        "codigo": 1054
    },
    {
        "tipo": "RAM",
        "marca": "Corsair",
        "modelo": "Vengeance RGB Pro 32GB (2x16GB)",
        "precio": 142.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/ram/Corsair-Vengeance-RGB-Pro-32GB-2x16GB.png",
        "codigo": 1055
    },
    {
        "tipo": "RAM",
        "marca": "G.Skill",
        "modelo": "Aegis 8GB (1x8GB)",
        "precio": 28.98,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/ram/G.Skill-Aegis-8GB-1x8GB.png",
        "codigo": 1056
    },
    {
        "tipo": "RAM",
        "marca": "Crucial",
        "modelo": "Ballistix 16GB (2x8GB)",
        "precio": 74.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/ram/Crucial-Ballistix-16GB-2x8GB.png",
        "codigo": 1057
    },
    {
        "tipo": "RAM",
        "marca": "Crucial",
        "modelo": "Ballistix 32GB (2x16GB)",
        "precio": 149.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/ram/Crucial-Ballistix-32GB-2x16GB.png",
        "codigo": 1058
    },
    {
        "tipo": "RAM",
        "marca": "ADATA",
        "modelo": "XPG Z1 16GB (2x8GB)",
        "precio": 51.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/ram/ADATA-XPG-Z1-16GB-2x8GB.png",
        "codigo": 1059
    },
    {
        "tipo": "GPU",
        "marca": "MSI - GeForce",
        "modelo": "Ventus XS OC - GF GTX 1660 SUPER 6GB",
        "precio": 285.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/gpu/MSI-Ventus-XS-OC-GF-GTX-1660-SUPER-6GB.png",
        "codigo": 1060
    },
    {
        "tipo": "GPU",
        "marca": "MSI - GeForce",
        "modelo": "Gaming X - GF GTX 1660 Ti 6GB",
        "precio": 274.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/gpu/MSI-Gaming-X-GF-GTX-1660-Ti-6GB.png",
        "codigo": 1061
    },
    {
        "tipo": "GPU",
        "marca": "Gigabyte - GeForce",
        "modelo": "Windforce OC - GF GTX 1650 SUPER 4GB",
        "precio": 258.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/gpu/Gigabyte-Windforce-OC-GF-GTX-1650-SUPER-4GB.png",
        "codigo": 1062
    },
    {
        "tipo": "GPU",
        "marca": "MSI - AMD",
        "modelo": "Gaming X - AMD Radeon RX 5700 XT 8GB",
        "precio": 384.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/gpu/MSI-Gaming-X-AMD-Radeon-RX-5700-XT-8GB.png",
        "codigo": 1063
    },
    {
        "tipo": "GPU",
        "marca": "MSI - AMD",
        "modelo": "Armor OC - AMD Radeon RX 580 8GB",
        "precio": 209.0,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/gpu/MSI-Armor-OC-AMD-Radeon-RX-580-8GB.png",
        "codigo": 1064
    },
    {
        "tipo": "GPU",
        "marca": "MSI - GeForce",
        "modelo": "Gaming X Trio - GF GTX 2080 SUPER 8GB",
        "precio": 869.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/gpu/MSI-Gaming-X-Trio-GF-GTX-2080-SUPER-8GB.png",
        "codigo": 1065
    },
    {
        "tipo": "Case",
        "marca": "NZXT",
        "modelo": "H510 ATX Mid Tower",
        "precio": 69.98,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/case/NZXT-H510-1.png",
        "codigo": 1066
    },
    {
        "tipo": "Case",
        "marca": "Corsair",
        "modelo": "275R Airflow ATX Mid Tower",
        "precio": 79.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/case/Corsair-275R-1.png",
        "codigo": 1067
    },
    {
        "tipo": "Case",
        "marca": "Corsair",
        "modelo": "Carbide 175R RGB ATX Mid Tower",
        "precio": 59.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/case/Corsair-Carbide-175R-RGB-1.png",
        "codigo": 1068
    },
    {
        "tipo": "Case",
        "marca": "Cougar",
        "modelo": "MX330 ATX Mid Tower",
        "precio": 44.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/case/Cougar-MX330-1.png",
        "codigo": 1069
    },
    {
        "tipo": "Case",
        "marca": "Aerocool",
        "modelo": "Cylon ATX Mid Tower",
        "precio": 50.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/case/Aerocool-Cylon-1.png",
        "codigo": 1070
    },
    {
        "tipo": "Case",
        "marca": "Lian Li",
        "modelo": "O11D XL-X ATX Full Tower",
        "precio": 243.62,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/case/Lian-Li-O11D-XL-X-1.png",
        "codigo": 1071
    },
    {
        "tipo": "Power Supply",
        "marca": "Corsair",
        "modelo": "RM (2019) 80+ Gold 750W",
        "precio": 124.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/powerSupply/Corsair-RM-2019-80-Gold-750W.png",
        "codigo": 1072
    },
    {
        "tipo": "Power Supply",
        "marca": "EVGA",
        "modelo": "BQ 80+ Bronce 500W",
        "precio": 69.94,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/powerSupply/EVGA-BQ-80-Bronce-500W.png",
        "codigo": 1073
    },
    {
        "tipo": "Power Supply",
        "marca": "Cooler Master",
        "modelo": "MWE Gold 80+ Gold 650W",
        "precio": 99.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/powerSupply/Cooler-Master-MWE-Gold-80-Gold-650W.png",
        "codigo": 1074
    },
    {
        "tipo": "Power Supply",
        "marca": "Thermaltake",
        "modelo": "Smart 80+ White 500W",
        "precio": 37.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/powerSupply/Thermaltake-Smart-80-White-500W.png",
        "codigo": 1075
    },
    {
        "tipo": "Power Supply",
        "marca": "Corsair",
        "modelo": "HX Platinum 80+ Platinum 1000W",
        "precio": 282.86,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/powerSupply/Corsair-HX-Platinum-80-Platinum-1000W.png",
        "codigo": 1076
    },
    {
        "tipo": "Power Supply",
        "marca": "EVGA",
        "modelo": "B5 80+ Bronce 550W",
        "precio": 37.86,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/powerSupply/EVGA-B5-80-Bronce-550W.png",
        "codigo": 1077
    },
    {
        "tipo": "OS",
        "marca": "Microsoft",
        "modelo": "Windows 10 Home",
        "precio": 108.78,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/os/Windows-10.png",
        "codigo": 1078
    },
    {
        "tipo": "OS",
        "marca": "Microsoft",
        "modelo": "Windows 10 Pro",
        "precio": 139.88,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/os/Windows-10.png",
        "codigo": 1079
    },
    {
        "tipo": "OS",
        "marca": "Linux",
        "modelo": "A elección del cliente",
        "precio": 0,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/os/Linux.svg",
        "codigo": 1080
    },
    {
        "tipo": "Monitor",
        "marca": "AOC",
        "modelo": "C24G1 23.6' Full HD 144Hz",
        "precio": 185.0,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/monitor/AOC-C24G1-23.6-Full-HD-144Hz-1.png",
        "codigo": 1081
    },
    {
        "tipo": "Monitor",
        "marca": "MSI",
        "modelo": "Optix G24C4 23.6' Full HD 144Hz",
        "precio": 449.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/monitor/MSI-Optix-G24C4-23.6-Full-HD-144Hz-1.png",
        "codigo": 1082
    },
    {
        "tipo": "Monitor",
        "marca": "Asus",
        "modelo": "TUF Gaming VG279QM 27' Full HD 280Hz IPS",
        "precio": 399.0,
        "compatibilidad": "All",
        "urlImagen":
            "../img/fotosProductos/monitor/Asus-TUF-Gaming-VG279QM-27-Full-HD-280Hz-IPS-1.png",
        "codigo": 1083
    },
    {
        "tipo": "Monitor",
        "marca": "LG",
        "modelo": "24MK400H-B 24' Full HD 75Hz IPS",
        "precio": 109.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/monitor/LG-24MK400H-B-24-Full-HD-75Hz-IPS-1.png",
        "codigo": 1084
    },
    {
        "tipo": "Storage HDD",
        "marca": "Seagate",
        "modelo": "Barracuda Compute 2TB",
        "precio": 54.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/storage/Seagate-Barracuda-Compute-2TB.png",
        "codigo": 1085
    },
    {
        "tipo": "Storage SSD",
        "marca": "Samsung",
        "modelo": "970 Evo 500GB M.2",
        "precio": 69.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/storage/Samsung-970-Evo-500GB-M.2.png",
        "codigo": 1086
    },
    {
        "tipo": "Storage HDD",
        "marca": "Western Digital",
        "modelo": "Caviar Blue 1TB",
        "precio": 44.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/storage/Western-Digital-Caviar-Blue-1TB.png",
        "codigo": 1087
    },
    {
        "tipo": "Storage SSD",
        "marca": "Samsung",
        "modelo": "860 Evo 1TB SATA III 6Gb/s",
        "precio": 119.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/storage/Samsung-860-Evo-1TB-SATAIII-6Gbs.png",
        "codigo": 1088
    },
    {
        "tipo": "Storage SSD",
        "marca": "Kingston",
        "modelo": "A400 240GB SATA III 6Gb/s",
        "precio": 25.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/storage/Kingston-A400-240GB-SATAIII-6Gbs.png",
        "codigo": 1089
    },
    {
        "tipo": "Storage SSD",
        "marca": "Western Digital",
        "modelo": "Blue 250GB M.2",
        "precio": 25.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/storage/Western-Digital-Blue-250GB-M.2.png",
        "codigo": 1090
    }
];
