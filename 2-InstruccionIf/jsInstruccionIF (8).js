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
		
	}else{
		if(laEdad > 17 && suEstadoCivil == "Soltero")
		{
			alert("Es soltero y no es menor.");
		}
	}


}//FIN DE LA FUNCIÓN