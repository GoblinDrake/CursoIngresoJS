function Mostrar()
{

var num = prompt("ingrese numero")
num =parseInt(num)
var acum= 0
for(var min =1; min <=num ; acum += num)
  {
  	
     if (num % min==0)
     {
      var par=0
      var cant=par+=num
      alert(cant)
     }

  }
}//FIN DE LA FUNCIÓN