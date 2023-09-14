

let valor;
while (true) {
  let input = prompt("Ingresa el valor");
  if (input !== null && input.trim() !== "") {
    valor = parseFloat(input);
    if (!isNaN(valor)) {
      break;
    }
  }
  alert("Debes ingresar un valor numérico válido.");
}

let tarjeta;
while (true) {
  tarjeta = prompt("¿Tu tarjeta es Visa, Master o Amex?");
  if (tarjeta !== null && tarjeta.trim() !== "") {
    // Puedes agregar más validaciones aquí si es necesario
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

// Ahora puedes usar las variables valor, tarjeta y cuotas en tu código


switch (tarjeta) {
    case "visa":
        switch (cuotas) {
            case 3:
                let resultadoVisa3 =(((11.5 / 3) / 100) * valor + valor);
                alert("el total es: " + resultado3)
                let valorPorCuotaVisa3 = resultadoVisa3 / 3;
                alert("Te quedarían " + valorPorCuotaVisa3 + " por cuota");
            break;
            case 6:
                let resultadoVisa6 =(((24.5 / 6) / 100) * valor + valor);
                alert("el total es: " + resultadoVisa6)
                let valorPorCuotaVisa6 = resultadoVisa6 / 6;
                alert("Te quedarían " + valorPorCuotaVisa6 + " por cuota");
             
            break;
            case 12:
                let resultadoVisa12 =(((53.5 / 12) / 100) * valor + valor);
                alert("el total es: " + resultadoVisa12)
                let valorPorCuotaVisa12 = resultadoVisa12 / 12;
                alert("Te quedarían " + valorPorCuotaVisa12 + " por cuota");
            break;
             default:
                alert("Número de cuotas no válido para Visa");
                break;
        }
        break;
        case "master":
        switch (cuotas) {
            case 3:
                let resultadoMaster3 =(((12.5 / 3) / 100) * valor + valor);
                alert("el total es: " + resultadoMaster3)
                let valorPorCuotaMaster3 = resultadoMaster3 / 3;
                alert("Te quedarían " + valorPorCuotaMaster3 + " por cuota");
            break;
            case 6:
                let resultadoMaster6 =(((21.5 / 6) / 100) * valor + valor);
                alert("el total es: " + resultadoMaster6)
                let valorPorCuotaMaster6 = resultadoMaster6 / 6;
                alert("Te quedarían " + valorPorCuotaMaster6 + " por cuota");
            break;
            case 12:
                let resultadoMaster12 =(((58 / 12) / 100) * valor + valor);
                alert("el total es: " + resultadoMaster12)
                let valorPorCuotaMaster12 = resultadoMaster12 / 12;
                alert("Te quedarían " + valorPorCuotaMaster12 + " por cuota");
            break;
             default:
                alert("Número de cuotas no válido para master");
                break;
        }
        break;
        case "amex":
        switch (cuotas) {
            case 3:
                let resultadoAmex3 =(((12.5 / 3) / 100) * valor + valor);
                alert("el total es: " + resultadoAmex3)
                let valorPorCuotaAmex3 = resultadoAmex3 / 3;
                alert("Te quedarían " + alorPorCuotaAmex3 + " por cuota");
            break;
            case 6:
                let resultadoAmex6 =(((25.5 / 6) / 100) * valor + valor);
                alert("el total es: " + resultadoAmex6)
                let valorPorCuotaAmex6 = resultadoAmex6 / 6;
                alert("Te quedarían " + valorPorCuotaAmex6 + " por cuota");
            break;
            case 12:
                let resultadoAmex12 =(((12.5 / 3) / 100) * valor + valor);
                alert("el total es: " + resultadoAmex12)
                let valorPorCuotaAmex12 = resultadoAmex12 / 12;
                alert("Te quedarían " + valorPorCuotaAmex12 + " por cuota");
            break;
             default:
                alert("Número de cuotas no válido para amex");
                break;
        }
    }




