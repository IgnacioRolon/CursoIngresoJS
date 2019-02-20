function mostrar()
{
	var planeta;
	var mensaje;
	planeta = prompt("Ingrese un planeta del sistema solar")
	switch(planeta){
		case "Mercurio":
		case "Venus":
			mensaje = "Acá hace mas calor";
		break;
		case "Tierra":
			mensaje = "Aca vivimos";
		break;
		case "Marte":
		case "Jupiter":
		case "Saturno":
		case "Urano":
		case "Neptuno":
			mensaje = "Acá hace mas frio";
		break;
		default:
			mensaje = "Planeta no valido";
		break;
	}
	alert(mensaje);
}
