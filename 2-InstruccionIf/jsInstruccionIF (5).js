function mostrar()
{
//tomo la edad  
	var laEdad;
	laEdad = edad.value;
	laEdad = parseInt(laEdad);	
	
/*
	if (laEdad > 17) 
	{		
		alert("La persona NO es adolescente.")
	} 
	if (laEdad < 13)
	{
		alert("La persona NO es adolescente.")
	}
*/

	
	if (laEdad > 17 || laEdad < 13) 	
	{
		alert("La persona NO es adolescente.")
	}
	

}//FIN DE LA FUNCIÓN