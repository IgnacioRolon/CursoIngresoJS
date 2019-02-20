function mostrar()
{
	/*
	var planeta;
	var mensaje;
	planeta = prompt("Ingrese un planeta del sistema solar")
	switch(planeta){
		case "mercurio":
		case "venus":
			mensaje = "Acá hace mas calor";
		break;
		case "tierra":
			mensaje = "Aca vivimos";
		break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
			mensaje = "Acá hace mas frio";
		break;
		default:
			mensaje = "Planeta no valido";
		break;
	}
	alert(mensaje);
	Ejercicio Parcial Original
	*/


var tipoDePago;
var descuento;
var paquete;
var precioHabitacion;

precioHabitacion = prompt("Ingrese el precio de la habitacion");
paquete = prompt("Ingrese el paquete a adquirir");
tipoDePago = prompt("Ingrese el tipo de pago. 1-Tarjeta Visa. 2-PayPal. 3-MercadoPago. 4-Efectivo. 5-Otros");

tipoDePago = parseInt(tipoDePago);
descuento = parseInt(descuento);
precioHabitacion = parseInt(precioHabitacion);

switch(tipoDePago){
	case 1:
	case 3:
		descuento = 0.9;
	break;

	case 2:		
		switch(paquete){
			case "todoIncluido":
				descuento = 0.75;
			break;

			default:
				descuento = 0.85;
			break;
		}
	break;

	case 4:
		switch(paquete){
			case "soloDesayunos":
				descuento = 0.7;
			break;

			case "todoIncluido":
				descuento = 0.65;
			break;

			default:
				descuento = 0.8;
			break;
		}		
	break;

	case 5:
		descuento = 0.95;
	break;
}

precioHabitacion = precioHabitacion * descuento;
alert("Usted adquirió el paquete " + paquete + " por " + precioHabitacion + "$");


}
/*
Cada habitacion de un hotel tiene un precio, 
hay promociones segun el tipo de pago, 
si es con tarjeta visa un 10%, si es por paypal un 15%, 
por MercadoPagoun 10%, efectivo 20%, 
cualquier otro medio un 5%

Si compraste el paquete "todoIncluido" y 
pagas con Paypal se te suma un 10% al descuento

Si pagas en efectivo, tenes varias opciones, 
el paquete soloDesayunos te suma un 10% al descuento, 
si el paquete es "todoIncluido" te suma un 15% y 
para el resto de los paquetes no tiene descuento adicional

*/