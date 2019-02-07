/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var Importe;

	Importe = importe.value;
	Importe = parseInt(Importe) * 0.75;

	resultado.value = Importe;
}
