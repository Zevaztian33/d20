var texto = '';  
var resultado = '';  
function tiradaDado() {  
    var aleatorio = Math.floor(Math.random()*20)+1  
    texto+=aleatorio+", ";  
    resultado = texto;  
    document.getElementById("ultimaTirada").innerHTML = aleatorio;
    document.getElementById("registroTiradas").innerHTML = resultado;
}

