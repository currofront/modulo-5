const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: true
    }
   ]; 


   // Listar todos los productos

 for (i = 0; i < carrito.length; i++) {
    imprimir(carrito[i]);

 };

 // PREGUNTA: ¿POR QUÉ CON ARROW FUNCTION NO FUNCIONA?
//  var imprimir = (carrito) => {
//     console.log("-----------");
//     for (propiedad in carrito) {
//         console.log(propiedad + ": " + carrito[propiedad]);
//     }
//  }

 function imprimir(carrito) {
    console.log("---------------");

    for (propiedad in carrito) {
        console.log(propiedad + ": " + carrito[propiedad]);
    }
    console.log("---------------");
 };



 // Eliminar un producto del carrito 

 var index;

 for(i = 0; i < carrito.length; i++) {
    if(carrito[i].id == 75621) {
        index = i;
    }
 }

carrito.splice(index,1);

console.log("Carrito actualizado");

for (i = 0; i < carrito.length; i++) {
    imprimir(carrito[i]);
 };



 //Total carrito

 var total = 0;
for (product of carrito) {
    total += product.price * product.count
}

total = total.toFixed(2);

console.log("Total Carrito: " + total + "€");



// Filtrar productos prime

var premiumProducts = [];

for(i = 0; i < carrito.length; i++) {
    if(carrito[i].premium == true) {
        premiumProducts.push(carrito[i])
    }
}

console.log(premiumProducts)



// Gastos de envío 

var freeShip = true;
var i = 0;
while (i < carrito.length && freeShip) {
    freeShip = carrito[i].premium == true;
    i++
};

freeShip == true ? console.log("Envío gratuito") : console.log("Con gastos de envío");



// Montarlo con HTML y API de HTML

document.write ("<h2> Cesta </h2>")
for (propiedad of carrito) {
    document.write ("<ul>");
    document.write ("<li>" + "Producto: " + propiedad.name + " *Cantidad: " + propiedad.count + " *Precio: " + propiedad.price + "€" + "</li>");
    document.write ("</ul>");
}



// Descuento

discount();

function discount() {
    if(total > 50) {
        return console.log("Total con descuento: " + total * .95 + "€");
    } else {return console.log("Total: " + total + "€")};
}; 