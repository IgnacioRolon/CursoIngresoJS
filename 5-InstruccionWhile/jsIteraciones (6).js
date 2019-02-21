function mostrar()
{

	var contador=0;
	var acumulador = 0;
	var ingresado;

while(contador < 5){
	
	ingresado = prompt("Ingrese un numero");
	ingresado = parseInt(ingresado);	
	acumulador = acumulador + ingresado;	
	contador++;
}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN