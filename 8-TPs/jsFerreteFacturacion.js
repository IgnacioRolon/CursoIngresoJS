/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var resultado;

	precio1 = PrecioUno.value;
	precio2 = PrecioDos.value;
	precio3 = PrecioTres.value;

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	resultado = precio1 + precio2 + precio3;
	alert("El resultado es " + resultado);
}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var resultado;

	precio1 = PrecioUno.value;
	precio2 = PrecioDos.value;
	precio3 = PrecioTres.value;

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	resultado = precio1 + precio2 + precio3;
	resultado = resultado / 3;

	alert("El resultado es " + resultado);

}
function PrecioFinal () 
{
	
}