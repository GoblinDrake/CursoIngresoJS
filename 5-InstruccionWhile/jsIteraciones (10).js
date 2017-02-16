function Mostrar()
{

	var contador=0;
	var negativo=1;
	var positivo=0
	var num
	var cantn = 0
	var cantp = 0
	var cant0 = 0 	//declarar contadores y variables 
	var cantpar = 0
	var respuesta;
	var primera = true

	while(respuesta!=false)
	{
		num = prompt("ingrese numero")
		num = parseInt(num)
		respuesta = confirm("desea ingresar otro numero?")
		if (primera)
		{  
		max=num
		min=num	
		primera = false
	     }
		else 
		{if (num > max)
		  {
		  	max = num
		  	cantp+=max
		  }
		if (num < min)
		  {
		  	min = num
		  	cantn+=min
		  }
		if (num = 0)
		  {
			cant0+=num
	      }
	      
	    }


	
	}

document.write(num)


}//FIN DE LA FUNCIÓN