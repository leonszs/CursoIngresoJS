/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var resultado;
    var nuevosueldo;
    

    importe = document.getElementById ("importe").value;
    resultado =  importe*25
    nuevosueldo = resultado/100


    document.getElementById ("resultado").value = nuevosueldo;

    //en el descuento se multiplica y divide.
    //usar regla de 3 simple.
    //se puede hacer con 2 variables.


}
//(importe*25/100);