/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var num
var num1
num=document.getElementById("numeroUno").value
num1=document.getElementById("numeroDos").value
num=parseInt(num)
num1=parseInt(num1)

var r =num+num1
alert("La suma es "+r)



}

