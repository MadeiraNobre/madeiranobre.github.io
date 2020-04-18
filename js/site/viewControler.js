function PegarMovel(dados, id){
    let nomeMovel = document.getElementById('nomeMovel');
    let descricao = document.getElementById('descricao');

    if(dados.moveis[id].ativado){
        nomeMovel.innerHTML = dados.moveis[id].nome;
        descricao.innerHTML = dados.moveis[id].descricao;

        let lielement = document.createElement("li");
        lielement.dataset.target = "#slide";
        lielement.setAttribute('data-slide-to', 0);
        lielement.setAttribute('class', 'active');
        document.getElementById('controles').appendChild(lielement)
        let imgElement = document.createElement("div");
        imgElement.setAttribute('class', 'carousel-item active');
        imgElement.setAttribute('id', 'divimg0');
        document.getElementById('imagesLocal').appendChild(imgElement);
        imgElement = document.createElement('img');
        imgElement.setAttribute('class', 'd-block w-100 imgformat');
        imgElement.setAttribute('alt', 'Imagem do Movel');
        imgElement.src = ("../resorces/moveis-db/imgmoveis/" + dados.moveis[id].imgs[1]);
        document.getElementById('divimg0').appendChild(imgElement);
            
        for (let i = 2; i < dados.moveis[id].imgs.length; i++){
            let lielement = document.createElement("li");
            lielement.dataset.target = "#slide";
            lielement.setAttribute('data-slide-to', i);
            document.getElementById('controles').appendChild(lielement)

            let imgElement = document.createElement("div");
            imgElement.setAttribute('class', 'carousel-item');
            imgElement.setAttribute('id', ('divimg' + i));
            document.getElementById('imagesLocal').appendChild(imgElement);
            imgElement = document.createElement('img');
            imgElement.setAttribute('class', 'd-block w-100 imgformat');
            imgElement.setAttribute('alt', 'Imagem do Movel');
            imgElement.src = ("../resorces/moveis-db/imgmoveis/" + dados.moveis[id].imgs[i]);
            document.getElementById(('divimg' + i)).appendChild(imgElement);

            sendDocHeightMsg();
        }

        let wppapi = document.getElementById("WppAPI");
        let wpplink = document.createElement("a");
        let texto = tratamentoHora() + ", gostaria de receber informação sobre " + dados.moveis[id].nome + ".";
        wpplink.setAttribute('href', ('https://wa.me/5511995401715?text=' + texto.replace(" ", "%20")));
        wpplink.setAttribute('target', '_blank');
        wpplink.setAttribute('class', 'whatsapp');
        wpplink.innerHTML = "Mais informações ";
        let wppicon = document.createElement("i");
        wppicon.setAttribute('class', 'fab fa-whatsapp');
        wpplink.appendChild(wppicon);
        wppapi.appendChild(wpplink);
    }
}

$(document).ready(function(){
    $.getJSON('/resorces/moveis-db/moveis.json', function(data){
        let id = $.cookie("id_movel");
        PegarMovel(data, id);
    });

});


function tratamentoHora(){
    let objTime = new Date();
    let hora = objTime.getHours();

    let retorno;
    if(hora >= 5 && hora < 12){
        retorno = "Bom dia";
    } else {
        if(hora >= 12 && hora < 18){
            retorno = "Boa tarde";
        }
        else {
            retorno = "Boa noite";
        }
    }

    return retorno;
}