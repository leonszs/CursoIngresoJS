function mostrar()
{

	var numero =parseInt( prompt("ingrese un número entre 0 y 10."));

	while (numero<0||numero>10){

		alert ("numero incorrecto");
		numero = parseInt (prompt("reingrese numero"));
	}
   document.getElementById("Numero").value=numero

}//FIN DE LA FUNCIÓN