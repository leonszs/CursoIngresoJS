function mostrar()
{   

	var numero;
	var suma = 0;
	var promedio;

	var contador=0;
	var acumulador=0;



	while (contador<5){
		numero = parseInt(prompt ("ingrese un numero"));
		suma +=numero;

         



		contador++;
	}

	promedio = suma/5;



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN

// calcular el promedio va fuera de bucle


//el contador se usa dentro del bucle.