function mostrar()
{
	/*
	var numeroIngresado;
	numeroIngresado=prompt();
	numeroIngresado = parseInt(numeroIngresado);
	for(numeroAnterior = numeroIngresado - 1 ; numeroAnterior > 1 ; numeroAnterior--){
		console.log(numeroAnterior);
		if(numeroIngresado%numeroAnterior == 0){ //si el resto de dividir numeroIngresado y numeroAnterior es == 0
			break; //sale del for
		}
	}

	if(numeroAnterior==1){ //si el for termino su ciclo es porque no encontró ningun divisor, por lo que es un número primo
		console.log("Es primo");
	}else{
		console.log("No es primo");
	}
	*/
	/*
	var numeroIngresado;
	var recorrido;
	numeroIngresado=prompt();
	numeroIngresado = parseInt(numeroIngresado);
	for(recorrido = numeroIngresado - 1 ; recorrido > 2 ; recorrido--){
		for(numeroAnterior = recorrido - 1 ; numeroAnterior > 1 ; numeroAnterior--){
			
			console.log(numeroAnterior);
			if(recorrido % numeroAnterior == 0){ //si el resto de dividir numeroIngresado y numeroAnterior es == 0
				break; //sale del for
			}
		}

		if(numeroAnterior==1){ //si el for termino su ciclo es porque no encontró ningun divisor, por lo que es un número primo
			console.log("Es primo" + recorrido);
		}
	}
	*/
	var numeroIngresado;
	var numeroAnterior;
	var acumulador = 0;

	numeroIngresado = prompt("Ingrese el numero");
	numeroIngresado = parseInt(numeroIngresado);

	for(numeroAnterior = numeroIngresado - 1; numeroAnterior > 0; numeroAnterior --){
		if(numeroIngresado % numeroAnterior == 0){
			acumulador = acumulador + numeroAnterior;
		}
		console.log(acumulador)

	}

	if(acumulador == numeroIngresado){
		console.log("Es perfecto");
	}else{
		console.log("No es perfecto");
	}
}