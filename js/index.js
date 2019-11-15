let doAdd;
let doDiv;
let doSub;
let doMul;
document.getElementById("add").addEventListener("click", function(){
    parseInt(doAdd) = document.getElementById("display").value;
    doDiv = NaN;
    doSub = NaN;
    doMul = NaN;
    document.getElementById("display").value=NaN;
});
document.getElementById("sub").addEventListener("click", function(){
    doAdd = NaN;
    doDiv = NaN;
    doSub = document.getElementById("display").value;
    doMul = NaN;
    document.getElementById("display").value=NaN;
});
document.getElementById("div").addEventListener("click", function(){
    doAdd = NaN;
    doDiv = document.getElementById("display").value;
    doSub = NaN;
    doMul = NaN;
    document.getElementById("display").value=NaN;
});
document.getElementById("mul").addEventListener("click", function(){
    doAdd = NaN;
    doDiv = NaN;
    doSub = NaN;
    doMul = document.getElementById("display").value;
    document.getElementById("display").value=NaN;
});
document.getElementById("clear").addEventListener("click", function(){    
    document.getElementById("display").value=NaN;
});
document.getElementById("equal").addEventListener("click", function(){
    var i = document.getElementById("display").value;
    i=parseInt(i);
    // document.getElementById("display").value=eval(i*i);

    if (doAdd!==NaN){
        document.getElementById("display").value=eval(i*i);
    }
    
    
});