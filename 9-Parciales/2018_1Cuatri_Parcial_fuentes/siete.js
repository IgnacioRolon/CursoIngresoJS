function mostrar()
{
	var nota;
	var contador;
	var sexo;
	var promedio = 0;
	var notaBaja = 11;
	var sexoBajo;
	var cantidadVarones = 0;
	

	for(contador = 0;contador < 5; contador++){
		nota = prompt("Ingrese la nota del alumno");
		nota = parseInt(nota); //parseo

		while(isNaN(nota) == true || nota < 0 || nota > 10){
			nota = prompt("La nota debe ser numerica y entre 0 y 10. Ingresela nuevamente.")
		}

		sexo = prompt("Ingrese el sexo del alumno (f o m)");
		while(sexo != "f" && sexo !="m"){
			sexo = prompt("Ingrese el sexo del alumno en formato f o m");
		}

		promedio = promedio + nota;

		if(nota < notaBaja){
			notaBaja = nota;
			sexoBajo = sexo;
		}

		if(sexo = "m" && nota >= 6){
			cantidadVarones++;
		}
	}

	if(sexoBajo = "m"){
		sexoBajo = "masculino";
	}else{
		sexoBajo = "femenino";
	}

	promedio = promedio / 5;

	alert("El promedio de las notas totales es " + promedio);
	alert("La nota mas baja es " + notaBaja + " y el sexo del alumno es " + sexoBajo);
	alert("La cantidad de varomes cuya nota es mayor o igual a 6 es de: " + cantidadVarones);

}
