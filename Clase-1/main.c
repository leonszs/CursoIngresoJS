#include <stdio.h>
#include <stdlib.h>

int main()
{
   int dinero;
   char tipo; // p, d , l , b
   int i;
   int dolarMax;
    int flag = 0;
   float contadorp = 0;
   float prompediop = 0;
   float acumuladorp = 0;
   float porcentaje;




   for (i = 0; i < 5 ; i++){

   printf ("ingrese el tipo de dinero: " );
   fflush(stdin);
   scanf("%c" , &tipo);

   while(! ( tipo == 'd'|| tipo == 'p'  || tipo == 'l' || tipo == 'b' )) {

        printf ( "error, reingrese el tipo de moneda");
        fflush(stdin);
        scanf("%c" , &tipo);


   }

   printf("ingrese la cantidad de dinero: ");
   fflush(stdin);

   scanf("%d" , &dinero);







   if ((dinero>dolarMax && tipo == 'd') ||(  flag == 0 && tipo == 'd')){

        dolarMax = dinero;
   flag = 1;


   }



   if (tipo == 'p'){
        acumuladorp = acumuladorp + dinero;
   contadorp++;


   }










   }
   if (contadorp!= 0){
        prompediop = acumuladorp / contadorp;


   }
   porcentaje = contadorp * 100 / 5;

   printf(" \n el dolar maximo es:  %d"  , dolarMax);
   printf("  \n el promedio de pesos es: %f" , prompediop);
   printf ( " \n el porcentaje del promedio es %f", porcentaje  );

   return 0;
}
