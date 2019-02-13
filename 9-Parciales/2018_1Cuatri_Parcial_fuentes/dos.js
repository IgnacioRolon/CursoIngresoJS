function mostrar()
{
  	/*
  	var nombre;
	var localidad;
	nombre = elNombre.value;
	localidad = laLocalidad.value;

	alert("Usted es " + nombre + " y vive en la localidad de " + localidad);
	Ejercicio Parcial Original
	*/
	var precioEfectivo;
	var precioTarjeta;
	var recargo;

	precioEfectivo = prompt("Ingrese el precio en efectivo");
	precioEfectivo = parseInt(precioEfectivo);

	recargo = precioEfectivo * 0.10
	precioTarjeta = precioEfectivo + recargo;

	alert("el precio del producto en efectivo es :$ " + precioEfectivo + " , con tarjeta tiene un recargo del 10% que seria $" + recargo + " de recargo, costandole final $" + precioTarjeta);
}

/*
alert("el precio del producto en efectivo es :$ xxxx , con 
tarjeta tiene un recargo del 10% que seria $xx de 
recargo, costandole final $xxx")
*/