function mostrar()
{
	var precioinicial;
	precioinicial = prompt("Ingrese el precio");
	var porcentaje;
	porcentaje = prompt("Ingrese el porcentaje de descuento");

	var precio;
	porcentaje = parseInt(porcentaje) / 100;
	precio = parseInt(precioinicial) * porcentaje;
	precio = precioinicial - precio;
	elPrecioFinal.value = precio;
}
