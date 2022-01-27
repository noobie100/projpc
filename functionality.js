var scale=window.devicePixelRatio;
var hgt=window.screen.height;
var wdt=window.screen.width;
var hgt_scaled=hgt*scale;
var wdt_scaled=wdt*scale;
var r=wdt_scaled/hgt_scaled;
document.getElementById("res_container").innerHTML="<br><b>"+wdt_scaled+" x "+hgt_scaled+"</b><br><br>";
document.getElementById("main").innerHTML=document.getElementById('op1').innerHTML;
linkWithResizer();
size2dpi();

var output=document.getElementById('output');
output.style.height= hgt_scaled/6+'px';
output.style.width=wdt_scaled/6+'px';
// console.log(output.style.height);
// console.log(output.style.width);

function show(parameter_id){
    clearOutput();//redundancy check
    document.getElementById("main").innerHTML="";
    document.getElementById('main').innerHTML=document.getElementById(parameter_id).innerHTML;

    linkWithResizer();

    if(parameter_id=='op1'){
        document.getElementById('op1button').style.display='none';
        document.getElementById('op2button').style.display='block';
        size2dpi();
    }
    if(parameter_id=='op2'){
        document.getElementById('op2button').style.display='none';
        document.getElementById('op1button').style.display='block';
        dpi2size();
    }
}
console.log(document.getElementById('size').offsetWidth)
function clearOutput(){
    console.log('clear');
    document.getElementById("result_text").innerHTML="";    
}
function size2dpi(){
    var mylist = document.getElementById("myList");  
    var dpi;
    var d = document.getElementById("size").value;
    if(mylist.selectedIndex==0){
    dpi= Math.sqrt(hgt_scaled*hgt_scaled+wdt_scaled*wdt_scaled)/d;
    }
    else if(mylist.selectedIndex==1){
        dpi=wdt_scaled/d;   
    }
    else if(mylist.selectedIndex==2){
        dpi=hgt_scaled/d;
    }
    dpi=Math.round(dpi);
    if(d==0){
        dpi='&infin;';
    }
    document.getElementById("result_text").innerHTML="<b>"+dpi+"</b><br>pixels per inch";
}

function dpi2size(){
    console.log("inside func");
    var dpi=document.getElementById("dpi").value;
    if(dpi!=0){
    var height=hgt_scaled/dpi;
    var width=wdt_scaled/dpi;
    var size=Math.sqrt(height*height + width*width);
    size=Math.round(size*10)/10;
    }
    else{
        size='&infin;'
    }
    // console.log(size);
    document.getElementById("result_text").innerHTML="<b>"+size+"</b><br>inches";
}

function linkWithResizer(){
    var input = document.querySelector('input'); // get the input element
    input.addEventListener('input', resizeInput);
}

function resizeInput() {
    console.log(this.value.length,this.style.width);

  this.style.width = (this.value.length+1) + "ch";
    
}

