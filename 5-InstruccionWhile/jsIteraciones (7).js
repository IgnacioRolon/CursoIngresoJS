function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var ingresado;

while(respuesta == "si"){
	
	ingresado = prompt("Ingrese un numero");
	ingresado = parseInt(ingresado);	
	acumulador = acumulador + ingresado;	
	contador++;
	respuesta = prompt("Ingrese si para continuar");
}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN