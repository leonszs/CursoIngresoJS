function mostrar()
{
//tomo la edad  
var hora = document.getElementById('hora').value;

switch (hora){
   
    case "7":
    case "8":
    case "9":
    case "10":
    case "11":
        alert ("es de mañana");
        break;


  case "12":
  case "13":
  case "14":
  case "15":
  case "16":
  case "17":
   case "18":
   case "19":
       alert ("es de tarde");
       break;
       
       
    case "20":
    case "21":
    case "22":
    case "23":
    case "24":
        alert ("es de noche");
        break;


        default: alert ("esta hora no existe");










 }


 
}//FIN DE LA FUNCIÓN