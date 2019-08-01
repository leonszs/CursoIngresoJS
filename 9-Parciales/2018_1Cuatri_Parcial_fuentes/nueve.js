function mostrar()
{
      var temperatura;
      var peso;
      var producto;
         var temperaturapares = 0;




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







      }








}
