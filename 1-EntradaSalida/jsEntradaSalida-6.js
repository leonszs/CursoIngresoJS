/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
  var numero1;
  var numero2;
  var suma;

numero1= document.getElementById("numeroUno").value;
numero2=document.getElementById("numeroDos").value;

suma = parseInt (numero1)+parseInt (numero2);

//parseint para ambas variables
//el parseint se usa como sea mas comodo para c/u
alert ("el resultado es  "+suma);



}

