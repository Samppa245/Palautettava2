function button(){
var arvo = document.getElementById("Loota").value;
var tulos = 0;
for(var x = 0; x < arvo.length; x++){

switch (arvo[x]) {

  case "a":
  case "e":
  case "i":
  case "n":
  case "s":
  case "t":


  case "A":
  case "E":
  case "I":
  case "N":
  case "S":
  case "T":
tulos += 1;
  break;

  case "o":
  case "ä":
  case "k":
  case "l":

  case "O":
  case "Ä":
  case "K":
  case "L":
tulos += 2;
  break;
  case "u":
  case "m":

  case "U":
  case "M":
tulos += 3;
  break;

  case "y":
  case "h":
  case "j":
  case "p":
  case "r":
  case "v":

  case "Y":
  case "H":
  case "J":
  case "P":
  case "R":
  case "V":
tulos += 4;
  break;
  case "ö":
  case "d":

  case "Ö":
  case "D":
  tulos += 7;
  break;
  case "b":
  case "f":
  case "g":

  case "B":
  case "F":
  case "G":
  tulos += 8;
break;
case "c":

case "C":
tulos += 10;
break;

  default:
  tulos += 12;
  break;
}

}
document.getElementById("vast").innerHTML = tulos + " Pistettä";
}

function buttonv2(){
for (var i = 0; i <= 100; i++) {
var timo = Math.floor(Math.random() * i)
var timov2 = Math.floor(Math.random() * i)
var timov3 = Math.floor(Math.random() * i)
var timov4 = Math.floor(Math.random() * i)
var timov5 = Math.floor(Math.random() * i)
}

document.getElementById("vastv2").innerHTML = timo + ", " + timov2 + ", " + timov3 + ", " +  timov4 + ", " +  timov5;


}

function buttonv3(){
  var luvut = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
   var taulukko = '<table border="1">';
   for(var j = 0; j < luvut.length; j++)
   {
   taulukko += '<tr>';
     for(var k = 0; k < luvut[j].length; k++)
     {
       taulukko += '<td>' + luvut[j][k] + '</td>';
     }
     taulukko += '</tr>';
 }
   taulukko += '</table>';
   document.getElementById('vastv3').innerHTML = taulukko;


}
