function mostrar()
{
    var sexo;
    var nota;
   var acumuladornotas = 0;

   var notabaja;
   var flag = 0;
   var sexobajo;

   var cantidadvarones = 0;

    for (var i = 1; i<5 ; i++){

           nota = parseInt (prompt ("ingrese una nota"));
           sexo = prompt ("ingrese su sexo");


           while (sexo!= "m" && sexo!= "f"){ 

            sexo = prompt ("error, reingrese su sexo");
           }

           while (nota<0 || nota>10){ 

            nota = parseInt (prompt ("error, reingrese su nota"));

           }
         acumuladornotas = acumuladornotas + nota;


         if (nota < notabaja || flag == 0){

            notabaja = nota;
            sexobajo = sexo;
            flag = 1;
         }

         if (sexo == "m " && nota >=6){ 

            cantidadvarones ++;
         }
       


    }

    promedio = acumuladornotas / 5;


   alert (" el promedio de las notas totales:    " + promedio);
   alert (" la nota mas baja:   " + notabaja + " el sexo de la persona:  " + sexobajo);
   alert ( " la cantida de varones q sacaron mas q 6:   " + cantidadvarones);



}
