function mostrar()
{
	var precio;
	var descuento;
	precio = prompt("Ingrese el precio");
	descuento = prompt("Ingrese el porcentaje de descuento");

	precio = parseInt(precio);
	descuento = parseInt(descuento);

	descuento = descuento/100;
	precio = precio - precio*descuento;

	elPrecioFinal.value = precio;
}
