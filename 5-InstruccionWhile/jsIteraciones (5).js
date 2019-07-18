function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (sexo !="f" && sexo != "m" && sexo != "M" && sexo != "F"){
    alert ("sexo invalido");
    sexo = prompt ("porfavor reingrese su sexo f o m");

}



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN