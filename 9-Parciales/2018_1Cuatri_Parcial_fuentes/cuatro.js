function mostrar()
{
	
	
	/*
	var numero1;
	var numero2;
	var resultado;

	numero1 = prompt("Ingrese el primer numero");
	numero2 = prompt("Ingrese el segundo numero");

	if(numero1 == numero2) //RECORDAR PONER doble ==
	{
		resultado = numero1 + numero2;
		alert(resultado);
	}
	else
	{
		numero1 = parseInt(numero1);
		numero2 = parseInt(numero2);
		if(numero1 > numero2)
		{
			resultado = numero1 - numero2;
			alert(resultado);
		}
		else
		{
			resultado = numero1 + numero2;
			if (resultado > 10)
			{
				alert("La suma es " + resultado + " y supero el 10");
			}
			else
			{
				alert(resultado);
			}
		}	
	}
	Ejercicio parcial original
	*/
	
	var cantidadProductos;
	var precioProductos;
	var descuento;
	var formaDePago;
	var precioFinal;
	var recargo;
	
	descuento = 0;
	recargo = 0;
	cantidadProductos = prompt("Ingrese la cantidad de productos");
	precioProductos = prompt("Ingrese el precio por unidad");
	formaDePago = prompt("Indique el metodo de pago ingresando el numero correspondiente: 1- Efectivo, 2-Tarjeta")
	
	cantidadProductos = parseInt(cantidadProductos);
	precioProductos = parseInt(precioProductos);
	formaDePago = parseInt(formaDePago);

	precioFinal = precioProductos * cantidadProductos;

	if(cantidadProductos > 2){
		descuento = descuento + 0.10;
	}

	if(precioFinal > 2000){
		descuento = descuento + 0.15;
	}

	if (formaDePago == 2){
		recargo = 0.10;
	}

	precioFinal = precioFinal - precioFinal * descuento + precioFinal * recargo;

	alert("El precio final es de: " + precioFinal);
}

/*
al realizar una compra, si compra de mas 
de dos producto se realiza un descuento
del 10% y si supera los $2000 se agrega
un descuento adicional de 15%, si el pago
es con tarjeta y no efectivo al final
se le agrega un 10% de recargo.
*/