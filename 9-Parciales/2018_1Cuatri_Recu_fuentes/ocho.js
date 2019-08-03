function mostrar()
{
      

    var letra;
    var numero;
    var contadorpar = 0;
    var contadorimpar = 0;
     var contadorceros = 0;

    var acumuladorpositivo = 0;
    var acumuladornegativo = 0;
    var contadornegativo = 0;
    var contadorpositivo = 0;

    var minimo;
    var maximo;
    var flag;
    var respuesta;

    var promediopositivo = 0;
    var promedionegativo = 0;



    do { 
               numero = parseInt (prompt ("ingrese un numero"));

               while (numero<-100 || numero>100 || isNaN (numero)){ 

                numero = parseInt (prompt ("error reingrese numero") );
               }

               letra = prompt ("ingrese una letra");


               if (numero % 2 == 0){ 

                   contadorpar++;
               }

               else { 

                contadorimpar++;
               }


               if (numero>0) { 

               acumuladorpositivo = acumuladorpositivo + numero;

               contadorpositivo++;
                }

                 
                else if (numero<0 ){ 

                    acumuladornegativo = acumuladornegativo + numero;
                    contadornegativo++;
                }

                else { 

                    contadorceros++;
                }


               if (numero > minimo || flag == 0){ 
                  
                maximo = numero;
              

               }

               if (numero < minimo || flag == 0){ 

                minimo = numero;
                
                flag = 1;
               }
                 
            }
               while (respuesta == "si");



               if (contadorpositivo != 0){ 


                promediopositivo = acumuladorpositivo /contadorpositivo;
               }

               if (contadornegativo != 0 ){ 

                promedionegativo = acumuladornegativo /contadornegativo;
               }


            














    














}
