function mostrar()
{

var animal;
var temperatura;
var peso;
var respuesta;

var temperaturaspares = 0;

var pesomaximo;
var pesominimo;
var flag = 0;

var animalmaspesado;
var animalpeso;

var cantidadanimalesencero = 0;

var acumuladorpesoanimales = 0;
var promediodeanimales;





do { 
       animal = prompt ("ingrese el nombre de un animal");
       
       peso = parseInt (prompt (" ingrese el peso del animal"));

       while (peso<1 || peso > 1000 || isNaN (peso)){ 

           peso = parseInt (prompt (" error, porfavor reingrese el peso del animal"));

       }

       temperatura = parseInt (prompt ("ingrese la temperatura"));

       while (temperatura< -30 || temperatura > 30 || isNaN (temperatura)){ 

        temperatura = parseInt (prompt ("error, porfavor reingrese la temperatura"));

       }

        if (temperatura % 2 == 0){       //a

             temperaturaspares++;
        }

        if (temperatura > animalmaspesado || flag == 0 ) {    //b

            animalmaspesado = temperatura;
            animalpeso = animal;
        }

        if (temperatura<0){                    //c

            cantidadanimalesencero ++;
        } 

            
       acumuladorpesoanimales = acumuladorpesoanimales + animal;   //d


       if (temperatura>minimo || flag == 0 ){    //e

           maximo = temperatura;

       }

       if (temperatura<minimo || flag == 0){  //e

        minimo = temperatura;
        flag = 1;
       }

      



 }
 while (respuesta == "si");

 promediodeanimales = acumuladorpesoanimales / peso;  //b


 document.write ("1- las temperaturas pares son:    " + temperaturaspares + "<br>");
 document.write ("2- la temperatura es  " + animalmaspesado + "el animal es:  " + animalpeso + "<br>");
 document.write ("3- animales en temperatura bajo 0 :  " + cantidadanimalesencero + "<br>");
 document.write ("4- cantidad del peso de los animales:   " + acumuladorpesoanimales + "<br>");
 document.write (" 5- el peso maximo es:  " + maximo + "<br>");
 document.write (" 6- el peso minimo es:  " + minimo + "<br>");
 document.write (" 7- el promedio de los animales es: " + promediodeanimales + "<br>");












































}
