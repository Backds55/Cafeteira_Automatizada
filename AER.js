function AER(){
    var status = document.getElementById("status").innerHTML;
    if(status === "0"){
        document.getElementById("status").innerHTML="1";
        document.getElementById("rele").innerHTML="<div class='rele_ligado'></div>";
        document.getElementById("button").innerHTML="<a href='/?desligar' class='button'>Desligar Rele</a>";
    } 
    else{
        document.getElementById("status").innerHTML="0";
        document.getElementById("rele").innerHTML="<div class='rele_desligado'></div>";
        document.getElementById("button").innerHTML="<a href='/?ligar' class='button'>Ligar Rele</a>";
    }
}
//by Enrico, Jonatan e Luis - Microcontroladores
