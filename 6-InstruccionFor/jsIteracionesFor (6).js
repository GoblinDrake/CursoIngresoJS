function Mostrar()
{
var contpares
var pares
var num = prompt("ingrese numero")
num =parseInt(num)
for(num = num; num > 0; num--)
{
  pares = num % 2
  if(pares==0){
  	alert(num)
  	contpares++
  }
}

}//FIN DE LA FUNCIÓN