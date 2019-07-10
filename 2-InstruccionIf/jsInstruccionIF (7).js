function mostrar()
{
//tomo la edad  

    var edad;
    var estado;
    edad = parseInt (document.getElementById("edad").value);
    estado = document.getElementById("estadoCivil").value;


    if (edad<18  && estado!="Soltero"){

        alert ("es muy joven para no ser soltero");
    }

    //agarrar todos los id 
    // leer siempre la condiciòn

}//FIN DE LA FUNCIÓN