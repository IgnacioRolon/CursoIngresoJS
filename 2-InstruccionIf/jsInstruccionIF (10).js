function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var randomnum; 	
	randomnum = Math.floor(Math.random() * 10) + 1; 

	if(randomnum >= 4){
		if(randomnum > 8){
			alert("EXCELENTE");
		}
		else{
			alert("APROBÓ");
		}
	}else{
		alert("Vamos, la proxima se puede")
	}
}//FIN DE LA FUNCIÓN