function mostrar()
{
	var contador = 0;
	var peso;
	var temperatura;
	var nombreAnimal;
	var nombreAnimalMaxima;
	var respuesta = 'si';
	var pares = 0;
	var promedioPeso = 0;
	var contadorNegativos = 0;	
	var maximoPeso = -1;
	var maximaTemperatura = -31;
	var maximoMenor = -1;
	var minimoMenor = 1001;


	while(respuesta !='no'){
		nombreAnimal = prompt("Ingrese el nombre del animal");
		while(isNaN(nombreAnimal == true) || nombreAnimal.length == 0){
			nombreAnimal = prompt("Ingrese una nombre de animal valido");
		}

		peso = prompt("Ingrese un peso entre 0 y 1000");
		peso = parseInt(peso);

		while(isNaN(peso) || peso < 0 || peso > 1000){
			peso = prompt("Error, ingrese un peso valido");
			peso = parseInt(peso);
		}

		promedioPeso = promedioPeso + peso; //sumo los pesos para luego promediarlos

		temperatura = prompt("Ingrese una temperatura");
		temperatura = parseInt(temperatura);

		while(isNaN(temperatura) || temperatura < -30 || temperatura > 30){
			temperatura = prompt("Error, ingrese una temperatura valida");
			temperatura = parseInt(temperatura);
		}
		
		if(temperatura % 2 == 0){
			pares++;
		}

		if(temperatura < 0){				
			contadorNegativos++;
			if(peso > maximoMenor){
				maximoMenor = peso;			
			}
			if(peso < minimoMenor){
				minimoMenor = peso;
			}
		}		

		if(peso > maximoPeso){
			maximaTemperatura = temperatura;
			nombreAnimalMaxima = nombreAnimal;
			maximoPeso = peso;
		}
		contador++;
		respuesta = prompt("Ingrese no para dejar de ingresar");
	}

	promedioPeso = promedioPeso / contador;

	alert("La cantidad de temperaturas pares es de " + pares);
	alert("El nombre del animal mas pesado es " + nombreAnimalMaxima + " y su temperatura es " + maximaTemperatura);
	alert("La cantidad de animales a menos de 0 grados es de: " + contadorNegativos);
	alert("El promedio de peso de todos los animales es " + promedioPeso);
	if (maximoMenor == -1){
		alert("No se ha ingreado ningun animal cuya temperatura sea menor a 0")
	}else{
		alert("De los animales cuya temperatura es menor a 0, el peso maximo es " + maximoMenor + " y el minimo es " + minimoMenor);
	}
	

}
/*
Bienvenidos. 
Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser entre 1 y 1000 y 
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
*/