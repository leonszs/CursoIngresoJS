function mostrar()
{
      
var peso;
var marca;
var temperatura;
var respuesta;

var contadortemperaturapares = 0;

var acumuladormarcas = 0;
var contadormarcas = 0;
var promediomarcas;

var productosenbajocero;
var contadordeproductosenbajocero = 0;



do {   

       marca = prompt ("ingrese la marca");
       peso = parseInt (prompt ("ingrese el peso"));
        
       while (peso<1 || peso >100 || isNaN (peso)){ 

         peso = parseInt (prompt ("error, por favor reingrese el peso"));
       }

        temperatura = parseInt (prompt ("ingrese la temperatura"));

        while (temperatura<-30 || temperatura >30 || isNaN (temperatura)){ 

         temperatura = parseInt (prompt (" error, reingrese la temperatura por favor "));
        }



       if (temperatura % 2 == 0){ 

          contadortemperaturapares++;

       }

       acumuladormarcas = acumuladormarcas + peso;
       
       if (peso>minimo || flag == 0){ 
          maximo = peso
       }


       if (peso<minimo || flag == 0){ 

         minimo = peso;
         flag = 1;
       }
       

       if (temperatura<0){ 
           productosenbajocero = marca;

           contadordeproductosenbajocero++;
          
       }

       
} 

while (respuesta =="si");
      

       

           

     
}
