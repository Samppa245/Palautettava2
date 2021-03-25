// tehtava 1

//  HUOM! käytän plussaa lukujen edessä, koska javascript lukee luvut muuten
// stringeinä , enkä tiedä miten muuten kerron javascriptille, että luvut ovat numeroita.
// Esimerkki +value + 5 = 10" jos en käytä plussaa "value + 5 = 55" :D




function Nappula(){

var muuttuja = document.getElementById("Laatikko").value;
var kyllä = "Luku on positiivinen";
var ei = "luku on negatiivinen"
if(muuttuja >=0 ){

document.getElementById("vastaus").innerHTML = kyllä;

} else {

document.getElementById("vastaus").innerHTML = ei;

}
}

// tehatava 2


function Nappulav2(){

Viikonpäivä = document.getElementById("Laatikkov2").value;

var maanantai = "maanantai";
var tiistai = "tiistai";
var keskiviikko = "keskiviikko";
var torstai = "torstai";
var perjantai = "perjantai";
var lauantai = "lauantai";
var sunnuntai = "sunnuntai";


if(+Viikonpäivä == 1){
document.getElementById("vastausv2").innerHTML = maanantai;
}
if(+Viikonpäivä == 2){
document.getElementById("vastausv2").innerHTML = tiistai;

}
if(+Viikonpäivä == 3){
document.getElementById("vastausv2").innerHTML = keskiviikko;

}
if(+Viikonpäivä == 4){
document.getElementById("vastausv2").innerHTML = torstai;

}
if(+Viikonpäivä == 5){
document.getElementById("vastausv2").innerHTML = perjantai;

}
if(+Viikonpäivä == 6){
document.getElementById("vastausv2").innerHTML = lauantai;

}
if(+Viikonpäivä == 7){
document.getElementById("vastausv2").innerHTML = sunnuntai;
}

if(+Viikonpäivä > 7){
document.getElementById("vastausv2").innerHTML = "Lueppa ohjeet kunnolla :D";

}

if(+Viikonpäivä < 0){
document.getElementById("vastausv2").innerHTML = "Lueppa ohjeet kunnolla :D";
}
}


//tehtava 3


function Nappulav3(){
var vuosi = document.getElementById("Laatikkov3").value;
var vaihe1 = +vuosi / 4;
var vaihe2 = +vuosi / 400;
var sadalla = +vuosi / 100;
var kokonainen =  Number.isInteger(vaihe1);
var kokonainenv2 =  Number.isInteger(vaihe2);
var kokonainenv3 =  Number.isInteger(sadalla);

if((kokonainen === true) && (kokonainenv3 === false)){


document.getElementById("vastausv3").innerHTML = "Vuosi on karkausvuosi";
} else if (kokonainenv2 === true) {
  document.getElementById("vastausv3").innerHTML = "Vuosi on karkausvuosi";
} else {
  document.getElementById("vastausv3").innerHTML = "Vuosi ei ole karkausvuosi";
}
}


//tehtava 4

function Nappulav4(){
var Laatikko1 = document.getElementById("Laatikkov4o1").value;
var Laatikko2 = document.getElementById("Laatikkov4o2").value;
var Laatikko3 = document.getElementById("Laatikkov4o3").value;
var Laatikko4 = document.getElementById("Laatikkov4o4").value;
var Laatikko5 = document.getElementById("Laatikkov4o5").value;
var summa = +Laatikko1 + +Laatikko2 + +Laatikko3 + +Laatikko4 + +Laatikko5;
var keskiarvo = summa / 5;
document.getElementById("vastausv4").innerHTML = "Lukujen summa on:" + summa + " ja keskiarvo on: "+ keskiarvo;
}

//tehtava 5
// ok en ymmärrä tehtävää tai mitä tässä yritetään tehdä ?? 
function Nappulav5(){
var luku = document.getElementById("Laatikkov5").value;
var lause = lause += luku + "x 1 = " + luku * 1; lause += luku + "x 2 = " + luku * 2; lause += luku + "x 10 = " + luku * 2;
document.getElementById("vastausv5").innerHTML = lause;

}
