function Mostrar()
{

	var contador=0;
	// declarar variables
	var respuesta = true;
	var num
	var max
	var min
	var primera = true


	while(respuesta)
	{
		num=prompt("Ingrese el numero")
		num=parseInt(num)
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
		  }
		if (num < min)
		  {
		  	min = num
		  }
	     }		
	
	}

document.getElementById("maximo").value = max
document.getElementById("minimo").value = min


}//FIN DE LA FUNCIÓN