function mostrar()
{
	var promedio = 0;
	var contador;
	var ingreso;
	var sexo;
	var cantidadVarones = 0;
	var notaBaja = 11;
	var sexoBajo;

	for(contador = 0; contador < 5; contador++){
		ingreso = prompt("Ingrese la nota");
		ingreso = parseInt(ingreso);

		while(isNaN(ingreso) || ingreso < 0 || ingreso > 10){
			ingreso = prompt("Error, ingrese una nota valida");
			ingreso = parseInt(ingreso);
		}
		

		sexo = prompt("Ingrese el sexo")
		while(sexo != "f" && sexo != "m"){
			sexo = prompt("Error, ingrese un sexo valido. (m, f)");
		}

		promedio = promedio + ingreso; //sumo las notas

		if(sexo == "m" && ingreso >= 6){ //cantidad de varones cuya nota sea mayor a 6
			cantidadVarones = cantidadVarones + 1;
		}
		
		if(ingreso < notaBaja){ //nota mas baja
			notaBaja = ingreso;
			sexoBajo = sexo;
		}
	}

	if(sexoBajo == "m"){
		sexoBajo = "masculino";
	}else{
		sexoBajo = "femenino;"
	}

	promedio = promedio / 5;
	alert("El promedio es: " + promedio);
	alert("La nota mas baja es " + notaBaja + " y el sexo del alumno es " + sexoBajo);
	alert("Los cantidad de varones cuya nota es mayor o igual a 6 es de: " + cantidadVarones);
}
