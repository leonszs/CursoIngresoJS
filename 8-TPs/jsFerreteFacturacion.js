/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
     var precio1;
     var precio2;
     var precio3;
     var suma;

     precio1 =parseInt  (document.getElementById ("PrecioUno").value);
     precio2 =parseInt  (document.getElementById ("PrecioDos").value);
     precio3 = parseInt  (document.getElementById ("PrecioTres").value);

    suma = (precio1 + precio2 + precio3);

    alert ("la suma es:  " + suma);
    



}
function Promedio () 
{
    
    var precio1;
    var precio2;
    var precio3;
    var suma;
    var promedio;




    precio1 = parseInt (document.getElementById ("PrecioUno").value);
    precio2 = parseInt  (document.getElementById ("PrecioDos").value);
    precio3 = parseInt  (document.getElementById ("PrecioTres").value);

    suma = precio1+precio2+precio3;
    promedio = suma/3;
    alert ("el promedio es " + promedio );






}
function PrecioFinal () 
{


    var precio1;
    var precio2;
    var precio3;
    var precioconiva;
    var preciofinal;
    var suma;


    
    precio1 = parseInt (document.getElementById ("PrecioUno").value);
    precio2 = parseInt  (document.getElementById ("PrecioDos").value);
    precio3 = parseInt  (document.getElementById ("PrecioTres").value);



    suma = precio1+precio2+precio3
    precioconiva = suma*21/100;
    preciofinal = suma + precioconiva;

    alert ("el precio con descuento de iva es " + preciofinal);
   



}