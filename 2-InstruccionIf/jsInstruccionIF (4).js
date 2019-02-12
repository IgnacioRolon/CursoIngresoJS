function mostrar()
{
	//tomo la edad  

	var laEdad;
	laEdad = edad.value;
	laEdad = parseInt(laEdad);

	/*
	Resolucion con &&
	if (laEdad >= 13 && laEdad <= 17 ) 
	{
		alert("La persona es adolescente.")
	} 
	*/

	if (laEdad >= 13) 
	{
		if( laEdad <= 17)
		{
			alert("La persona es adolescente.")	
		}		
	}
}//FIN DE LA FUNCIÓN