function calc(){
    let num1;
    let num2;
    let op;
    try {
        num1 = parseInt(document.getElementById("numBox").value);
        num2 = parseInt(document.getElementById("numBox2").value);
        op = parseInt(document.getElementById("opBox").value);
    }
    catch{
        return "undefined";
    }
    if(op === 0){
        return num1 + num2;
    }
    else if(op === 1){
        return num1 - num2;
    }
    else if(op === 2){
        return num1 * num2;
    }
    else if (op === 3){
        if(!(num2 === 0)){
            return num1/num2;
        }
    }
    else{
        return "undefined";
    }

}