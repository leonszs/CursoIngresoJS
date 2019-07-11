function mostrar()
{
//tomo la edad  
var meses = document.getElementById('mes').value;

//alert (mesDelAño);

switch (meses){
 case "Febrero":
     alert ("este mes tiene 28 dias");
     break;


     case "Enero":
     case "Marzo":
     case "Mayo":
     case "Julio":
     case "Agosto":
     case "Octubre":
     case "Diciembre":
         alert ("este mes tiene 31 dìas ");
         break;
         
         default: alert ("este mes tiene 30 dias");



}
	
	



}//FIN DE LA FUNCIÓN