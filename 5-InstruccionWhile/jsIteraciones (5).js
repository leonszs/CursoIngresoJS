function mostrar()
{

var sexo = prompt("ingrese f ó m .");
//var femenino ="f";
//var masculino = "m"; INNECESARIO


while (sexo != "f" && sexo !="m"&& sexo!= "F"&& sexo!="M"){

   alert ("sexo invalido");
    sexo = prompt ("reingrese sexo")


    

}



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN