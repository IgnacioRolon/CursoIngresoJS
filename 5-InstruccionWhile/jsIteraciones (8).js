function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;	
	var respuesta='si';

	while(respuesta == "si"){
	
	ingresado = prompt("Ingrese un numero");	
	ingresado = parseInt(ingresado);	
	if(ingresado <0){
		negativo = negativo * ingresado;
	}else{
		positivo = positivo + ingresado;
	}	
	contador++;
	respuesta = prompt("Ingrese si para continuar");
}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN