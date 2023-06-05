function calculatePrice(event) {
  event.preventDefault();
  let medidaDelCable = document.getElementById("select-capacidad").value;
  const precios = {
    25: 8762.5,
    21: 6954.5,
    20: 7945.2,
  };
  let precioDeLista = precios[medidaDelCable];
  let precioFinal = precioDeLista;
  let descuento = 0;
  let cantidad = document.getElementById("cantidad").value;
  let porcentajeDescuento = 0;
  let resultado = document.getElementById("result");

  //   calculos de cotizacion
  //validaciones:
  if (cantidad < 1 || cantidad > 10) {
    resultado.innerText = `Debe ingresar una cantidad entre 0 y 10`;
    resultado.className = "error";
    resultado.style.display = "block";
  } else {
    resultado.className = "cotizado";
    resultado.style.display = "block";
    if (cantidad > 3) {
      porcentajeDescuento = 20;
    }
    if (cantidad > 6) {
      porcentajeDescuento = 30;
    }

    if (medidaDelCable == "") {
      resultado.innerText = `Debe seleccionar un largo de cable`;
      resultado.className = "error";
      resultado.style.display = "block";
    } else {
      descuento = (Number(precioDeLista) * porcentajeDescuento) / 100;
      precioFinal = (precioDeLista - descuento) * cantidad;
      let precioDeListaFinal = precioDeLista * cantidad;

      if (descuento == 0) {
        resultado.innerText = `Precio $ ${precioFinal.toFixed(2)} `;
      } else {
        resultado.innerText = `Precio Lista $ ${precioDeListaFinal}-\n Descuento $ ${descuento} - (${porcentajeDescuento} %off) \n\nPrecio Final $ ${precioFinal.toFixed(
          2
        )} `;
      }
    }
  }
}
