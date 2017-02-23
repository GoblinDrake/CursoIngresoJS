function Mostrar()
{
 var num
 var cont 
 var div
 var cantdiv
 cont = prompt ("ingrese numero")
 cont = parseInt(cont)
 for(num = cont ; num > 0 ; num--)
 {
  div= cont % num
  if (div == 0)
    {
      alert(+num)
      cantdiv++
    }

  }
alert(cantdiv)


}//FIN DE LA FUNCIÓN