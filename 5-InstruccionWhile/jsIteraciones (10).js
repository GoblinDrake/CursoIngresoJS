function Mostrar()
{

	
	var negativo=0;
	var positivo=0
	var num
	var cantn = 0
	var cantp = 0
	var cant0 = 0 	//declarar contadores y variables 
	var cantpar = 0
	var respuesta;
	

	while(respuesta!=false)
	{
		num = prompt("ingrese numero")
		num = parseInt(num)
		respuesta = confirm("desea ingresar otro numero?")
		
		if (num > 0)
		  {
		  	positivo+=num
		  	cantp++
		  }
		else {
			if (num < 0)
		  {
		  	negativo+=num
		  	cantn++
		  }
		     else
		     {
			  cant0++
              }
              }
	    
	     if (num % 2 == 0)
	     {
	     	
	      cantpar++

	      }

	    
	}
    msj = "p.pos" + (positivo/cantp) + "<br>"
    msj +="p.neg" + (negativo/cantn) + "<br>"
    msj +="dif" + (positivo-negativo) + "<br>"
	document.write(msj)



}//FIN DE LA FUNCIÓN