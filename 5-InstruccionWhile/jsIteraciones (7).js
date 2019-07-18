function mostrar()
{
    var numero;
	var contador=0;
	var acumulador=0;
	var respuesta="si"
	
	var promedio;
   do {

		numero = parseInt (prompt ("ingrese un numero"));
		respuesta = prompt ("quiere volver a ingresar un numero");
        
		acumulador = acumulador+numero;
		contador++;
	}
	
	
	while (respuesta=="si"){
		//numero = parseInt (prompt ("ingrese un numero"));
	
		

		
       //acumulador = acumulador + numero;
	 // contador++;
	  
	 // respuesta = prompt ("quiere volver a ingresar un numero");
	}
	






document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN