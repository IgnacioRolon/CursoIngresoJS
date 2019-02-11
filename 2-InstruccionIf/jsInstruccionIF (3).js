function mostrar()
{
	//tomo la edad  
	var laEdad;
	laEdad = edad.value;
	laEdad = parseInt(laEdad);

	if (laEdad >= 18) 
	{
		alert("La persona es mayor de edad.")
	} 
	if (laEdad <= 17)
	{
		alert("La persona es menor de edad.")
	}

	/*

	if (laEdad >= 18) 
	{
		alert("La persona es mayor de edad.")
	} 
	else
	{
		alert("La persona es menor de edad.")
	}

	Se puede realizar con else, pero eso incluiría
	otras opciones que no son validas, como palabras.
	
	*/

}//FIN DE LA FUNCIÓN