function parseScript(){
    const string = document.getElementById("input").value;
    let id = "display1";
    let curDisp = 1;
    const maxDisp = 2;
    const minDisp = 1;
    let elem = document.getElementById(id);
    let subS;
    let mult;
    for(let i = 0; i<string.length; i++){
        subS = string.substring(i, i+1);
        if(subS === "+"){
            elem.innerText = (parseInt(elem.innerText) + 1).toString();
        } else if(subS === "-") {
            elem.innerText = (parseInt(elem.innerText) - 1).toString();
        } else if(subS === "*"){
            mult = string.substring(i+1, i+2);
            elem.innerText = (parseInt(elem.innerText) * mult).toString();
        } else if(subS === ">"){
            if(curDisp !== maxDisp){
                curDisp++;
                id = id.substring(0, id.length-1) + curDisp;
                elem = document.getElementById(id);
            }
        } else if(subS === "<"){
            if(curDisp !== minDisp){
                curDisp--;
                id = id.substring(0, id.length-1) + curDisp;
                elem = document.getElementById(id);
            }
        } else if(subS === "0"){
            for(let i = minDisp; i<=maxDisp; i++){
                id = id.substring(0, id.length-1) + i;
                elem = document.getElementById(id);
                elem.innerText = (0).toString();
            }
        }
    }
}