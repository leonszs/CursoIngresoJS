/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var ancho;
var largo;
var alambre;
var suma;

ancho = parseInt (document.getElementById ("Ancho").value);
largo = parseInt (document.getElementById ("Largo").value);

suma = ancho*2 + largo*2;

alambre = suma *3;
alert ("la cantidad de alambre es:  "+ alambre);





}
function Circulo () 
{
    
    
var radio;
var perimetro;
var alambre;

radio = parseInt  (document.getElementById ("Radio").value);

perimetro = radio*2*Math.PI; 

alambre = perimetro *3;
alert (" el alambre a compra es :  " + alambre );




}
function Materiales () 
{
    
    var ancho;
    var largo;
    var perimetro;
    var cal;
    var cemento;

    ancho = parseInt (document.getElementById ("Ancho").value);
    largo = parseInt (document.getElementById ("Largo").value);
    

perimetro = ancho*largo;
 cemento = perimetro *2;
  cal = perimetro *3;








}