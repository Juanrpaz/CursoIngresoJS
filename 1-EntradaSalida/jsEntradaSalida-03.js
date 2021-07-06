/*
autor: Juan Paz
ejercicio: 03
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;   
   //var nombreIngresado=txtIdNombre.value;

   nombreIngresado=document.getElementById('txtIdNombre').value;

   alert(nombreIngresado)

}
