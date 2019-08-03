function mostrar()
{
    var sexo;
    var nota;
   var acumuladornotas = 0;

   var notabaja;
   var flag = 0;
   var sexobajo;
    var  notamasaltavarones;
   var cantidadvarones = 0;

    for (var i = 0; i<5 ; i++){

           nota = parseInt (prompt ("ingrese una nota"));
           sexo = prompt ("ingrese su sexo");


           while (sexo!= "m" && sexo!= "f"){ 

            sexo = prompt ("error, reingrese su sexo");
           }

           while (nota<0 || nota>10){ 

            nota = parseInt (prompt ("error, reingrese su nota"));

           }
         acumuladornotas = acumuladornotas + nota;


         if (nota < notabaja || i == 0 ){            // flag == 0;// cuando se tiene q decir una vez, no utilizar flag (funciona igual y està bien);

            notabaja = nota;
            sexobajo = sexo;
           
         }

         if (nota >= 6 && sexo == "m"){  //el orden altera la respuesta, ultimo va la validacion del sexo etc.
               
            
            cantidadvarones ++;
         }
       


    }

    promedio = acumuladornotas / 5;


   alert (" el promedio de las notas totales:    " + promedio);
   alert (" la nota mas baja:   " + notabaja + " el sexo de la persona:  " + sexobajo);
   alert ( " la cantida de varones que sacaron mas q 6: " + cantidadvarones );



}

