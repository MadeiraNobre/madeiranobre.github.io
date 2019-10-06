const elemento_row = 6;

function CriarLinhaImagem(json, linha){
    let itens = document.getElementById('itens');
    let row = document.createElement("div");
    row.setAttribute('class', 'row');
    itens.appendChild(row);
    
    let limite = (linha + 1) * elemento_row;

    for(let i = linha * elemento_row; i < json.moveis.length && i < limite; i++){
        if(json.moveis[i].ativado){
            let coluna = document.createElement("div");
            coluna.setAttribute('class', 'col-sm');
            let ahref = document.createElement("a");
            ahref.setAttribute('href', 'itemView.html');
            ahref.setAttribute('onclick', ('return CarregarItemView(this.href, ' + i + ');'));
            let img = document.createElement("img");
            let p = document.createElement("p");
            p.innerHTML = json.moveis[i].nome;
            img.setAttribute('src', ('/resorces/moveis-db/imgmoveis/' + json.moveis[i].imgs[0]));
            img.setAttribute('alt', 'Imagem da ' + json.moveis[i].nome);
            img.setAttribute('class', 'thumb');
            ahref.appendChild(img);
            ahref.appendChild(p);
            coluna.appendChild(ahref);
            row.appendChild(coluna);
        }
        else {
            limite++;
        }
    }
}



function SetList(json){
    CriarLinhaImagem(json, 0);
    
    

    sendDocHeightMsg();
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






