function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var num

while (respuesta != false){


 num=prompt("ingrese numero")
 num=parseInt(num)
 acumulador+=num
 contador++
 respuesta = confirm("desea ingresar otro numero?")
 
}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN