function mostrar()
{

    var sexo;
    var nota;
    var promedionotas;
    var notamasbaja;
    var cantidadvarones = 0;
    var flag = 0;
    var acumuladornotas = 0;

    var sexonotabaja;



    for ( var i = 0;i< 5; i++ )  { 
            

        nota = parseInt (prompt ("ingrese una nota"));

        while (nota>10 || nota<0 || isNaN (nota)){ 

            nota = parseInt (prompt ("error, por favor reingrese la nota"));
        }


        sexo = prompt ("ingrese su sexo f o m");

        while (sexo != "m" && sexo != "f"){ 

            sexo = prompt (" sexo invalido");
        }


        acumuladornotas = acumuladornotas + nota;           //a



      if ( nota< notamasbaja || flag == 0){            //b

           notamasbaja = nota;
            sexonotabaja = sexo;
           

      }

     if (nota >= 6 && sexo == "m"){        //c

              cantidadvarones++;

     }



     










    }

    promedionotas = acumuladornotas / 5;  //a
    

    alert (" el promedio total de las notas es "+promedionotas);
    alert (" la nota mas baja es:    " + notamasbaja + "y el sexo es: " + sexonotabaja );
    alert ("los varones q sacaron mas q 6 : " + cantidadvarones );


}
