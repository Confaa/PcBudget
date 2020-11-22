function Presupuesto() {
    this.producto = [];

    this.agregarProducto = function (item) {
        this.producto.push(item);
        localStorage.setItem("lista", JSON.stringify(this.producto));
        /* alert("Agregado al presupuesto"); */
    };

    this.eliminarProducto = function (codigoProductoBorrar) {
        this.producto = this.producto.filter(function (producto) {
            return producto.codigoProducto != codigoProductoBorrar;
        });
        localStorage.setItem("lista", JSON.stringify(this.producto));
    };

    this.vaciarCarrito = function () {
        this.producto.splice(0);
        localStorage.setItem("lista", JSON.stringify(this.producto));
    };

    this.base = function () {
        if (localStorage.getItem("lista") != null)
            this.producto = JSON.parse(localStorage.getItem("lista"));
    };
}

function Producto(tip, mar, mod, pre, comp, url, codPro) {
    this.tipo = tip;
    this.marca = mar;
    this.modelo = mod;
    this.precio = pre;
    this.compatibilidad = comp;
    this.urlImagen = url;
    this.codigoProducto = codPro;
}

function Comparar(lista, valor) {
    for (i = 0; i < lista.length; i++) {
        if (lista[i].codigoProducto == valor) {
            presupuesto.agregarProducto(lista[i]);
        }
    }
}

var botonesProductos = document.getElementsByClassName("agregarPresupuesto");

function agregarEventos(lista) {
    for (let i = 0; i < lista.length; i++) {
        lista[i].addEventListener("click", function () {
            Comparar(baseDatos, lista[i].value);
        });
    }
}

var presupuesto = new Presupuesto();
presupuesto.base();
agregarEventos(botonesProductos);

console.log(presupuesto.producto);
function vaciar() {
    presupuesto.vaciarCarrito();
}

/* function resaltarPresupuesto() {
    $("#presupuesto p").css("color", "yellow");
    $("#presupuesto div").css("border-color", "blue");
} */
function mostrarPresupuesto(lista) {
    var output = "";
    var totalCompra = 0;
    for (let i = 0; i < lista.length; i++) {
        output +=
            "<div>" +
            "<img src='" +
            lista[i].urlImagen +
            "' class='img-fluid h-100' loading='lazy' alt=''>" +
            "<span>" +
            "<p>Marca: " +
            lista[i].marca +
            "</p>" +
            "<p>Modelo: " +
            lista[i].modelo +
            "</p>" +
            "</span>" +
            "<p>Precio: " +
            lista[i].precio +
            "$</p>" +
            "<button class='btn btn-danger' onclick='presupuesto.eliminarProducto(event.target.value)' value='" +
            lista[i].codigoProducto +
            "'><i class='fas fa-trash-alt'></i></button>" +
            "</div>";
        totalCompra += Number(lista[i].precio);
    }
    output +=
        "<p>Total de la compra: " +
        totalCompra +
        "$</p>" +
        "<button class='btn btn-danger' onclick='presupuesto.vaciarCarrito()'>Vaciar carrito</button> " +
        "<button class='btn btn-primary' onclick='resaltarPresupuesto()'>Resaltar presupuesto</button> ";
    return output;
}

$("#presupuesto").append(mostrarPresupuesto(presupuesto.producto));

var baseDatos = [
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i9-10900K",
        "precio": 529.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/cpuIntel/Intel-Core-i9-10900K.png",
        "codigoProducto": 1000
    },
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i9-9900K",
        "precio": 383.99,
        "compatibilidad": "Intel - Socket LGA1151",
        "urlImagen": "../img/fotosProductos/cpuIntel/Intel-Core-i9-9900K.png",
        "codigoProducto": 1001
    },
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i9-10850K",
        "precio": 449.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/cpuIntel/Intel-Core-i9-10850K.png",
        "codigoProducto": 1002
    },
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i7-10700K",
        "precio": 369.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos//cpuIntel/Intel-Core-i7-10700K.png",
        "codigoProducto": 1003
    },
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i7-9700k",
        "precio": 289.99,
        "compatibilidad": "Intel - Socket LGA1151",
        "urlImagen": "../img/fotosProductos/cpuIntel/Intel-Core-i7-9700K.png",
        "codigoProducto": 1004
    },
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i5-10600K",
        "precio": 264.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/cpuIntel/Intel-Core-i5-10600K.png",
        "codigoProducto": 1005
    },
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i5-10500",
        "precio": 239.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/cpuIntel/Intel-Core-i5-10500.png",
        "codigoProducto": 1006
    },
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i5-9600K",
        "precio": 194.99,
        "compatibilidad": "Intel - Socket LGA1151",
        "urlImagen": "../img/fotosProductos/cpuIntel/Intel-Core-i5-9600K.png",
        "codigoProducto": 1007
    },
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i5-10400",
        "precio": 174.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/cpuIntel/Intel-Core-i5-10400.png",
        "codigoProducto": 1008
    },
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i3-10320",
        "precio": 196,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/cpuIntel/Intel-Core-i3-10320.png",
        "codigoProducto": 1009
    },
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i3-10100",
        "precio": 113,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/cpuIntel/Intel-Core-i3-10100.png",
        "codigoProducto": 1010
    },
    {
        "tipo": "CPU",
        "marca": "Intel",
        "modelo": "Core i3-9100",
        "precio": 109.99,
        "compatibilidad": "Intel - Socket LGA1151",
        "urlImagen": "../img/fotosProductos/cpuIntel/Intel-Core-i3-9100.png",
        "codigoProducto": 1011
    },
    {
        "tipo": "Mother",
        "marca": "Asus",
        "modelo": "ROG STRIX Z490-E GAMING",
        "precio": 286.62,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/motherIntel/Asus-ROG-STRIX-Z490-E-GAMING.png",
        "codigoProducto": 1012
    },
    {
        "tipo": "Mother",
        "marca": "MSI",
        "modelo": "MPG Z490 GAMING EDGE WIFI",
        "precio": 199.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/motherIntel/MSI-MPG-Z490-GAMING-EDGE-WIFI.png",
        "codigoProducto": 1013
    },
    {
        "tipo": "Mother",
        "marca": "MSI",
        "modelo": "MPG Z490 GAMING PLUS",
        "precio": 169.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/motherIntel/MSI-MPG-Z490-GAMING-PLUS.png",
        "codigoProducto": 1014
    },
    {
        "tipo": "Mother",
        "marca": "Asus",
        "modelo": "PRIME Z490-A",
        "precio": 209.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/motherIntel/Asus-PRIME-Z490-A.png",
        "codigoProducto": 1015
    },
    {
        "tipo": "Mother",
        "marca": "MSI",
        "modelo": "MAG Z490 TOMAHAWK",
        "precio": 189.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/motherIntel/MSI-MAG-Z490-TOMAHAWK.png",
        "codigoProducto": 1016
    },
    {
        "tipo": "Mother",
        "marca": "Asus",
        "modelo": "ROG MAXIMUS XII FORMULA",
        "precio": 496.88,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/motherIntel/Asus-ROG-MAXIMUS-XII-FORMULA.png",
        "codigoProducto": 1017
    },
    {
        "tipo": "Mother",
        "marca": "Gigabyte",
        "modelo": "Z490 AORUS ULTRA",
        "precio": 290.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/motherIntel/Gigabyte-Z490-AORUS-ULTRA.png",
        "codigoProducto": 1018
    },
    {
        "tipo": "Mother",
        "marca": "ASRock",
        "modelo": "Z490 Taichi",
        "precio": 351.99,
        "compatibilidad": "Intel - Socket LGA1200",
        "urlImagen": "../img/fotosProductos/motherIntel/ASRock-Z490-Taichi.png",
        "codigoProducto": 1019
    },
    {
        "tipo": "Mother",
        "marca": "Asus",
        "modelo": "ROG STRIX Z390-E GAMING",
        "precio": 325.07,
        "compatibilidad": "Intel - Socket LGA1151",
        "urlImagen": "../img/fotosProductos/motherIntel/Asus-ROG-STRIX-Z390-E-GAMING.png",
        "codigoProducto": 1020
    },
    {
        "tipo": "Mother",
        "marca": "MSI",
        "modelo": "B360 GAMING PLUS",
        "precio": 99.99,
        "compatibilidad": "Intel - Socket LGA1151",
        "urlImagen": "../img/fotosProductos/motherIntel/MSI-B360-GAMING-PLUS.png",
        "codigoProducto": 1021
    },
    {
        "tipo": "Mother",
        "marca": "ASRock",
        "modelo": "B365M Phantom Gaming 4",
        "precio": 102.99,
        "compatibilidad": "Intel - Socket LGA1151",
        "urlImagen": "../img/fotosProductos/motherIntel/ASRock-B365M-Phantom-Gaming-4.png",
        "codigoProducto": 1022
    },
    {
        "tipo": "Mother",
        "marca": "MSI",
        "modelo": "Z270 GAMING PRO CARBON",
        "precio": 381.49,
        "compatibilidad": "Intel - Socket LGA1151",
        "urlImagen": "../img/fotosProductos/motherIntel/MSI-Z270-GAMING-PRO-CARBON.png",
        "codigoProducto": 1023
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 5 3600",
        "precio": 239.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-5-3600.png",
        "codigoProducto": 1024
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 7 3700X",
        "precio": 304.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-7-3700X.png",
        "codigoProducto": 1025
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 9 3900X",
        "precio": 429.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-9-3900X.png",
        "codigoProducto": 1026
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 3 3100",
        "precio": 118.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-3-3100.png",
        "codigoProducto": 1027
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 5 5600X",
        "precio": 417.12,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-5-5600X.png",
        "codigoProducto": 1028
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 7 3800X",
        "precio": 339.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-7-3800X.png",
        "codigoProducto": 1029
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 3 3200G",
        "precio": 99.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-3-3200G.png",
        "codigoProducto": 1030
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 5 2600",
        "precio": 149.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-5-2600.png",
        "codigoProducto": 1031
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 9 3950X",
        "precio": 704.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-9-3950X.png",
        "codigoProducto": 1032
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 5 2600X",
        "precio": 165.88,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-5-2600X.png",
        "codigoProducto": 1033
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 7 2700",
        "precio": 369.76,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-7-2700.png",
        "codigoProducto": 1034
    },
    {
        "tipo": "CPU",
        "marca": "AMD",
        "modelo": "Ryzen 5 2400G",
        "precio": 267,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/cpuAmd/AMD-Ryzen-5-2400G.png",
        "codigoProducto": 1035
    },
    {
        "tipo": "Mother",
        "marca": "MSI",
        "modelo": "MAG B550 TOMAHAWK",
        "precio": 179.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/MSI-MAG-B550-TOMAHAWK.png",
        "codigoProducto": 1036
    },
    {
        "tipo": "Mother",
        "marca": "Gigabyte",
        "modelo": "B550M DS3H",
        "precio": 94.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/Gigabyte-B550M-DS3H.png",
        "codigoProducto": 1037
    },
    {
        "tipo": "Mother",
        "marca": "Asus",
        "modelo": "ROG Strix X570-E Gaming",
        "precio": 299.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/Asus-ROG-Strix-X570-E-Gaming.png",
        "codigoProducto": 1038
    },
    {
        "tipo": "Mother",
        "marca": "Asus",
        "modelo": "ROG Crosshair VIII Hero (WI-FI)",
        "precio": 379.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/Asus-ROG-Crosshair-VIII-Hero-WIFI.png",
        "codigoProducto": 1039
    },
    {
        "tipo": "Mother",
        "marca": "ASRock",
        "modelo": "B550M Pro4",
        "precio": 109.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/ASRock-B550M-Pro4.png",
        "codigoProducto": 1040
    },
    {
        "tipo": "Mother",
        "marca": "Gigabyte",
        "modelo": "B550I AORUS PRO AX",
        "precio": 179.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/Gigabyte-B550I-AORUS-PRO-AX.png",
        "codigoProducto": 1041
    },
    {
        "tipo": "Mother",
        "marca": "Gigabyte",
        "modelo": "B550 AORUS ELITE",
        "precio": 156.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/Gigabyte-B550-AORUS-ELITE.png",
        "codigoProducto": 1042
    },
    {
        "tipo": "Mother",
        "marca": "MSI",
        "modelo": "MEG X570 UNIFY",
        "precio": 299.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/MSI-MEG-X570-UNIFY.png",
        "codigoProducto": 1043
    },
    {
        "tipo": "Mother",
        "marca": "Asus",
        "modelo": "ROG Crosshair VIII Hero",
        "precio": 359.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/Asus-ROG-Crosshair-VIII-Hero.png",
        "codigoProducto": 1044
    },
    {
        "tipo": "Mother",
        "marca": "Asus",
        "modelo": "ROG Crosshair VIII Formula",
        "precio": 549.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/Asus-ROG-Crosshair-VIII-Formula.png",
        "codigoProducto": 1045
    },
    {
        "tipo": "Mother",
        "marca": "MSI",
        "modelo": "MEG X570 GODLIKE",
        "precio": 629.99,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/MSI-MEG-X570-GODLIKE.png",
        "codigoProducto": 1046
    },
    {
        "tipo": "Mother",
        "marca": "Gigabyte",
        "modelo": "A520M S2H",
        "precio": 69.98,
        "compatibilidad": "AMD - Socket AM4",
        "urlImagen": "../img/fotosProductos/motherAmd/Gigabyte-A520M-S2H.png",
        "codigoProducto": 1047
    },
    {
        "tipo": "Cooler",
        "marca": "Cooler Master",
        "modelo": "Hyper 212 EVO",
        "precio": 34.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/cooler/Cooler-Master-Hyper-212-EVO.png",
        "codigoProducto": 1048
    },
    {
        "tipo": "Cooler",
        "marca": "Corsair",
        "modelo": "H100i RGB PLATINUM",
        "precio": 159.49,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/cooler/Corsair-H100i-RGB-PLATINUM.png",
        "codigoProducto": 1049
    },
    {
        "tipo": "Cooler",
        "marca": "NZXT",
        "modelo": "KRAKEN Z73",
        "precio": 274.06,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/cooler/NZXT-Kraken-Z73.png",
        "codigoProducto": 1050
    },
    {
        "tipo": "Cooler",
        "marca": "Noctua",
        "modelo": "NH-D15",
        "precio": 89.95,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/cooler/Noctua-NH-D15.png",
        "codigoProducto": 1051
    },
    {
        "tipo": "Cooler",
        "marca": "Cooler Master",
        "modelo": "MasterLiquid ML240L RGB",
        "precio": 49.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/cooler/Cooler-Master-MasterLiquid-ML240L-RGB.png",
        "codigoProducto": 1052
    },
    {
        "tipo": "Cooler",
        "marca": "Thermaltake",
        "modelo": "UX100",
        "precio": 19.98,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/cooler/Thermaltake-UX100.png",
        "codigoProducto": 1053
    },
    {
        "tipo": "RAM",
        "marca": "Corsair",
        "modelo": "Vengeance LPX 16GB (2x8GB)",
        "precio": 68.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/ram/Crucial-Ballistix-16GB-2x8GB.png",
        "codigoProducto": 1054
    },
    {
        "tipo": "RAM",
        "marca": "Corsair",
        "modelo": "Vengeance RGB Pro 32GB (2x16GB)",
        "precio": 142.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/ram/Corsair-Vengeance-RGB-Pro-32GB-2x16GB.png",
        "codigoProducto": 1055
    },
    {
        "tipo": "RAM",
        "marca": "G.Skill",
        "modelo": "Aegis 8GB (1x8GB)",
        "precio": 28.98,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/ram/G.Skill-Aegis-8GB-1x8GB.png",
        "codigoProducto": 1056
    },
    {
        "tipo": "RAM",
        "marca": "Crucial",
        "modelo": "Ballistix 16GB (2x8GB)",
        "precio": 74.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/ram/Crucial-Ballistix-16GB-2x8GB.png",
        "codigoProducto": 1057
    },
    {
        "tipo": "RAM",
        "marca": "Crucial",
        "modelo": "Ballistix 32GB (2x16GB)",
        "precio": 149.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/ram/Crucial-Ballistix-32GB-2x16GB.png",
        "codigoProducto": 1058
    },
    {
        "tipo": "RAM",
        "marca": "ADATA",
        "modelo": "XPG Z1 16GB (2x8GB)",
        "precio": 51.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/ram/ADATA-XPG-Z1-16GB-2x8GB.png",
        "codigoProducto": 1059
    },
    {
        "tipo": "GPU",
        "marca": "MSI - GeForce",
        "modelo": "Ventus XS OC - GF GTX 1660 SUPER 6GB",
        "precio": 285.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/gpu/MSI-Ventus-XS-OC-GF-GTX-1660-SUPER-6GB.png",
        "codigoProducto": 1060
    },
    {
        "tipo": "GPU",
        "marca": "MSI - GeForce",
        "modelo": "Gaming X - GF GTX 1660 Ti 6GB",
        "precio": 274.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/gpu/MSI-Gaming-X-GF-GTX-1660-Ti-6GB.png",
        "codigoProducto": 1061
    },
    {
        "tipo": "GPU",
        "marca": "Gigabyte - GeForce",
        "modelo": "Windforce OC - GF GTX 1650 SUPER 4GB",
        "precio": 258.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/gpu/Gigabyte-Windforce-OC-GF-GTX-1650-SUPER-4GB.png",
        "codigoProducto": 1062
    },
    {
        "tipo": "GPU",
        "marca": "MSI - AMD",
        "modelo": "Gaming X - AMD Radeon RX 5700 XT 8GB",
        "precio": 384.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/gpu/MSI-Gaming-X-AMD-Radeon-RX-5700-XT-8GB.png",
        "codigoProducto": 1063
    },
    {
        "tipo": "GPU",
        "marca": "MSI - AMD",
        "modelo": "Armor OC - AMD Radeon RX 580 8GB",
        "precio": 209.0,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/gpu/MSI-Armor-OC-AMD-Radeon-RX-580-8GB.png",
        "codigoProducto": 1064
    },
    {
        "tipo": "GPU",
        "marca": "MSI - GeForce",
        "modelo": "Gaming X Trio - GF GTX 2080 SUPER 8GB",
        "precio": 869.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/gpu/MSI-Gaming-X-Trio-GF-GTX-2080-SUPER-8GB.png",
        "codigoProducto": 1065
    },
    {
        "tipo": "Case",
        "marca": "NZXT",
        "modelo": "H510 ATX Mid Tower",
        "precio": 69.98,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/case/NZXT-H510-1.png",
        "codigoProducto": 1066
    },
    {
        "tipo": "Case",
        "marca": "Corsair",
        "modelo": "275R Airflow ATX Mid Tower",
        "precio": 79.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/case/Corsair-275R-1.png",
        "codigoProducto": 1067
    },
    {
        "tipo": "Case",
        "marca": "Corsair",
        "modelo": "Carbide 175R RGB ATX Mid Tower",
        "precio": 59.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/case/Corsair-Carbide-175R-RGB-1.png",
        "codigoProducto": 1068
    },
    {
        "tipo": "Case",
        "marca": "Cougar",
        "modelo": "MX330 ATX Mid Tower",
        "precio": 44.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/case/Cougar-MX330-1.png",
        "codigoProducto": 1069
    },
    {
        "tipo": "Case",
        "marca": "Aerocool",
        "modelo": "Cylon ATX Mid Tower",
        "precio": 50.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/case/Aerocool-Cylon-1.png",
        "codigoProducto": 1070
    },
    {
        "tipo": "Case",
        "marca": "Lian Li",
        "modelo": "O11D XL-X ATX Full Tower",
        "precio": 243.62,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/case/Lian-Li-O11D-XL-X-1.png",
        "codigoProducto": 1071
    },
    {
        "tipo": "Power Supply",
        "marca": "Corsair",
        "modelo": "RM (2019) 80+ Gold 750W",
        "precio": 124.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/powerSupply/Corsair-RM-2019-80-Gold-750W.png",
        "codigoProducto": 1072
    },
    {
        "tipo": "Power Supply",
        "marca": "EVGA",
        "modelo": "BQ 80+ Bronce 500W",
        "precio": 69.94,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/powerSupply/EVGA-BQ-80-Bronce-500W.png",
        "codigoProducto": 1073
    },
    {
        "tipo": "Power Supply",
        "marca": "Cooler Master",
        "modelo": "MWE Gold 80+ Gold 650W",
        "precio": 99.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/powerSupply/Cooler-Master-MWE-Gold-80-Gold-650W.png",
        "codigoProducto": 1074
    },
    {
        "tipo": "Power Supply",
        "marca": "Thermaltake",
        "modelo": "Smart 80+ White 500W",
        "precio": 37.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/powerSupply/Thermaltake-Smart-80-White-500W.png",
        "codigoProducto": 1075
    },
    {
        "tipo": "Power Supply",
        "marca": "Corsair",
        "modelo": "HX Platinum 80+ Platinum 1000W",
        "precio": 282.86,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/powerSupply/Corsair-HX-Platinum-80-Platinum-1000W.png",
        "codigoProducto": 1076
    },
    {
        "tipo": "Power Supply",
        "marca": "EVGA",
        "modelo": "B5 80+ Bronce 550W",
        "precio": 37.86,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/powerSupply/EVGA-B5-80-Bronce-550W.png",
        "codigoProducto": 1077
    },
    {
        "tipo": "OS",
        "marca": "Microsoft",
        "modelo": "Windows 10 Home",
        "precio": 108.78,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/os/Windows-10.png",
        "codigoProducto": 1078
    },
    {
        "tipo": "OS",
        "marca": "Microsoft",
        "modelo": "Windows 10 Pro",
        "precio": 139.88,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/os/Windows-10.png",
        "codigoProducto": 1079
    },
    {
        "tipo": "OS",
        "marca": "Linux",
        "modelo": "A elección del cliente",
        "precio": 0,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/os/Linux.svg",
        "codigoProducto": 1080
    },
    {
        "tipo": "Monitor",
        "marca": "AOC",
        "modelo": "C24G1 23.6' Full HD 144Hz",
        "precio": 185.0,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/monitor/AOC-C24G1-23.6-Full-HD-144Hz-1.png",
        "codigoProducto": 1081
    },
    {
        "tipo": "Monitor",
        "marca": "MSI",
        "modelo": "Optix G24C4 23.6' Full HD 144Hz",
        "precio": 449.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/monitor/MSI-Optix-G24C4-23.6-Full-HD-144Hz-1.png",
        "codigoProducto": 1082
    },
    {
        "tipo": "Monitor",
        "marca": "Asus",
        "modelo": "TUF Gaming VG279QM 27' Full HD 280Hz IPS",
        "precio": 399.0,
        "compatibilidad": "All",
        "urlImagen":
            "../img/fotosProductos/monitor/Asus-TUF-Gaming-VG279QM-27-Full-HD-280Hz-IPS-1.png",
        "codigoProducto": 1083
    },
    {
        "tipo": "Monitor",
        "marca": "LG",
        "modelo": "24MK400H-B 24' Full HD 75Hz IPS",
        "precio": 109.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/monitor/LG-24MK400H-B-24-Full-HD-75Hz-IPS-1.png",
        "codigoProducto": 1084
    },
    {
        "tipo": "Storage HDD",
        "marca": "Seagate",
        "modelo": "Barracuda Compute 2TB",
        "precio": 54.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/storage/Seagate-Barracuda-Compute-2TB.png",
        "codigoProducto": 1085
    },
    {
        "tipo": "Storage SSD",
        "marca": "Samsung",
        "modelo": "970 Evo 500GB M.2",
        "precio": 69.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/storage/Samsung-970-Evo-500GB-M.2.png",
        "codigoProducto": 1086
    },
    {
        "tipo": "Storage HDD",
        "marca": "Western Digital",
        "modelo": "Caviar Blue 1TB",
        "precio": 44.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/storage/Western-Digital-Caviar-Blue-1TB.png",
        "codigoProducto": 1087
    },
    {
        "tipo": "Storage SSD",
        "marca": "Samsung",
        "modelo": "860 Evo 1TB SATA III 6Gb/s",
        "precio": 119.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/storage/Samsung-860-Evo-1TB-SATAIII-6Gbs.png",
        "codigoProducto": 1088
    },
    {
        "tipo": "Storage SSD",
        "marca": "Kingston",
        "modelo": "A400 240GB SATA III 6Gb/s",
        "precio": 25.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/storage/Kingston-A400-240GB-SATAIII-6Gbs.png",
        "codigoProducto": 1089
    },
    {
        "tipo": "Storage SSD",
        "marca": "Western Digital",
        "modelo": "Blue 250GB M.2",
        "precio": 25.99,
        "compatibilidad": "All",
        "urlImagen": "../img/fotosProductos/storage/Western-Digital-Blue-250GB-M.2.png",
        "codigoProducto": 1090
    }
];
