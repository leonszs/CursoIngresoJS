function mostrar()
{

	
	 
	
	var respuesta = "si";
  var maximo;
  var minimo;
  var numero;
  var contador = 0;
  var respuesta;

  do {

  numero = parseInt (prompt("ingrese un numero"));
   respuesta = prompt ("quiere volver a ingresar un numero");

 if (contador==0){

	maximo = numero;
	minimo = numero;
	contador++;
  }
   else {

		if (numero>minimo){
			maximo=numero;
		}
		if (numero<minimo){
			minimo = numero;
		}
	 }
  }







	while(respuesta=="si");
	{
		
	
	}
document.getElementById("maximo").value=maximo
document.getElementById("minimo").value=minimo



}//FIN DE LA FUNCIÓN

//{
//var numero;
//var maximo;
//var minimo;
//var respuesta;
//var flag = 0;


//do {
	// numero = parseInt (prompt("ingrese un numero"));
	 //respuesta = prompt("quiere volver a ingresar un numero");


	// if (numero>minimo||flag ==0){

		//maximo = numero;
	 //}
	 //if (numero<minimo||flag ==0){
		// minimo = numero;
		// flag = 1;
	 //}

	// while (respuesta == "si") {

	// }

	// document.getElementById("maximo").value=maximo
	// document.getElementById("minimo").value=minimo

//}




  // }


 


 // }
