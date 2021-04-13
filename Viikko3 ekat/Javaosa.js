// tehtävä 1
function button(){
var value = document.getElementById("Loota").value;
var teksti = "";
var x;
for (var x = 0; x < value; x+=2) {
    teksti += x + "<br>";
  document.getElementById("vast").innerHTML = teksti;

}
}
// tehtävä 2
function buttonv2(){
var arvo = document.getElementById('Lootav2').value;
var tekstiv2 = "";
var y;
for (var y = 0; y < arvo.length; y++)
{
    tekstiv2 += arvo[y] + "Ö";
  }




document.getElementById('vastv2').innerHTML = tekstiv2;
console.log(tekstiv2);
}



// tehtävä 3
function buttonv3(){
var arvov2 = document.getElementById("Lootav3").value;
var text = "";
var e;
for(var e = 0; e < arvov2.length; e++)

{

var tulos = text += arvov2[e];


}
var sisältääkö = tulos.includes("ö");
var sisältääköv2 = tulos.includes("Ö");

if(sisältääkö == true){
  document.getElementById("vastv3").innerHTML = "Kyllä sisältää"


}else  {
  document.getElementById("vastv3").innerHTML = "Ei sisällä"

}
if(sisältääköv2 == true){
  document.getElementById("vastv3").innerHTML = "Kyllä sisältää"


}
}
// teht 4
function buttonv4(){
  var inputNumber = document.getElementById("Lootav4").value;
var total = 1;

for (i = 0; i < inputNumber; i++){
    total = total * (inputNumber - i);
}

document.getElementById("vastv4").innerHTML = total;
}
// tehtävä 5
function buttonv5(){
var tekstiv4 = "";
for(var ö = 1; ö < 100; ö++){
  var kolmella = +ö / 3;
  var viidellä = +ö / 5;
 var kokonainenv4 = Number.isInteger(kolmella);
  var kokonainenv5 = Number.isInteger(viidellä);

if((kokonainenv4 === true) && (kokonainenv5 === true)){

tekstiv4 += ö + "hip heijjaa" +"<br>";
} else if (kokonainenv4 === true){
  tekstiv4 += ö + "hip" + "<br>";

} else if (kokonainenv5 === true) {
 tekstiv4 += ö + "heijjaa" + "<br>";
}
}
document.getElementById("vastv5").innerHTML = tekstiv4;
console.log(viidellä);
}
// teht 6.

function buttonv6(){
tekstiv6 = "";
for(var m = 0; m <= 10; m++){

tekstiv6 += m + "<br>";
}
document.getElementById("vastv6").innerHTML = tekstiv6;
}
// teht 7
function buttonv7(){
tekstiv7 = "";
yh = 0;
for(var o = 0; o <= 10; o++){
 yh += o;

}

document.getElementById("vastv7").innerHTML = yh;
}
// teht 8
function buttonv8(){
var arvov8 = document.getElementById("Lootav8").value;
var arvov2o2 = document.getElementById("Lootav8o2").value;
var tulos = arvov8;
tekstiv8 = "";
for(var p = 1; p < arvov2o2; p++){

tulos *= arvov8;
}
document.getElementById("vastv8").innerHTML = tulos;
}
// teht 9
function buttonv9(){
var arvov9 = document.getElementById("Lootav9").value;
var arvov9o2 = document.getElementById("Lootav9o2").value;
var arvov9o3 = document.getElementById("Lootav9o3").value;
var arvov9o4 = document.getElementById("Lootav9o4").value;
var arvov9o5 = document.getElementById("Lootav9o5").value;

if ((+arvov9 > +arvov9o2) && (+arvov9 > +arvov9o3) && (+arvov9 > +arvov9o4) && (+arvov9 > +arvov9o5)){
document.getElementById("vastv9").innerHTML = arvov9 + " On isoin";
}  else if ((+arvov9o2 > +arvov9) && (+arvov9o2 > +arvov9o3) && (+arvov9o2 > +arvov9o4) && (+arvov9o2 > +arvov9o5)){
document.getElementById("vastv9").innerHTML = arvov9o2 + " On isoin";
} else if  ((+arvov9o3 > +arvov9) && (+arvov9o3 > +arvov9o2) && (+arvov9o3 > +arvov9o4) && (+arvov9o3 > +arvov9o5)){
document.getElementById("vastv9").innerHTML = arvov9o3 + " On isoin";
} else if ((+arvov9o4 > +arvov9) && (+arvov9o4 > +arvov9o2) && (+arvov9o4 > +arvov9o3) && (+arvov9o4 > +arvov9o5)){
document.getElementById("vastv9").innerHTML = arvov9o4 + " On isoin";
} else if ((+arvov9o5 > +arvov9) && (+arvov9o5 > +arvov9o2) && (+arvov9o5 > +arvov9o3) && (+arvov9o5 > +arvov9o4)){
document.getElementById("vastv9").innerHTML = arvov9o5 + " On isoin";
}
if ((+arvov9 < +arvov9o2) && (+arvov9 < +arvov9o3) && (+arvov9 < +arvov9o4) && (+arvov9 < +arvov9o5)){
document.getElementById("vastv9o2").innerHTML = arvov9 + " On pienin";
}  else if ((+arvov9o2 < +arvov9) && (+arvov9o2 < +arvov9o3) && (+arvov9o2 < +arvov9o4) && (+arvov9o2 < +arvov9o5)){
document.getElementById("vastv9o2").innerHTML = arvov9o2 + " On pienin";
} else if  ((+arvov9o3 < +arvov9) && (+arvov9o3 < +arvov9o2) && (+arvov9o3 < +arvov9o4) && (+arvov9o3 < +arvov9o5)){
document.getElementById("vastv9o2").innerHTML = arvov9o3 + " On pienin";
} else if ((+arvov9o4 < +arvov9) && (+arvov9o4 < +arvov9o2) && (+arvov9o4 < +arvov9o3) && (+arvov9o4 < +arvov9o5)){
document.getElementById("vastv9o2").innerHTML = arvov9o4 + " On pienin";
} else if ((+arvov9o5 < +arvov9) && (+arvov9o5 < +arvov9o2) && (+arvov9o5 < +arvov9o3) && (+arvov9o5 < +arvov9o4)){
document.getElementById("vastv9o2").innerHTML = arvov9o5 + " On pienin";

}
}







// teht 10
function buttonv10(){
var arvo10 = document.getElementById('Lootav10').value;
var taulukko1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "O", "P", "Q", "R", "S", "T", "U", "H", "X", "Y", "Z", "Ä", "Ö"];
var tekstiv3 = "";
var ä;
var lisa = Math.floor(Math.random() * taulukko1.length);
var tok = taulukko1[lisa];
for (var ä = 0; ä < arvo10.length; ä++)
{
    tekstiv3 += arvo10[ä] + tok;
  }
document.getElementById("vastv10").innerHTML = tekstiv3;
}


// teht 11
function buttonv11(){
var arvov11 = document.getElementById("Lootav11").value;
var arvov11o2 = document.getElementById("Lootav11o2").value;
var tekstiv11 = "";
var tekstiv11o2 = "";
var summav11 = 0;
var summav11o2 = 0;
for (var ää = +arvov11; ää < +arvov11o2; ää++){
var kokonainenv11 = ää / 2;
var kokonainenv11o2 = Number.isInteger(kokonainenv11);


if(kokonainenv11o2 === true){
tekstiv11 += ää + "<br>";
summav11o2 += ää;
document.getElementById("vastv11").innerHTML = tekstiv11 + "summa on " + summav11o2;
}
if (kokonainenv11o2 === false){
  tekstiv11o2 += ää + "<br>";
  summav11 += ää;
  document.getElementById("vastv11o2").innerHTML = tekstiv11o2 + "summa on " + summav11;
}
}
}
