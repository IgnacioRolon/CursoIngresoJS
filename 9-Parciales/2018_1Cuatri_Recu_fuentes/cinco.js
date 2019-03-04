function mostrar()
{
	var dia;
	var mensaje;

	dia = prompt("Ingrese el dia de la semana");

	switch(dia){
		case "Sabado":
		case "Domingo":
			mensaje = "Buen finde";
		break;

		case "Lunes":
		case "Martes":
		case "Miercoles":
		case "Jueves":
		case "Viernes":
			mensaje = "A trabajar";
		break;

		default:
			mensaje = "Dia no válido";
		break;
	}
	alert(mensaje);
}
