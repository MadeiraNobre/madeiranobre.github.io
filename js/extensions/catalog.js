/**
 * Cria uma linha em um elemento base
 * @param {number} tamanhoLinha Tamanho da Linha
 * @param {number} linhaAtual Linha atual
 * @param {object} data Base de dados que sera usada como base
 * @returns {HTMLElement} Linha Criada
 */
function criarLinha(tamanhoLinha, linhaAtual, data){
    var linha = $("<div class='row'></div>");
    var limite = (linhaAtual + 1) * tamanhoLinha;

    for(var i = linhaAtual * tamanhoLinha; i < data.moveis.length && i < limite; i++){
        if(data.moveis[i].ativado){
            linha.append($("<div class='col-4 text-center'></div>")
                .append($("<a data-url='/paginas/movel'></a>").click(i, catalogoOnclick)
                    .append($("<img src='/assets/internal/moveis-db/imgmoveis/" + data.moveis[i].imgs[0] +
                        "' alt='Imagem " + data.moveis[i].nome +"' class='thumb'></img>"))
                    .append($("<p></p>").text(data.moveis[i].tituloCatalogo))
                )
            );
        }
    }
    return linha;
}

/**
 * Cria uma tabela a partir de uma base de dados
 * @param {number} tamanhoLinha Tamanho das linhas
 * @param {object} data Base de dados
 * @param {HTMLElement} htmlInfration Elemento que ira infrar a tabela
 */
function criarTabela(tamanhoLinha, data, htmlInfration){
    var tamanho = data.moveis.length / tamanhoLinha;
    for(var i = 0; i < tamanho; i++){
        htmlInfration.append(criarLinha(tamanhoLinha, i, data));
    }
}
 
/**
 * Evento de click para o catalogo
 * @param {object} element Elemento clicado
 */
function catalogoOnclick(element){
    location.search="?movel=" + element.data;
}