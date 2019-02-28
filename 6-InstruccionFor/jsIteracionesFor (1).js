function mostrar()
{
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;	
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;
	var contador10=0;
	
	var limite = prompt("Ingrese la cantidad de veces a lanzar un numero random");

	var randomNum;	
	for(contador=0;contador<limite;contador++){
		 	
		randomNum = Math.floor(Math.random() * 10) + 1; 

		switch(randomNum){
			case 1:
				contador1++;
			break;

			case 2:
				contador2++;
			break;

			case 3:
				contador3++;
			break;

			case 4:
				contador4++;
			break;

			case 5:
				contador5++;
			break;

			case 6:
				contador6++;
			break;

			case 7:
				var porcentaje = contador7 * 100 / limite
				if(porcentaje >= 6){
					contador --;
					continue;
				}
				contador7++;
			break;

			case 8:
				contador8++;
			break;

			case 9:
				contador9++;
			break;

			case 10:
				contador10++;
			break;

		}
	}

	document.write("Cantidad de veces lanzado: " + limite + " <br> <br>")
	document.write("Cantidad de veces que salio 1: " + contador1 + ", lo que es un " + contador1 * 100 / limite + "% <br>" );
	document.write("Cantidad de veces que salio 2: " + contador2 + ", lo que es un " + contador2 * 100 / limite + "% <br>" );
	document.write("Cantidad de veces que salio 3: " + contador3 + ", lo que es un " + contador3 * 100 / limite + "% <br>" );
	document.write("Cantidad de veces que salio 4: " + contador4 + ", lo que es un " + contador4 * 100 / limite + "% <br>" );
	document.write("Cantidad de veces que salio 5: " + contador5 + ", lo que es un " + contador5 * 100 / limite + "% <br>" );
	document.write("Cantidad de veces que salio 6: " + contador6 + ", lo que es un " + contador6 * 100 / limite + "% <br>" );
	document.write("Cantidad de veces que salio 7: " + contador7 + ", lo que es un " + contador7 * 100 / limite + "% <br>" );
	document.write("Cantidad de veces que salio 8: " + contador8 + ", lo que es un " + contador8 * 100 / limite + "% <br>" );
	document.write("Cantidad de veces que salio 9: " + contador9 + ", lo que es un " + contador9 * 100 / limite + "% <br>" );
	document.write("Cantidad de veces que salio 10: " + contador10 + ", lo que es un " + contador10 * 100 / limite + "% <br>" );

}

/* Un for que vaya del 1 al 10

*/
