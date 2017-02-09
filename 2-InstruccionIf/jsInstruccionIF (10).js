function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var examen

	examen =parseInt(Math.random()*(11-1))+1

	if(examen==10 || examen==9){

		alert("Exelente")
	                            }
	if (examen >= 4 && examen <9){

		alert("Aprobó")
	                             }

	 if (examen<4 && examen> 0)

	 	alert("Vamos, la próxima se puede")



}//FIN DE LA FUNCIÓN