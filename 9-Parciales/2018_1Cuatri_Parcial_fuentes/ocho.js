function mostrar()
{
	var letra;
	var numero;
	var letraMaxima;
	var numeroMaximo = -101;
	var letraMinima;
	var numeroMinimo = 101;
	var respuesta = "si";
	var cantidadCeros = 0;
	var cantidadPares = 0;
	var cantidadImpares = 0;
	var cantidadPositivos = 0;
	var cantidadNegativos = 0;
	var sumaNegativos = 0;
	var promedioPositivos = 0;

	while(respuesta != "no"){
		letra = prompt("Ingrese la letra");
		while(isNaN(letra) == false || letra.length > 1 || letra.length == 0){
			letra = prompt("Ingrese una letra");
		}

		numero = prompt("Ingrese un numero entre -100 y 100");
		numero = parseInt(numero);
		while(numero < -100 || numero > 100){
			numero = prompt("Ingrese un numero entre -100 y 100");
			numero = parseInt(numero);
		}

		if(numero == 0){
			cantidadCeros++;
		}else{
			if(numero%2==0){
				cantidadPares++;
			}else{
				cantidadImpares++;
			}
		}

		if(numero > 0){
			promedioPositivos = promedioPositivos + numero;
			cantidadPositivos++;
		}else{
			if(numero < 0){
				sumaNegativos = sumaNegativos + numero;
			}			
		}

		if(numero > numeroMaximo){
			numeroMaximo = numero;
			letraMaxima = letra;
		}
		if(numero < numeroMinimo){
			numeroMinimo = numero;
			letraMinima = letra;
		}

		respuesta = prompt("Ingrese no para dejar de ingresar");
	}

	promedioPositivos = promedioPositivos / cantidadPositivos;

	document.write("La cantidad de numeros pares es de " + cantidadPares + "<br>");
	document.write("La cantidad de numeros impares es de " + cantidadImpares + "<br>");
	document.write("La cantidad de ceros es de " + cantidadCeros + "<br>");
	document.write("El promedio de los numeros positivos es de " + promedioPositivos + "<br>");
	document.write("La suma de los numeros negativos es de " + sumaNegativos + "<br>");
	document.write("El numero maximo es " + numeroMaximo + " y su letra es " + letraMaxima + "<br>");
	document.write("El numero minimo es " + numeroMinimo + " y su letra es " + letraMinima + "<br>");
	

}
