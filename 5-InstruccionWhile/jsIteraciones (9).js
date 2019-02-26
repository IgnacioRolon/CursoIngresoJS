function mostrar()
{

	var contador=0;
	var numero;
	var Maximo;
	var Minimo;

	// declarar variables
	
	var respuesta='si';
	numero = prompt("Ingrese el numero");
	Maximo = numero;
	Minimo = numero;
	respuesta = prompt("Ingrese no para dejar de ingresar")
	while(respuesta!='no')
	{		
		numero = prompt("Ingrese el numero");
		if(numero > Maximo){
			Maximo = numero;
		}
		if(numero < Minimo){
			Minimo = numero;
		}
		respuesta = prompt("Ingrese no para dejar de ingresar numeros");	
		console.log(Maximo)
		console.log(Minimo)
	}

NumeroMaximo.value = Maximo;
NumeroMinimo.value = Minimo;




}//FIN DE LA FUNCIÓN