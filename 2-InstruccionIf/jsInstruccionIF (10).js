function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numerorandom = Math.floor (Math.random()*10+1);
   
	if (numerorandom>=9 ){

		alert ("nota:  "+numerorandom+        "  excelente");
	}
else if (numerorandom>=4 && numerorandom<9){

	alert ("nota:  "+numerorandom+"  aprobo");
}
else {

	alert ("nota  "+numerorandom+"  suerte para la proxima");
}
}//FIN DE LA FUNCIÓN


//usar la variable en el ALERT para saber cual fue la nota.