/* for(let i = 1; i <= 10; i++){
    console.log("\n" + i);
} */

/* let n = prompt("unesi n: ");
let zbroj = 0;
for(let i = 1; i <= n; i++){
    zbroj+=i;
}
console.log("konacni zbroj je: " + zbroj); */

/* let niz = [4, 5, 3, 4, 2];
let sum = 0;
let avg = 0;
for(let i = 0; i < niz.length; i++){
    sum+=niz[i];
}
avg=sum/niz.length;
console.log("prosjek: " + avg); */

/* let n = prompt("unesi broj: ");
for(let i = 1; i <= n; i++){
    if(i % 2 === 0){
        console.log("paran: " + i);
    }
    else{
        console.log("neparan:" + i);
    }
} */

/* let max = -500;
let niz = [12, 7, 25, 4, 19];
for(let i = 0; i < niz.length; i++){
    if(niz[i] > max){max=niz[i];}
}
console.log("najveci je: " + max); */

/* let n = Number(prompt("unesi element provjere: "));
let niz = [23, 31, 10, 3, 6, 8, 35, 86, 74, 11];
let pronaden = false;
for(let i = 0; i < niz.length; i++){
    if(n === niz[i]){
        pronaden = true;
    }
}
if(pronaden){console.log("broj pronađen");}
else{console.log("broj nije pronaden");} */

function jePrijestupna(n){
    let bool = false;
    if((n % 4 === 0 || n % 400 === 0) && n % 100 === 1){
        bool = true;
    }
    if(bool){console.log("godina je prijestupna");}
    else{console.log("godina nije prijestupna");}
}

let unos = Number(prompt("unesite godinu"));
jePrijestupna(unos);