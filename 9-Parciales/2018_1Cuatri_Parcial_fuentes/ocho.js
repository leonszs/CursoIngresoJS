function mostrar()
{ 

var numero;
var letra;
var contadorpar = 0;
var contadorimpar = 0;
var contadorceros = 0;
var respuesta;
var maximo;
var minimo;

var letramax;
var letramin;

var contadornegativos = 0;
var contadorpositivos = 0;

var promediopositivos = 0;
var acumuladornegativos = 0;
var acumuladorpositivos = 0;

var flag = 0;


do { 

    numero = parseInt (prompt ("ingrese un numero"));

    while (numero < -100 || numero>100 ||    isNaN (numero)){ 

        numero = parseInt (prompt ("error, porfavor reingrese numero"));
    }

     letra = prompt ("ingrese una letra");


     
         



     
    
    

     if (numero<0){ 
       acumuladornegativos = acumuladornegativos +numero; //e

       contadornegativos++;

     }
     else if (numero>0){  //d

        acumuladorpositivos = acumuladorpositivos + numero;

        contadorpositivos++;
     }
     else { 

        contadorceros++;         //c
     }


     if (numero % 2 == 0){        //a

        contadorpar++;
     }

    else //if (numero %2 == 1){  //b
         {  

        contadorimpar++;
     }

     if (numero>minimo || flag == 0){  //f
         
        

        maximo = numero;
        letramax = letra;
     }
            
     if (numero<minimo  || flag == 0  ) {   //f
          
     minimo = numero;
     letramin = letra;



          flag = 1;
            }

           respuesta = prompt ("quiere seguir ingresando");
 } 

     while (respuesta == "si");



     if (contadorpositivos !=0 ){        //d

        promediopositivos = acumuladorpositivos /contadorpositivos;
     }

     

     document.write ("1- Promedio de positivos es:   " + promediopositivos + "<br>");
     document.write (" 2 -suma de los negativos es:      " + acumuladornegativos + "<br>" );
     document.write (" 3- suma de los positivos es :" + acumuladorpositivos + "<br>" );
     document.write ("4- la cantidad de negativos es :  " + contadornegativos + "<br>"  );
     document.write ("5- la cantidad de positivos es:   " + contadorpositivos + "<br>" );
     document.write ("6- cantidad de impares  " + contadorimpar + "<br>" );
     document.write (" 7 - cantidad de pares   " + contadorpar + "<br>" );
     document.write ("8 -      cantidad de ceros  " + contadorceros + "<br>" );
     document.write ("9- el numero maximo es:    " + maximo + "letra: " + letramax + "<br>");
     document.write ( "10- el numero minimo es:   " + minimo + " letra:  " + letramin + "<br>");

     
     





  }


 




























