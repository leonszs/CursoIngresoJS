function mostrar()
{
    var numero;
	var contador=0;
	var acumulador=0;
	var respuesta="si"
	var suma=0;
	var promedio;

	do {

		numero = parseInt (prompt("ingrese un numero"));
		prompt ("quiere volver a ingresar un numero?")

		
		
		



	}
	while (respuesta=="si"){
		numero = parseInt (prompt ("ingrese un numero"));
		
       acumulador = acumulador + numero;
      contador++;
	}
	






document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN