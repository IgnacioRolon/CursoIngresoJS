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

	*/
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

var precio1;
var precio2;
var precio3;
var precio4;
var precioMayor;
var precioTotal;
var recuento;

precio1 = prompt("Ingrese el primer monto");
precio2 = prompt("Ingrese el segundo monto");
precio3 = prompt("Ingrese el tercer monto");
precio4 = prompt("Ingrese el cuarto monto");

precio1 = parseInt(precio1);
precio2 = parseInt(precio2);
precio3 = parseInt(precio3);
precio4 = parseInt(precio4);

if(precio1 >= precio2 && precio1 >= precio3 && precio1 >= precio4){
	precioMayor = precio1;
}else{
	if(precio2 >= precio3 && precio2 >= precio4){
		precioMayor = precio2;
	}else{
		if( precio3 >= precio4){
			precioMayor = precio3;
		}else{
			precioMayor = precio4;
		}
	}
}

precioTotal = precio1 + precio2 + precio3 + precio4;

if(precioTotal > 100){
	recuento = 0.9;
}else{
	if(precioTotal > 50){
		recuento = 0.95;
	}else{
		recuento = 1.15;
	}
}


precioTotal = precioTotal * recuento;
alert("El mayor es " + precioMayor + " y el precio total es " + precioTotal);

}

/*
Si supera 100$ -10%
Si supera 50$ -5%
Si es menor de 50$ +15%
{}
*/