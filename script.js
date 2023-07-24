function function00(){
    let x=document.getElementById('q').value;
    x+="00";
    document.getElementById("q").value=x;
}
function function0(){
    let x=document.getElementById('q').value;
    x+="0";
    document.getElementById("q").value=x;
}
function function1(){
    let x=document.getElementById('q').value;
    x+="1";
    document.getElementById("q").value=x;
}function function2(){
    let x=document.getElementById('q').value;
    x+="2";
    document.getElementById("q").value=x;
}function function3(){
    let x=document.getElementById('q').value;
    x+="3";
    document.getElementById("q").value=x;
} function function4(){
    let x=document.getElementById('q').value;
    x+="4";
    document.getElementById("q").value=x;
}function function5(){
    let x=document.getElementById('q').value;
    x+="5";
    document.getElementById("q").value=x;
}function function6(){
    let x=document.getElementById('q').value;
    x+="6";
    document.getElementById("q").value=x;
}function function7(){
    let x=document.getElementById('q').value;
    x+="7";
    document.getElementById("q").value=x;
}
function function8(){
    let x=document.getElementById('q').value;
    x+="8";
    document.getElementById("q").value=x;
}
function function9(){
    let x=document.getElementById('q').value;
    x+="9";
    document.getElementById("q").value=x;
} function function11(){
    let x=document.getElementById('q').value;
    x+="*";
    document.getElementById("q").value=x;
}function function12(){
    let x=document.getElementById('q').value;
    x+="-";
    document.getElementById("q").value=x;
}function function13(){
    let x=document.getElementById('q').value;
    x+="+";
    document.getElementById("q").value=x;
}
function function14(){
    let x=document.getElementById('q').value;
    x+=".";
    document.getElementById("q").value=x;
}
function function15(){
    let x=document.getElementById('q').value;
    x+="/";
    document.getElementById("q").value=x;
}
function function40(){
    let x=document.getElementById('q').value;
    x="";
    document.getElementById("q").value=x;
}
function function41(){
    let x=document.getElementById('q').value;
    document.getElementById("q").value=x.substring(0,x.length-1);
}



function final(){
    var x=document.getElementById('q').value;
    document.getElementById('q').value=eval(x);

}