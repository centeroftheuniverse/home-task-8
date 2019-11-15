let doAdd;
let doDiv;
let doSub;
let doMul;
document.getElementById("add").addEventListener("click", function(){
    doAdd = document.getElementById("display").value;
    doDiv = "";
    doSub = "";
    doMul = "";
    document.getElementById("display").value="";
});
document.getElementById("sub").addEventListener("click", function(){
    doAdd = "";
    doDiv = "";
    doSub = document.getElementById("display").value;
    doMul = "";
    document.getElementById("display").value="";
});
document.getElementById("div").addEventListener("click", function(){
    doAdd = "";
    doDiv = document.getElementById("display").value;
    doSub = "";
    doMul = "";
    document.getElementById("display").value="";
});
document.getElementById("mul").addEventListener("click", function(){
    doAdd = "";
    doDiv = "";
    doSub = "";
    doMul = document.getElementById("display").value;
    document.getElementById("display").value="";
});
document.getElementById("clear").addEventListener("click", function(){    
    document.getElementById("display").value="";
});
document.getElementById("equal").addEventListener("click", function(){
    let currentValue = document.getElementById("display").value;
    currentValue = parseInt(currentValue);  
    if (doAdd!==""){
        document.getElementById("display").value = eval(parseInt(doAdd)+currentValue);
    } else
    if (doSub!==""){
        document.getElementById("display").value = eval(parseInt(doSub)-currentValue);
    } else
    if (doMul!==""){
        document.getElementById("display").value = eval(parseInt(doMul)*currentValue);
    } else
    if (currentValue===0){
        alert('Invalid value!');
    } else
    if (doDiv!==""){
        document.getElementById("display").value = eval(parseInt(doDiv)/currentValue);
    } 
});
function changeValue(o){
     document.getElementById("display").value+= parseInt(o.innerHTML);
    }
