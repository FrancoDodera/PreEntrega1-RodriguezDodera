const preciCelular = parseInt(prompt("Ingrese el monto de su celular"));
const cuotas = prompt("Ingresar caintidad de cuotas 3/6/12: ");
function elegirCoutas(preciCelular, cuotas) {
  switch (cuotas) {
    case "3":
      let tresCuotas = preciCelular * 0.1;
      let precioFinal = preciCelular + tresCuotas;
      alert(
        "El interes de su celular sera de: " +
          tresCuotas +
          ". El precio final de su celular sera de: " +
          precioFinal
      );

      break;
    case "6":
      let seisCuotas = preciCelular * 0.2;
      let precioFinalSeis = preciCelular + seisCuotas;
      alert(
        "El interes de su celular sera de: " +
          seisCuotas +
          ". El precio final de su celular sera de: " +
          precioFinalSeis
      );

      break;
    case "12":
      let doceCuotas = preciCelular * 0.4;
      let precioFinalDoce = preciCelular + doceCuotas;
      alert(
        "El interes de su celular sera de: " +
          doceCuotas +
          ". El precio final de su celular sera de: " +
          precioFinalDoce
      );

      break;
    default:
      alert("INGRESASTE MAL LA CUOTA");
      break;
  }
}
