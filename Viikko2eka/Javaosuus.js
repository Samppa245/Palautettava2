// tehtävä 1
function nappula(){
var ekaluku = document.getElementById('ekatehtävä').value;
var tokaluku = document.getElementById('ekatehtävät').value;
var kolmasluku = document.getElementById('ekatehtäväk').value;

if ((+ekaluku > +tokaluku) && (+ekaluku > +kolmasluku)) {
document.getElementById('vastaus').innerHTML = ekaluku; 

} else if ((+ekaluku > +tokaluku) && (+ekaluku < +kolmasluku)){
document.getElementById('vastausv2').innerHTML = ekaluku; 

} else if ((+ekaluku > +kolmasluku) && (+ekaluku < +tokaluku)){
document.getElementById('vastausv2').innerHTML = ekaluku; 


} else if ((+ekaluku < +kolmasluku) && (+ekaluku < +tokaluku)) {
document.getElementById('vastausv3').innerHTML = ekaluku; 

}



if ((+tokaluku > +ekaluku) && (+tokaluku > +kolmasluku)) {
document.getElementById('vastaus').innerHTML = tokaluku; 

} else if ((+tokaluku > +ekaluku) && (+tokaluku < +kolmasluku)){
document.getElementById('vastausv2').innerHTML = tokaluku; 

} else if ((+tokaluku > +kolmasluku) && (+tokaluku < +ekaluku)){
document.getElementById('vastausv2').innerHTML = tokaluku; 


} else if ((+tokaluku < +kolmasluku) && (+tokaluku < +ekaluku)) {
document.getElementById('vastausv3').innerHTML = tokaluku; 

}



if ((+kolmasluku > +ekaluku) && (+kolmasluku > +tokaluku)) {
document.getElementById('vastaus').innerHTML = kolmasluku; 

} else if ((+kolmasluku > +ekaluku) && (+kolmasluku < +tokaluku)){
document.getElementById('vastausv2').innerHTML = kolmasluku; 

} else if ((+kolmasluku > +tokaluku) && (+kolmasluku < +ekaluku)){
document.getElementById('vastausv2').innerHTML = kolmasluku; 


} else if ((+kolmasluku < +tokaluku) && (+kolmasluku < +ekaluku)) {
document.getElementById('vastausv3').innerHTML = kolmasluku; 
}
}







//tehtävä2

function nappulav2(){


var arvo1 = document.getElementById("ekatehtäväv2").value;
var arvo2 = document.getElementById("ekatehtävätv2").value;
var arvo3 = document.getElementById("ekatehtäväkv2").value;
var arvo4 = document.getElementById("ekatehtäväs").value;
var arvo5 = document.getElementById("ekatehtäväh").value;



if((+arvo1 > +arvo2) && (+arvo1 > +arvo3) && (+arvo1 > +arvo4) && (+arvo1 > +arvo5));{

document.getElementById("vastaust2").innerHTML = arvo1;

}


if((+arvo2 > +arvo1) && (+arvo2 > +arvo3) && (+arvo2 > +arvo4) && (+arvo2 > +arvo5)){


document.getElementById("vastaust2").innerHTML = arvo2;
}





if((+arvo3 > +arvo1) && (+arvo3 > +arvo2) && (+arvo3 > +arvo4) && (+arvo3 > +arvo5)){


document.getElementById("vastaust2").innerHTML = arvo3;
}



if((+arvo4 > +arvo1) && (+arvo4 > +arvo2) && (+arvo4 > +arvo3) && (+arvo4 > +arvo5)){


document.getElementById("vastaust2").innerHTML = arvo4;
}




if((+arvo5 > +arvo1) && (+arvo5 > +arvo2) && (+arvo5 > +arvo3) && (+arvo5 > +arvo4)){


document.getElementById("vastaust2").innerHTML = arvo5;
}
}







//tehtävä 3


function nappulav3(){


var tehtavanarvo = document.getElementById("ekatehtäväv3").value / 2;
var summa = Number.isInteger(tehtavanarvo);
console.log(tehtavanarvo);
console.log(summa);


if(summa === true){
document.getElementById("vastaust3").innerHTML = tehtavanarvo;
document.getElementById("vastaust4").innerHTML = "luku on parillinen.";

} else {

document.getElementById("vastaust3").innerHTML = tehtavanarvo;
document.getElementById("vastaust4").innerHTML = "luku on pariton.";
}
}




//tehtava 4



function nappulav4(){

var ikä = document.getElementById("ekatehtäväv4").value;

if(+ikä < 16){

 document.getElementById("vastaust5").innerHTML = "Saat ajaa polkupyörää";


} else if(+ikä < 18) {


 document.getElementById("vastaust5").innerHTML = "Saat ajaa Mopoa";


} else {


 document.getElementById("vastaust5").innerHTML = "Saat ajaa autoa";

}
}


//tehtava 5





function nappulav5(){



 var arvo = document.getElementById("valikko").value; 
 
var ruotsinkieli = "Hej världen!";
var espanjankieli = "Hola Mundo!";
var englanninkieli = "Hello World!" 

if(arvo === "Ruotsi"){
document.getElementById("vastaust6").innerHTML = ruotsinkieli;

}

if(arvo === "Espanja"){
document.getElementById("vastaust6").innerHTML = espanjankieli;
}

if(arvo === "Englanti"){
document.getElementById("vastaust6").innerHTML = englanninkieli;
}
}