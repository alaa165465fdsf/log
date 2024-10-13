function ver(){
    a=document.getElementById("b1").value;
    aa=document.getElementById("b2").value;
    b=document.getElementById("d1");
    e=document.getElementById("d2");
    hh=document.getElementById("b3");
    
    if (a==""){
        b.style.display="block"
        return false
    }
    if(aa=="")
        e.style.display="block"
    if(hh.checked==false){
        document.getElementById("ala").style.backgroundColor="red"
        return false
        
    }
    else{
        document.getElementById("ala").style.backgroundColor="green"
    }
    
}
function su(){
    document.getElementById("d1").style.display="none"
}
function suu(){
    document.getElementById("d2").style.display="none"
}