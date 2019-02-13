function mostrar()
{
	var precioinicial;
	var porcentaje;
	var precio;

	precioinicial = prompt("Ingrese el precio");	
	porcentaje = prompt("Ingrese el porcentaje de descuento");

	
	porcentaje = parseInt(porcentaje) / 100;
	precio = parseInt(precioinicial) * porcentaje;
	precio = precioinicial - precio;
	elPrecioFinal.value = precio;
}
