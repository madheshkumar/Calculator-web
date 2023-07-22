var var1="";
var var2="";
var op="";
var res=0;

function handleClick(id){
    if(var1 >= 0 && op == ""){
        var1=var1*10+parseInt(id);
    }
    else if(var2 >=0){
        var2=var2*10+parseInt(id);
    }
    document.getElementById("result").innerHTML=var1+""+op+""+var2;
    //console.log(var1,var2)
}

function Operate(id){
    op=""+id;
    document.getElementById("result").innerHTML=var1+""+op+""+var2;
    // console.log(op)
}

function Calculate(){
    switch(op){
        case '+':
            res=var1+var2;
            break;
        case '-':
            res=var1-var2;
            break;
        case 'x':
            res=var1*var2;
            break;
        case '/':
            res=var1/var2;
            break;    
    }
    document.getElementById("result").innerHTML=res;
    //console.log("res="+res);
    op="";
    var1=res;
    var2="";
    res=0;  
}
