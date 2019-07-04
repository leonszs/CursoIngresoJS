/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var sueldo;

var resultado;
var nuevosueldo;

sueldo = parseFloat(  document.getElementById ("sueldo").value);
resultado= sueldo*.1;
nuevosueldo = resultado+sueldo
 document.getElementById ("resultado").value =nuevosueldo;
 




//cuando el resultado se pide por documentelementbyid, el ejercicio finaliza con la variable
//en los aumentos solo se multiplica
//realizar con 3 variables
	
}
