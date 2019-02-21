function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo !="f" && sexo != "m"){
	sexo = prompt("ingrese f ó m .");
}
Sexo.value = sexo;


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN