var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

var eleccionMaquina;
var mensaje;
function comenzar()
{
	
	eleccionMaquina = Math.floor(Math.random() * 3) + 1; 
	console.log(eleccionMaquina)


}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(eleccionMaquina){
		case 1:
			mensaje = "La maquina elije piedra. Empate."
			ContadorDeEmpates++;
		break;

		case 2:
			mensaje = "La maquina elije papel. Has perdido."
			ContadorDePerdidas++;
		break;

		case 3:
			mensaje = "La maquina elije tijera. Has ganado."
			ContadorDeGanadas++;
		break;
	}
	
	alert(mensaje);
	comenzar();
	mostrarResultado();

}//FIN DE LA FUNCIÓN
function papel()
{
	switch(eleccionMaquina){
		case 1:
			mensaje = "La maquina elije piedra. Has ganado."
			ContadorDeGanadas++;
		break;

		case 2:
			mensaje = "La maquina elije papel. Empate."
			ContadorDeEmpates++;
		break;

		case 3:
			mensaje = "La maquina elije tijera. Has perdido."
			ContadorDePerdidas++;
		break;
	}

	alert(mensaje);
	comenzar();
	mostrarResultado();

}//FIN DE LA FUNCIÓN
function tijera()
{
		switch(eleccionMaquina){
		case 1:
			mensaje = "La maquina elije piedra. Has perdido."
			ContadorDePerdidas++;
		break;

		case 2:
			mensaje = "La maquina elije papel. Has ganado."
			ContadorDeGanadas++;
		break;

		case 3:
			mensaje = "La maquina elije tijera. Empate."
			ContadorDeEmpates++;
		break;
	}

	alert(mensaje);
	comenzar();
	mostrarResultado();
}//FIN DE LA FUNCIÓN
function mostrarResultado()
{
	ganadas.value = "Ganadas: " + ContadorDeGanadas;
	perdidas.value = "Perdidas: " + ContadorDePerdidas;
	empatadas.value = "Empatadas: " + ContadorDeEmpates;
}