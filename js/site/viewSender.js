function SetList(json){
    for(let i = 0; i < json.moveis.length; i++){
        let elemento = document.createElement("a");
        elemento.setAttribute('href', 'itemView.html');
        elemento.setAttribute('onclick', ('return CarregarItemView(this.href, ' + i + ');'));
        elemento.innerHTML = json.moveis[i].nome;
        document.getElementById("itens").appendChild(elemento);
    }
}

$(document).ready(function(){
    $.getJSON('/resorces/moveis-db/moveis.json', function(data){
        SetList(data);
    });
});

function CarregarItemView(href, id){
    $.cookie("id_movel", id);
    sendSetIframeMsg(href);
}


