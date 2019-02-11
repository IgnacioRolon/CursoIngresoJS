function mostrar()
{
//tomo la edad  
var Edad;


Edad = edad.value;
//Edad = parseInt(Edad);
/*Si se parsea la edad, se compara con el valor numerico
En caso contrario, se compara con el valor en forma 
de string.

Si estuviese parseado el if sería:

if (Edad == 15) 
{
	alert("niña bonita");
}

*/

if (Edad == "15") 
{
	alert("niña bonita");
}

}//FIN DE LA FUNCIÓN