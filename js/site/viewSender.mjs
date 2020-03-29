import ListaMoveisController from './extensions/listaMoveisController.mjs';

$(document).ready(function(){
    window.addEventListener("resize", alterarFit);
    $.getJSON('/resorces/moveis-db/moveis.json', function(data){
        let controlador = new ListaMoveisController(data, "itens");
        controlador.EnviarLista();
        sendDocHeightMsg();  
    });
      
});


function alterarFit(){
    
    if(document.documentElement.clientWidth >= 1000){
        setElementos();
    }
    else{
        setElementos("cover");
    }
}

function setElementos(tipo){
    let elementos = document.getElementsByClassName("imgformat");
    for(let i = 0; i < elementos.length; i++){
        elementos[i].style.setProperty("object-fit", tipo);
    }
}

