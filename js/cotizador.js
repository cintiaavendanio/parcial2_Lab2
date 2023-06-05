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
      precioListaCantidad = precioDeLista * cantidad;
      let precioDeListaFinal = precioDeLista * cantidad;
      descuento = (Number(precioDeListaFinal) * porcentajeDescuento) / 100;
      precioFinal = precioDeListaFinal - descuento;

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

let selectColor = document.getElementById("select-color");

selectColor.onchange = function cambiarImg() {
  let resultado = document.getElementById("result");
  let color = document.getElementById("select-color").value;
  let img = document.getElementById("productimage");
  let contenedorDeTexto = document.getElementById("strDescrip-Prod");

  resultado.style.display = "none";

  if (color) {
    img.src = productos[color].imagen;
    let titulo = productos[color].titulo;
    let descripcion = productos[color].descripcion;
    let caracteristicas = productos[color].caracteristicas;
    let especificaciones = productos[color].especificaciones;

    if (titulo) contenedorDeTexto.innerHTML = `<h3>${titulo} </h3><br>`;
    if (descripcion)
      contenedorDeTexto.innerHTML += `<h4>Descripcion:</h4> <p>${descripcion} </p><br>`;
    if (caracteristicas)
      contenedorDeTexto.innerHTML += `<h4>Caracteristicas:</h4> <p>${caracteristicas} </p><br>`;
    if (especificaciones)
      contenedorDeTexto.innerHTML += `<h4>Especificaciones:</h4> <p>${especificaciones} </p><br>`;
  } else {
    img.src = "img/GENERICA.jpeg";
    contenedorDeTexto.innerHTML = "";
  }
};

const productos = {
  AZUL: {
    titulo: "Auriculares Gamer Pc Ps4 Luz Led Gaming Micrófono Headset Azul",
    imagen: "img/HEADSET_AZUL.webp",
    descripcion:
      "Es un auricular profesional para aficionados a los juegos. Las luces LED hacen que se vea genial por la noche y agrega otro nivel de entretenimiento al jugar videojuegos. Los cables son compatibles con casi todos los dispositivos que puedas imaginar. Cojín ligero y suave, te traerá una experiencia agradable.Las almohadillas para los oídos están hechas de cuero de PU con un tamaño grande que proporciona un buen rendimiento de reducción de ruido. El diseño liviano es más cómodo para usar durante mucho tiempo.Con un conector de 3,5 mm, es adecuado para PC, computadora portátil. Y con un cable adaptador adicional en el paquete, también se puede aplicar en PS4, Xbox One, PSP, teléfono, iPad, tableta, etc. Este auricular NO es un auricular USB, la interfaz USB solo se usa para la fuente de alimentación para Luz LED.",
    caracteristicas:
      "<ul><li>Micrófono de alta definición</li><li>Sonido estéreo envolvente de 360 grados</li><li>Micrófono retráctil de 130°</li><li>Diadema cómoda</li><li>Contrabajo</li><li>Control del volumen</li><li>Luz Led</li><li>Diseño espléndido</li></ul>",
    especificaciones:
      "<ul><li>Diámetro del altavoz: 40 mm</li><li>Impedancia: 32 ohmios</li><li>Sensibilidad: 102dB +/-3dB</li><li>Respuesta de frecuencia: 20Hz-20KHZ</li><li>Dimensión del micrófono: 6,0*5,0mm</li><li>Directividad del micrófono: Omnidireccional</li><li>Enchufe: enchufes de 3,5 mm para micrófono y auriculares</li><li>Longitud del cable: aprox. 2,2 metros</li><li>Voltaje de funcionamiento del LED: DC5V 25%</li><li>Interfaz de trabajo: USB + estéreo de 3,5 mm</li><li>Unidad de controlador de 40 mm</li></ul>",
  },

  ROJO: {
    titulo: "Auriculares Gamer Microfono Con Luz Led Para Ps4 Rojo",
    imagen: "img/HEADSET_ROJO.webp",
    descripcion:
      "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Huterspider AU408 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores. El formato perfecto para vos El diseño head-set brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
    caracteristicas: "",
    especificaciones:
      "<ul><li>Diámetro del altavoz: 40 mm</li><li>Impedancia: 32 ohmios</li><li>Sensibilidad: 102dB +/-3dB</li><li>Respuesta de frecuencia: 20Hz-20KHZ</li><li>Dimensión del micrófono: 6,0*5,0mm</li><li>Directividad del micrófono: Omnidireccional</li><li>Enchufe: enchufes de 3,5 mm para micrófono y auriculares</li><li>Longitud del cable: aprox. 2,2 metros</li><li>Voltaje de funcionamiento del LED: DC5V 25%</li><li>Interfaz de trabajo: USB + estéreo de 3,5 mm</li><li>Unidad de controlador de 40 mm</li></ul>",
  },
  NARANJA: {
    titulo: "Auriculares Gamer Level Up Copperhead Negro y Naranja",
    imagen: "img/HEADSET_NARANJA.jpg",
    descripcion: "",
    caracteristicas:
      "<ul><li>Micrófono de alta definición</li><li>Sonido estéreo envolvente de 360 grados</li><li>Micrófono retráctil de 130°</li><li>Diadema cómoda</li><li>Contrabajo</li><li>Control del volumen</li><li>Luz Led</li><li>Diseño espléndido</li></ul>",
    especificaciones:
      "<ul><li>Diámetro del altavoz: 40 mm</li><li>Impedancia: 32 ohmios</li><li>Sensibilidad: 102dB +/-3dB</li><li>Respuesta de frecuencia: 20Hz-20KHZ</li><li>Dimensión del micrófono: 6,0*5,0mm</li><li>Directividad del micrófono: Omnidireccional</li><li>Enchufe: enchufes de 3,5 mm para micrófono y auriculares</li><li>Longitud del cable: aprox. 2,2 metros</li><li>Voltaje de funcionamiento del LED: DC5V 25%</li><li>Interfaz de trabajo: USB + estéreo de 3,5 mm</li><li>Unidad de controlador de 40 mm</li></ul>",
  },
  VERDE: {
    titulo: "Auricular Gamer Constrictor AUC-3050RG",
    imagen: "img/HEADSET_VERDE.jpeg",
    descripcion:
      "Auricular vincha gamer. Parlante 50mm. Frecuencia de respuesta 20Hz - 20KHz. Impendancia 16 +- 10%. Sensibilidad 112dB+-3dB. Luz RGB. Vincha 100% adaptable. Control de volumen. Microfono flexible 4,0 x 1,5mm. Plug 3.5mm + USB. Largo del cable 2.2m. Dimensiones 195 x 117 x 225mm. Peso 366g. Incluye Adaptador de PC (con salida para microfono y otra para audio) + Bag de guardado impermeable.",
    caracteristicas: "",
    especificaciones:
      "<ul><li>Diámetro del altavoz: 40 mm</li><li>Impedancia: 32 ohmios</li><li>Sensibilidad: 102dB +/-3dB</li><li>Respuesta de frecuencia: 20Hz-20KHZ</li><li>Dimensión del micrófono: 6,0*5,0mm</li><li>Directividad del micrófono: Omnidireccional</li><li>Enchufe: enchufes de 3,5 mm para micrófono y auriculares</li><li>Longitud del cable: aprox. 2,2 metros</li><li>Voltaje de funcionamiento del LED: DC5V 25%</li><li>Interfaz de trabajo: USB + estéreo de 3,5 mm</li><li>Unidad de controlador de 40 mm</li></ul>",
  },
};
