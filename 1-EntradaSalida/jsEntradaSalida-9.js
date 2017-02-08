/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var imp;

imp=document.getElementById("sueldo").value;
imp=parseInt(imp);



var res =imp*1.1;
document.getElementById("resultado").value=res;
res=parseInt(res);


	
}
