/**
 * Adiciona Titulo no form
 * @param {string} titulo Titulo desejado
 */
function criarTitulo(titulo){
    $("#nomeMovel").text(titulo);
}

/**
 * Adiciona descrição no form
 * @param {string} descricao Descrição Desejada
 */
function criarDescricao(descricao){
    $("#descricao").text(descricao);
}

/**
 * Adiciona o botão do WhatsApp e seu funcionamento
 * @param {string} titulo Titulo da publicação
 */
function criarWppApi(titulo){
    var mensagem = tratamentoHora() + ", gostaria de receber informação sobre " + titulo + ".";
    $("#WppAPI").append($("<a target='_blank' class='whatsapp'></a>")
        .attr("href", ("https://wa.me/5511995401715?text=" + mensagem).replace(" ", "%20"))
        .text("Mais informações")
        .append($("<i class='fab fa-whatsapp'></i>"))
    );
}

/**
 * Preenche o slideshow
 * @param {string[]} images Imagens para fazer o slide show 
 */
function criarSlides(images){
    for(var i = 1; i < images.length; i++){
        $("#controles").append($("<li data-target='#slide' data-slide-to='" + i +"'></li>"));
        $("#imagesLocal").append($("<div class='carousel-item'></div>")
            .append($("<img class='d-block w-100 imgformat'></img>")
                .attr("src", "/static/assets/internal/moveis-db/imgmoveis/" + images[i])
            )
        );
    }
    $("#controles").children().first().addClass("active");
    $("#imagesLocal").children().first().addClass("active");
}

/**
 * Retorna a apresentação nescessaria de acordo com a hora do dia
 * @returns {string} Apresentação
 */
function tratamentoHora(){
    var objTime = new Date();
    var hora = objTime.getHours();

    var retorno;
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

$.getJSON("/static/assets/internal/moveis-db/moveis.json", function(dados){
    var index = getUrlVars().movel;
    criarTitulo(dados.moveis[index].nome);
    criarDescricao(dados.moveis[index].descricao);
    criarWppApi(dados.moveis[index].nome);
    criarSlides(dados.moveis[index].imgs);
});