/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var num1
	var num2
	var num3

    num1=document.getElementById("PrecioUno").value
	num1=parseInt(num1)
	 num2=document.getElementById("PrecioDos").value
	num2=parseInt(num2)
	 num3=document.getElementById("PrecioTres").value
	num3=parseInt(num3)

	var r

	r=(num1+num2+num3) 
	alert(r)
}
function Promedio () 
{
	var num1
	var num2
	var num3

    num1=document.getElementById("PrecioUno").value
	num1=parseInt(num1)
	 num2=document.getElementById("PrecioDos").value
	num2=parseInt(num2)
	 num3=document.getElementById("PrecioTres").value
	num3=parseInt(num3)

	 var r

	 r=(num1+num2+num3)/3
	 alert(r)


}
function PrecioFinal () 
{
	var num1
	var num2
	var num3

    num1=document.getElementById("PrecioUno").value
	num1=parseInt(num1)
	 num2=document.getElementById("PrecioDos").value
	num2=parseInt(num2)
	 num3=document.getElementById("PrecioTres").value
	num3=parseInt(num3)

	var r
	r=(num1+num2+num3)*0.21

	var r2
	r2=(num1+num2+num3)+r
	r2=parseInt(r2)

	alert(r2)


}