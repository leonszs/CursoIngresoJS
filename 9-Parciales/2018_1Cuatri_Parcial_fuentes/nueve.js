function mostrar()
{
      var temperatura;
      var peso;
      var producto;
         var temperaturapares = 0;
         var respuesta;
         var flag = 0;  

         var maximo;
         var minimo;
         var pesomaspesado;

         var contadorproductosencero = 0;

         var promediopeso=0;
         var contadorpesopositivos = 0;
         var acumuladorpesopositivos = 0;





      do { 
         producto = prompt ("ingrese producto  ");
         temperatura = parseInt (prompt ("ingrese una temperatura "));


         while (temperatura < -30 || temperatura > 30 || isNaN(temperatura)){

            temperatura = (prompt ("error, reingrese la temperatura"));
         }

         peso = parseInt (prompt("ingrese el peso"));


         while (peso<1 || peso>100 || isNaN (peso)){

            peso = parseInt (prompt ("error, reingrese el peso"));


         }

         respuesta = prompt ("quiere volver a ingresar");

          if (temperatura % 2 == 0){
                temperaturapares++;

          }

           else if ( peso > pesomaspesado){
                 pesomaspesado = peso;
           }


           else {

            contadorproductosencero++;
           }
           



           if (peso>minimo || flag == 0 ){

                maximo = peso;
                
                 
           }

           if (peso<minimo || flag == 0){ 

               minimo = peso;
               flag = 1;
                }
           

      

       

           

      }
            while (respuesta == "si");


 


 




            document.write ("1 -  las temperaturas pares son:   " + temperaturapares + "<br>");
              document.write (" 2-  las temperaturas menor a 0 es:  " + contadorproductosencero + "<br>");
           document.write (" 3- el peso maximo es:    " + maximo + "<br>");
           document.write (" 4- el peso minimo es:    " + minimo + "<br");
           document.write ("5- el peso mas pesado es :   " + pesomaspesado + "<br>");


}
