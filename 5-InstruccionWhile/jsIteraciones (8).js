function Mostrar()
{

	var contador= 0;
	var positivo=0
	var negativo= 1;
	var num
	var respuesta;
	

	while (respuesta != false)
	{

		num=prompt("ingrese numero")
		num=parseInt(num)
        
		respuesta = confirm("desea ingresar otro numero?")       
         if(num >= 0)
         {
         positivo+=num
         }  
         else
         {
         negativo*=num
        }
    }
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;


}//FIN DE LA FUNCIÓN