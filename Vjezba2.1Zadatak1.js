let preokreni = function (inputString){
    let temporaryString = "";
    for(let i = inputString.length - 1; i >= 0; i--){
        temporaryString = inputString[i];
    }
    return temporaryString;
}
console.log(preokreni("abc")); //->cba

//drugizad

