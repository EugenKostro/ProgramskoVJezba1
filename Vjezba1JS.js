//zadaci
/*
FizzBuzz
Zbroji sve brojeve od 1 do 100, koristeći jednu varijablu
Napiši funkciju koja računa kvadrat unesenog parametra. Pripazi da je vrijednost parametra valjana
Napiši rekurzivnu funkciju koja iterira sve dok ne dostigne vrijednost drugog parametra (WHILE petlja?).
 */
//Prvi
function FizzBuzz(){
    for(let i=0;i<100;i++){
        if(i%15==0){
            console.log("FizzBuzz");
        }
        else if(i%5 == 0){
            console.log("Fizz");
        }
        else if(i%3 == 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
}
//drugi
function suma(){
    let sum;
    for(i=0;i<101;i++){
        sum += i;
    }
    console.log("Suma: ", sum);
}
//treci
function kvadriranje(broj){
    return broj*broj;
}
//cetvrti
function rekurzija(step, baze){
    if(step == baze){
        return;
    }
    step++;
    return rekurzija(step, baze);
}
rekurzija(0, 100);