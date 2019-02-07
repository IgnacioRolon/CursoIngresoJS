/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
/*
APUNTE

Descuento:
Sueldo = 100
Descuento = Sueldo*(porcentaje a cambiar)/100
Sueldo = Sueldo - descuento 
Sueldo * (1-0.1)
Sueldo * 0.9

Aumento:
Sueldo = 100
Aumento = Sueldo + Sueldo * (porcentaje)/100
Sueldo * (1+0.1)
Sueldo * 1.1
*/
function mostrarAumento()
{
	var Sueldo;

	Sueldo = sueldo.value;
	Sueldo = parseInt(Sueldo) * 1.1;

	resultado.value = Sueldo;
	
}
