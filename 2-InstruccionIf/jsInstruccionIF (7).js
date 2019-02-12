function mostrar()
{
//tomo la edad  


	var laEdad;
	laEdad = edad.value;
	laEdad = parseInt(laEdad);	
	var suEstadoCivil;
	suEstadoCivil = estadoCivil.value;

	if(laEdad < 18 && suEstadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.")
	}

}//FIN DE LA FUNCIÓN