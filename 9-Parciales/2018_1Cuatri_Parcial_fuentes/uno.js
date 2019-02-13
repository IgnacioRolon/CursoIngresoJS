/* alert("Ustedes son xxxx y xxxx, sus edades son xx y xx, 
y la suma de sus edades es xx")

*/

function mostrar()
{

	/* var ancho;
	var largo;
	var perimetro;
	ancho = prompt("Ingrese el ancho del rectangulo");
	largo = prompt("Ingrese el largo del rectangulo");

	perimetro = ancho * 2 + largo * 2;
	alert("El perimetro es de: " + perimetro); 
	Ejercicio Parcial original
	*/

	var nombreUno;
	var nombreDos;
	var edadUno;
	var edadDos;
	var sumaEdades;

	nombreUno = prompt("Ingrese el nombre del primero");
	nombreDos = prompt("Ingrese el nombre del segundo");
	edadUno = prompt("Ingrese la edad del primero");
	edadDos = prompt("Ingrese la edad del segundo");

	edadUno = parseInt(edadUno);
	edadDos = parseInt(edadDos);
	sumaEdades = edadUno + edadDos;

	alert("Ustedes son " + nombreUno + " y " + nombreDos + " , sus edades son " + edadUno + " y " + edadDos + " ,y la suma de sus edades es " + sumaEdades + " ");
}
