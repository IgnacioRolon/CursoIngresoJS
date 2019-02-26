function mostrar()
{
	var ingreso;
	var letra;
	var letraMaxima;
	var letraMinima;
	var respuesta = 'si';
	var pares = 0;
	var impares = 0;
	var ceros = 0;
	var promedioPositivos = 0;
	var sumaNegativos = 0;
	var cantidadPositivos = 0;
	var maximo = -101;
	var minimo = 101;


	while(respuesta !='no'){
		ingreso = prompt("Ingrese un numero entre -100 y 100");
		ingreso = parseInt(ingreso);

		while(isNaN(ingreso) || ingreso < -100 || ingreso > 100){
			ingreso = prompt("Error, ingrese un numero valido");
			ingreso = parseInt(ingreso);
		}

		letra = prompt("Ingrese una letra");
		while(isNaN(letra == true) || letra.length > 1 || letra.length == 0){
			letra = prompt("Ingrese una letra valida");
		}
		if(ingreso == 0){			
			ceros++;			
		}else{
			if(ingreso % 2 == 0){
				pares++;
			}else{
				impares++;
			}
		}

		if(ingreso > 0){
			cantidadPositivos++;
			promedioPositivos = promedioPositivos + ingreso;
		}else{
			if(ingreso < 0){				
				sumaNegativos = sumaNegativos + ingreso;
			}
		}

		if(ingreso < minimo){
			minimo = ingreso;
			letraMinima = letra;
		}

		if(ingreso > maximo){
			maximo = ingreso;
			letraMaxima = letra;
		}
		respuesta = prompt("Ingrese no para dejar de ingresar");
	}

	promedioPositivos = promedioPositivos / cantidadPositivos;

	alert("La cantidad de numeros pares es de " + pares);
	alert("La cantidad de numeros impares es de " + impares);
	alert("La cantidad de ceros es de " + ceros);
	alert("El promedio de los positivos es de " + promedioPositivos);
	alert("La suma de los negativos es de " + sumaNegativos);
	alert("El numero maximo es " + maximo + " y su letra es " + letraMaxima);
	alert("El numero minimo es " + minimo + " y su letra es " + letraMinima);



}
