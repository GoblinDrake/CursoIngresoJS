function Mostrar()
{
//tomo la edad  

var edad
edad= document.getElementById("edad").value

if (edad >= 18){

	alert("usted es mayor de edad")
             }

if( edad >= 13 && edad <=17){

	alert("usted es adolescente")
                          }
if( edad < 13){
	alert("usted es un niño")
}	


 

}//FIN DE LA FUNCIÓN