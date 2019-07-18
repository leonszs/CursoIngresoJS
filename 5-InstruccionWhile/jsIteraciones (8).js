function mostrar()
{

	
	var acumuladorpositivo=0;
	var acumuladornegativo=1;
	var numero;
	var contadornegativos = 0;


	do {
	 numero = parseInt (prompt("ingrese un numero"));
	 respuesta = prompt ("quiere volver a ingresar un numero");

	 //while (isNaN){
		// alert ("esto no es un numero");
		// numero = parseInt (prompt("ingrese un numero por favor"));
	// }
	 
	 
	 
	 if (numero>=0){

		acumuladorpositivo = numero+acumuladorpositivo;

		//contador++;
	 }
	 else  {
		 acumuladornegativo = acumuladornegativo*numero

		 contadornegativos++;



	 }
   

	}









	while (respuesta == "si");{

	}

		
	





document.getElementById('suma').value=acumuladorpositivo;


if (contadornegativos==0){

	acumuladornegativo = 0
}

	
	

document.getElementById('producto').value=acumuladornegativo;

}//FIN DE LA FUNCIÓN