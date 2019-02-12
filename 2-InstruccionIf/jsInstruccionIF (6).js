function mostrar()
{
//tomo la edad  

	var laEdad;
	laEdad = edad.value;
	laEdad = parseInt(laEdad);	

	if (laEdad >= 13 && laEdad <= 17 ) 
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

	


}//FIN DE LA FUNCIÓN