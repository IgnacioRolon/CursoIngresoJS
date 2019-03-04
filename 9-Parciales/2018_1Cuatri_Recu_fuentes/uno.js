
function mostrar()
{

	var ancho;
	var largo;
	var perimetro;
	ancho = prompt("Ingrese el ancho del rectangulo (en cm)");
	largo = prompt("Ingrese el largo del rectangulo (en cm)");

	perimetro = ancho * 2 + largo * 2;
	alert("El perimetro es de " + perimetro + "cm.")
}
