var tiro_1;
var tiro_2
var posiciones = [0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar;
var total_tiro
var turno = 1;
var Punto = 1;


window.onload = init;

function init(){
	alert("Bienvenido a los Dados");
	tiro_1 = 1;
	tiro_2 = 2;

	boton_tirar = document.getElementById("boton_tirar");
	boton_tirar.addEventListener("click",jugar);

	dado1 = document.getElementById("dado1");
	dado2 = document.getElementById("dado2");
	
}

function tirardado(){
	 return Math.floor(Math.random() * 6) + 1 ;
}
function moverDado(ref,cara){
 
  ref.style.backgroundPosition = posiciones[cara-1]+"px";
}

function jugar(){
	tiro_1 = tirardado();
	tiro_2 = tirardado();
  moverDado(dado1,tiro_1);
  moverDado(dado2,tiro_2);

console.log("Puntos actuales",Punto);
 total_tiro = tiro_1 + tiro_2

console.log("turno actual",turno);
  total_tiro = tiro_1 + tiro_2

  Punto= Punto + 1;

  turno= turno + 1;

  if(total_tiro==7 || total_tiro==11)
  {
  	alert("🤗Ganaste la partida!!") 
  	{Punto= 1
  		console.log("se reinicia puntaje")}
  	{	turno= 1;
console.log("se reinicia el turno")}
  
 } 

 total_tiro= tiro_1 + tiro_2

  if(total_tiro==2 || total_tiro==3 || total_tiro==12)
  	{alert("😓Perdiste la partida☹")
  	{Punto = 1;
  		console.log("se reinicia puntaje")}
    {turno= 1;
console.log("se reinicia el turno")}

 if(total_tiro==7)
 {
 	alert("😓Perdiste")
 	{Punto= 1
 		console.log("se reinicia puntaje")}
 		{turno= 1;
 			console.log("se reinicia turno")}
 }

  if (total_tiro==4 || total_tiro==5 || total_tiro==6 || total_tiro==8 || total_tiro==9 || total_tiro==10 )
   {Punto= 1
   	console.log("ganaste un punto!")}
 }
}