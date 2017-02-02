/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num
	var num1
	num=document.getElementById("numeroDividendo").value
	num1=document.getElementById("numeroDivisor").value
	num=parseInt(num)
	num1=parseInt(num1)

	var resto = num%num1
	alert("el resto es "+resto)


}


