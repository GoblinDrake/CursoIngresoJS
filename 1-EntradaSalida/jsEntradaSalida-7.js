/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var num
	var num1
	num=document.getElementById("numeroUno").value
	num1=document.getElementById("numeroDos").value
	num=parseInt(num)
	num1=parseInt(num1)
	 var r= num+num1
	 alert("la suma es "+r)

}

function restar()
{
	var num
	var num1
	num=document.getElementById("numeroUno").value
	num1=document.getElementById("numeroDos").value
	num=parseInt(num)
	num1=parseInt(num1)
	var r =num-num1
	alert("la resta es "+r)
}

function multiplicar()
{ 
	var num
	var num1
	num=document.getElementById("numeroUno").value
	num1=document.getElementById("numeroDos").value
	num=parseInt(num)
	num1=parseInt(num1)
	var r =num*num1
	alert("la multiplicación es "+r)
}

function dividir()
{
	var num
	var num1
	num=document.getElementById("numeroUno").value
	num1=document.getElementById("numeroDos").value
	num=parseInt(num)
	num1=parseInt(num1)
	var r =num/num1
	alert("la división es "+r)
}

