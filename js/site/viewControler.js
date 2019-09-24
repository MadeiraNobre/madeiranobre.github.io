function PegarMovel(dados, id){
    let nomeMovel = document.getElementById('nomeMovel');
    let descricao = document.getElementById('descricao');

    if(dados.moveis[id].ativado){
        nomeMovel.innerHTML = dados.moveis[id].nome;
        descricao.innerHTML = dados.moveis[id].descricao;
        for (let i = 0; i < dados.moveis[id].imgs.length; i++){
            let elemento = document.createElement("img");
            elemento.src = ("../resorces/moveis-db/imgmoveis/" + dados.moveis[id].imgs[i]);
            document.getElementById('imagensMovel').appendChild(elemento);
        }

    }
}

$(document).ready(function(){
    let dados = JSON.parse(db);
    PegarMovel(dados, 0);
});

