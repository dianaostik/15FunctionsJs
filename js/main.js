
// 1 usduotis
console.log("----------- 1 uzduotis -------------");

let sk1 = 5;
let sk2 = 6;

sum(sk1, sk2);

function sum(a, b) {
    console.log(a * b);   
}



//2 uzduotis
console.log("----------- 2 uzduotis -------------");

let vardas = "Petras";

sayHiTo(vardas);

function sayHiTo(name) {
    console.log("Labas " + name);   
}




//3 uzduotis
console.log("----------- 3 uzduotis -------------");

let text = "Labukas";

kiek(text);

function kiek(textTwo) {
    console.log(textTwo.length);
}




//4 uzduotis
console.log("----------- 4 uzduotis -------------");

let vard = "jonas";
let pavarde = "petrauskas";

rezult(vard,pavarde);

function rezult(c, d) {
    console.log(c[0].toUpperCase() + d[0].toUpperCase());
}



//5 uzduotis
console.log("----------- 5 uzduotis -------------");

let x = 20;

dokumentas(x);

function dokumentas(y) {
    document.getElementById("numberPlace").innerText = y;
}





//7 uzduotis
console.log("----------- 7 uzduotis -------------");

let rndNumbers = 0;
rndNum(rndNumbers);

function rndNum(f) {
   for (let e = 0; e < 3; e++) {
    f = Math.round(Math.random() * 5 );  
    rndNumbers += f + ",";
} 
}
console.log(rndNumbers.slice(0, -1));




//8 uzduotis
console.log("----------- 8 uzduotis -------------");

let nuo = 10;
let iki = 20;


function nuoIki(min, max) {
    if (min < max) {
        let w = min + Math.round(  Math.random() * (max-min)); 
        return w;
    }   
}

console.log(nuoIki(nuo, iki)); 



//9 uzduotis
console.log("----------- 9 uzduotis -------------");

let tagsP = 0;

dokum(tagsP);

function dokum(rndTags) {
    for (let z = 0; z < 9; z++) {
        rndTags = 1 + Math.round(Math.random() * 9 ); 
        tagsP += " <p> " + rndTags + " </p> ";
    }
    document.getElementById("sequence").innerHTML = tagsP;
}




//----- Vidutiniai
//1 uzduotis
console.log("----------- 1 uzduotis -------------");

let kint1 = 2;
let kint2 = 3;

function laipsnis(num, pow) {
    if (pow == 0) {
        return 1;
    }
    let laipsnis = num;
    for (let u = 0; u < pow -1; u++) {  
       laipsnis *= num; 
       
    }    
    // document.getElementById("laipsniukai").innerHTML = laipsnis(); 
    return laipsnis;
    
}

console.log(laipsnis(kint1,kint2)); 
// console.log(laipsnis(kint1,1)); 
// console.log(laipsnis(kint1,0)); 




