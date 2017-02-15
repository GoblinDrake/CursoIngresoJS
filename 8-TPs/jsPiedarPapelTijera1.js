/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var num
var num2
	
function comenzar()
{
 num=1
 num2=3
 eleccionMaquina=Math.floor(Math.random()*(num2-num))+num;

 }
//FIN DE LA FUNCIÓN
function piedra()
{
	 comenzar()
               {
	
	switch(eleccionMaquina){
		case(1):
		alert("empató")
		break
		case(2):
		alert("perdió")
		break
		case(3):
		alert("ganó")
		break
			               }
			     }           
 }  

       
//FIN DE LA FUNCIÓN
function papel()
{
	 comenzar()
              {

switch(eleccionMaquina){
		case(1):
		alert("ganó")
		break
		case(2):
		alert("empató")
		break
		case(3):
		alert("perdió")
		break
			            }
			    }        

}//FIN DE LA FUNCIÓN
function tijera()
{
	
	 comenzar()
              {
	switch(eleccionMaquina){
		
		case(1):
		alert("perdio")
		break
		case(2):
		alert("ganó")
		break
		case(3):
		alert("empató")
		break
			            }
			    }         

}//FIN DE LA FUNCIÓN
 