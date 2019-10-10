const elemento_row = 3;

function CriarLinhaImagem(json, linha){
    let itens = document.getElementById('itens');
    let row = document.createElement("div");
    row.setAttribute('class', 'row');
    itens.appendChild(row);
    
    let limite = (linha + 1) * elemento_row;

    for(let i = linha * elemento_row; i < json.moveis.length && i < limite; i++){
        if(json.moveis[i].ativado){
            
            let coluna = document.createElement("div");
            coluna.setAttribute('class', 'col-4 text-center');
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
    let tamanho = json.moveis.length / elemento_row;
    
    
    for(let i = 0; i < tamanho; i++){
        CriarLinhaImagem(json, i);
    }
    
    sendDocHeightMsg();
}

$(document).ready(function(){
    window.addEventListener("resize", alterarFit);
    $.getJSON('/resorces/moveis-db/moveis.json', function(data){
        SetList(data);
    });    
});


function alterarFit(){
    
    if(document.documentElement.clientWidth >= 1000){
        setElementos("fill");
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

function CarregarItemView(href, id){
    $.cookie("id_movel", id);
    sendSetIframeMsg(href);
}






