
var quebrada = false
function mudaLampada(tipo) {
    if (!quebrada) {   //Alterar dentro do parênteses no arquivo HTML o caminho da imagem...
        document.getElementById('luz').src = "imagens/" + tipo +".jpg"
        if (tipo == 'lampada-quebrada') {
            quebrada = true
        }
    }      
} 

