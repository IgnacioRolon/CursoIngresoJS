function mostrar()
{
	var numero1;
	var numero2;
	var cuenta;

	numero1 = prompt("Ingrese el primer numero");
	numero2 = prompt("Ingrese el segundo numero");

	if(numero1 == numero2){
		cuenta = numero1+numero2;
		alert(cuenta);
	}else{
		numero1 = parseInt(numero1);
		numero2 = parseInt(numero2);
		if(numero1 > numero2){
			cuenta = numero1 / numero2;
			alert(cuenta);
		}else{
			cuenta = numero1 + numero2;
			if(cuenta < 50){
				alert("La suma es " + cuenta + " y es menor a 50");
			}else{
				alert(cuenta);
			}
		}
	}
}
