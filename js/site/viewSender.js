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
            let img = document.createElement("img");
            img.setAttribute('src', ('/resorces/moveis-db/imgmoveis/' + json.moveis[i].imgs[0]));
            img.setAttribute('alt', 'Imagem da ' + json.moveis[i].nome);
            img.setAttribute('class', 'thumb');
            coluna.appendChild(img);
            row.appendChild(coluna);
        }
        else {
            limite++;
        }
    }

    row = document.createElement("div");
    row.setAttribute('class', 'row');
    itens.appendChild(row);

    for(let i = linha * elemento_row; i < json.moveis.length && i < limite; i++){
        if(json.moveis[i].ativado){
            let coluna = document.createElement("div");
            coluna.setAttribute('class', 'col-sm');
            let p = document.createElement("p");
            p.innerHTML = json.moveis[i].nome;
            coluna.appendChild(p);
            row.appendChild(coluna);
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






/*


for(let i = 0; i < json.moveis.length; i++){
        
    }

let elemento = document.createElement("a");
        elemento.setAttribute('href', 'itemView.html');
        elemento.setAttribute('onclick', ('return CarregarItemView(this.href, ' + i + ');'));
        elemento.innerHTML = json.moveis[i].nome;
        document.getElementById("itens").appendChild(elemento);
        */