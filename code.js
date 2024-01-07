const risa = new Audio("sonidos/risa.mp3");
const bitch = new Audio("sonidos/bitch.mp3");

function advertencia() {
    document.getElementById("perre").innerText = "Completa los campos que faltan"
    
    const num = Math.floor(Math.random()*2);
    
    switch (num){
        case 0:
        risa.play()
        break;
        
        case 1:
        bitch.play()
        break;
    }
}

function sorprendeme() {
    const ciudades = ["Anekakaenekulo", "Jiafei City", "Potaxie City", "Ducado de Nezaburgo", "Poosay City", "Floptropica", "Puerto de Mapuchaina", "Pitexburg", "Gogolandia", "HornycakKe"];
    
    new Audio("sonidos/go.mp3").play()
    
    document.getElementById("destino").value = ciudades[Math.floor(Math.random()*ciudades.length)]
}

function generar() {
    document.getElementById("perre").innerText = "";
    new Audio("sonidos/jiafei.mp3").play()
    
    document.getElementById("imgfondo").src = `fotos/fondosboleto/${Math.floor(Math.random()*5)}.png`
        
    document.getElementById("nametext").innerText = nombre.value;
    document.getElementById("destinotext").innerText = destino.value;
        
    const fecha = `${new Date().getDay()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`
        
    document.getElementById("fechatext").innerText = fecha
    
    document.getElementById("preciotext").innerText = "$"+Math.floor(Math.random()*150)
    
    document.getElementById("zonaboleto").className = "boleto"
    document.getElementById("descargar").className = ""
    
}

function descargar(){

new Audio("sonidos/ahh.mp3").play()

html2canvas(document.querySelector(".boleto")).then(canvas => {
    
    var link = document.createElement('a');
    var image = canvas.toDataURL();
    
    link.href = image;
    link.download = `boleto_${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDay()}_${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}-${new Date().getMilliseconds()}.png`;
    
    document.body.appendChild(link);
    link.click();
    
});

}

function reclamarboleto(){
    const nombre = document.getElementById("nombre")
    const destino = document.getElementById("destino")

    if(nombre.value.trim() == "" || destino.value.trim() == ""){
        advertencia()
        
    }else{
        generar()
    }
    
}

window.onload = function(){
document.getElementById("nombre").addEventListener("input", function(){
    document.getElementById("perre").innerText = ""
    new Audio("sonidos/go.mp3").play()
});

document.getElementById("destino").addEventListener("input", function(){
    document.getElementById("perre").innerText = ""
    new Audio("sonidos/go.mp3").play()
});
}
