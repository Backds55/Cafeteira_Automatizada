function AER(){
    var estado = document.getElementById("estado").innerHTML;
    if(estado === "0"){
        document.getElementById("estado").innerHTML="1";
        document.getElementById("botao").innerHTML="<a href='/?desligar'>Desligar Rele</a>";
    } 
    else{
        document.getElementById("estado").innerHTML="0";
        document.getElementById("botao").innerHTML="<a href='/?ligar'>Ligar Rele</a>";
    }
}
//by Enrico, Jonatan e Luis - Microcontroladores
