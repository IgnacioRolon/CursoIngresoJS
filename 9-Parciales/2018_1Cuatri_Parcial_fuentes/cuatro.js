function mostrar()
{
	
	
	
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

	
	/* SOLUCION 1
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
		if(precioFinal > 2000){
			descuento = descuento + 0.15;
		}
	}
	// interpretación del enunciado, cuestionable

	si compra de mas 
de dos producto se realiza un descuento
del 10% y si supera los $2000 se agrega
un descuento adicional de 15%,

intentar otra interpretación


	if (formaDePago == 2){
		recargo = 0.10;
	}

	precioFinal = precioFinal - precioFinal * descuento + precioFinal * recargo;

	alert("El precio final es de: " + precioFinal);
	*/

	/* SOLUCION 2
	var cantidadProductos;
	var precioProductos;
	var descuento;
	var formaDePago;
	var recargo;

	descuento = 0;
	recargo = 0;
	cantidadProductos = prompt("Ingrese la cantidad de productos");
	precioProductos = prompt("Ingrese el precio a pagar");
	formaDePago = prompt("Indique el metodo de pago ingresando el numero correspondiente: 1- Efectivo, 2-Tarjeta")
	
	cantidadProductos = parseInt(cantidadProductos);
	precioProductos = parseInt(precioProductos);
	formaDePago = parseInt(formaDePago);

	if(cantidadProductos > 2){
		descuento = descuento + 0.10;
		if(precioProductos > 2000){
			descuento = descuento + 0.15;
		}
	}

	if (formaDePago == 2){
		recargo = 0.10;
	}

	precioProductos = precioProductos - precioProductos * descuento + precioProductos * recargo;

	alert("El precio final es de: " + precioProductos);
	*/

	//SOLUCION 3
	/*
	var importe;
	var cantidad;
	var formaDePago;

	cantidad = prompt("Ingrese la cantidad de productos");
	importe = prompt("Ingrese el precio");
	formaDePago = prompt("Indique el metodo de pago ingresando el numero correspondiente: 1- Efectivo, 2-Tarjeta")

	cantidad = parseInt(cantidad);
	importe = parseInt(importe);

	if(cantidad > 2){
		if(importe>2000){
			importe = importe * 0.75;
		}else{
			importe = importe * 0.9;
		}
	}

	if (formaDePago == "2"){
		importe = importe * 1.1;
	} 

	alert("El precio final es: " + importe);

	*/



}

/*
al realizar una compra, si compra de mas 
de dos producto se realiza un descuento
del 10% y si supera los $2000 se agrega
un descuento adicional de 15%, si el pago
es con tarjeta y no efectivo al final
se le agrega un 10% de recargo.
*/