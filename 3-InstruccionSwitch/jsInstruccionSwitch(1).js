function mostrar()
{
//tomo el mes
var mesDelAño = document.getElementById('mes').value;
var mensaje = "";

switch(mesDelAño)
{
	case "Enero":
		mensaje = "Que comiences bien el año!!!";
	break;

	case "Marzo":
		mensaje = "A clases!!!";
	break;

	case "Julio":
		mensaje = "Se vienen las vacaciones!!!"
	break;

	case "Diciembre":
		mensaje = "Felices fiestas!!!"
	break;
}
if (mensaje != ""){
	alert(mensaje);
} 
	



/*
switch(mesDelAño)
{
	case "Enero":
		mensaje = "Que comiences bien el año!!!";
	break;

	case "Marzo":
		mensaje = "A clases!!!";
	break;

	case "Julio":
		mensaje = "Se vienen las vacaciones!!!"
	break;

	case "Diciembre":
		mensaje = "Felices fiestas!!!"
	break;
}

if (mensaje != null)
*/


}//FIN DE LA FUNCIÓN