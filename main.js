alert("Bienvenido a Jshop");
let tipodeproducto = prompt("¿Qué quieres comprar: una TV, celular o notebook?");

const arraytv = [
  { id: 0, producto: "tv55", precio: 200000 },
  { id: 1, producto: "tv65", precio: 340000 },
  { id: 2, producto: "tv75", precio: 500000 }
];

const arraycelulares = [
  { id: 0, producto: "iphone14", precio: 500000 },
  { id: 1, producto: "iphone14promax", precio: 800000 },
  { id: 2, producto: "iphone15promax", precio: 1000000 }
];

const arraynotebooks = [
  { id: 0, producto: "book3", precio: 500000 },
  { id: 1, producto: "boook3pro", precio: 800000 },
  { id: 2, producto: "book3pro360", precio: 1200000 }
];

function elecciondeproducto(array) {
  const stock = array.map(producto => `${producto.producto} - Precio: $${producto.precio}`).join('\n');
  let productoelegido = prompt(`¿Qué opción deseas (1, 2 o 3)?\n${stock}`);
  
  productoelegido = parseInt(productoelegido);

  if (!isNaN(productoelegido) && productoelegido >= 1 && productoelegido <= 3) {
    const eleccion = array.find(producto => producto.id === productoelegido - 1);
    if (eleccion) {
      const valor = eleccion.precio;
      alert("Elegiste: " + eleccion.producto + " - $" + valor);
      return valor; 
    } else {
      alert("Opción no válida");
      return null; 
    }
  } else {
    alert("Opción no válida");
    return null; 
  }
}

const valorProducto = elecciondeproducto(arraytv);


if (valorProducto !== null) {
  let tarjeta;
  while (true) {
    tarjeta = prompt("¿Tu tarjeta es Visa, Master o Amex?");
    if (tarjeta !== null && tarjeta.trim() !== "") {
      break;
    }
    alert("Debes seleccionar una tarjeta.");
  }

  let cuotas;
  while (true) {
    let input = prompt("Cantidad de cuotas");
    if (input !== null && input.trim() !== "") {
      cuotas = parseInt(input);
      if (!isNaN(cuotas)) {
        break;
      }
    }
    alert("Debes ingresar un número de cuotas válido.");
  }


  function calcularTotal(interes) {
    let total = ((interes / 12) / 100) * valorProducto + valorProducto;
    alert("El total es: $" + total);
    let valorPorCuota = total / cuotas;
    alert(`Te quedarían ${cuotas} cuotas de $${valorPorCuota.toFixed(2)} cada una`);
  }

  switch (tarjeta.toLowerCase()) {
    case "visa":
      switch (cuotas) {
        case 3:
          calcularTotal(11.4);
          break;
        case 6:
          calcularTotal(24.4);
          break;
        case 12:
          calcularTotal(52.5);
          break;
        default:
          alert("Número de cuotas no válido para Visa");
          break;
      }
      break;
    case "master":
      switch (cuotas) {
        case 3:
          calcularTotal(12.3);
          break;
        case 6:
          calcularTotal(27.4);
          break;
        case 12:
          calcularTotal(55.5);
          break;
        default:
          alert("Número de cuotas no válido para Master");
          break;
      }
      break;
    case "amex":
      switch (cuotas) {
        case 3:
          calcularTotal(10.3);
          break;
        case 6:
          calcularTotal(31.4);
          break;
        case 12:
          calcularTotal(51.5);
          break;
        default:
          alert("Número de cuotas no válido para Amex");
          break;
      }
      break;
    default:
      alert("Tarjeta no reconocida");
      break;
  }
}


