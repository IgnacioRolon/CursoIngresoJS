function mostrar()
{
	
	
	var numero1;
	var numero2;
	var resultado;

	numero1 = prompt("Ingrese el primer numero");
	numero2 = prompt("Ingrese el segundo numero");

	if(numero1 == numero2) //RECORDAR PONER doble ==
	{
		resultado = numero1 + numero2;
		alert(resultado);
	}
	else
	{
		numero1 = parseInt(numero1);
		numero2 = parseInt(numero2);
		if(numero1 > numero2)
		{
			resultado = numero1 - numero2;
			alert(resultado);
		}
		else
		{
			resultado = numero1 + numero2;
			if (resultado > 10)
			{
				alert("La suma es " + resultado + " y supero el 10");
			}
			else
			{
				alert(resultado);
			}
		}	
	}
	
	
}
