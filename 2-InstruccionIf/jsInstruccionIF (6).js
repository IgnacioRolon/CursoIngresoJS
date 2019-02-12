function mostrar()
{
//tomo la edad  

	var laEdad;
	laEdad = edad.value;
	laEdad = parseInt(laEdad);	

	/*if (laEdad >= 13 && laEdad <= 17 ) 
	{
		alert("La persona es adolescente.")		
	} 
	if (laEdad < 13) 
	{
		alert("La persona es un niño.")
	} 
	if(laEdad > 17)
	{
		alert("La persona es mayor de edad.")
	}
	*/
	

	if(laEdad > 17)
	{
		alert("La persona es mayor de edad.")
	}
	else
	{
		if(laEdad < 13) 
		{
		alert("La persona es un niño.")
		}
		else
		{
			alert("La persona es adolescente.")
		}
	}



}//FIN DE LA FUNCIÓN