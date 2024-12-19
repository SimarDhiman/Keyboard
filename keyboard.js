var isenable=false;
isenableShift=false;
var z=0;
const shift=document.getElementById("shift");
// function text(){
//     document.getElementById("subject").ariaDisabled=false;
//     document.getElementById("subject").contenteditable=true;
// }
function Alphabet(){
    z++;
}

a="";
function caps(){
    if(isenable){
        isenable=false;
        document.getElementById("top").style.background="rgba(0, 0, 0, 0.4)";
    }
    else{
        isenable=true;
        document.getElementById("top").style.background="blue";
    }
}
function Alpha(text){
    if(isenable ||  isenableShift){
    console.log(text);
    // console.log(document.getElementById('Q').value);
    document.getElementById("subject").value+=text.toUpperCase();
    isenableShift=false;
    
    }
   else{
    document.getElementById("subject").value+=text.toLowerCase();
    
}
    z++;
}
function Shift(text){
    isenableShift=true;
//    if(isenable){
//        document.getElementById("subject").value+=text.toUpperCase();
//        isenable=false;
//    }
//    else{
//        document.getElementById("subject").value+=text.toLowerCase();
//        return false;
//    }
}

function Enter(){
    document.getElementById("subject").value+="\n";
}
function Space(){
    document.getElementById("subject").value+=" ";
}

var pointerX = -1;
var pointerY = -1;
showSelectedCursor = function(event) {
	pointerX = event.key;
	pointerY = event.key;
    z=event.target.selectionStart;
    console.log(z);
    
    // Backspace(z);
}

function Backspace(){
    console.log(document.getElementById("subject").value);
    
    if(z===0){
        return;
        
    }
    // else if(z===1){
    //     document.getElementById("subject").value=document.getElementById("subject").value.slice(0,z-1)+document.getElementById("subject").value.slice(z);
    //     z--;
    // }
    
        document.getElementById("subject").value=document.getElementById("subject").value.slice(0,z-1)+document.getElementById("subject").value.slice(z);
        z--;
    
}
function del(){
    console.log(document.getElementById("subject").value);
    if(document.getElementById("subject").length===z){
        return false;}
        // a=document.getElementById("subject").value;
        else {
        document.getElementById("subject").value=document.getElementById("subject").value.slice(0,z)+document.getElementById("subject").value.slice(z+1);
        console.log(document.getElementById("subject").value);
    }
}
