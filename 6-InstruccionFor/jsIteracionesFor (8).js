function Mostrar()
{
  var num 
  num = prompt ("ingrese numero")
  num = parseInt(num)
  var min
  var div
  var cantdiv

  for(min = num; min > 0 ; min--)
  {
  	div = num % min
  	if (div == 0)
  	{
     cantdiv++
  	}

  }
   switch(cantdiv==2)
   {
     case (true):
     alert("Es numero primo")
     break
     case (false):
     alert("no es numero primo")
     break
   }

}//FIN DE LA FUNCIÓN