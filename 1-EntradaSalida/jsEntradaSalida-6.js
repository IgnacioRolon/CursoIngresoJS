/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

//parseInt(var) transforma un texto en numero entero.
function sumar()
{
	var PrimerNumero;
	var SegundoNumero;	
	var Resultado;
	PrimerNumero = numeroUno.value;
	SegundoNumero = numeroDos.value;

	PrimerNumero = parseInt(PrimerNumero);
	SegundoNumero = parseInt(SegundoNumero);
	Resultado = PrimerNumero + SegundoNumero;
	alert("la suma es " + Resultado);
}

