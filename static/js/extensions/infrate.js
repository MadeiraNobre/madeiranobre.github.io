/**
* Infra um html a partir de um url
* @param {string} url Pagina que deseja carregar
*/
function infrate(url){
    $("#infrate").load(url);
}

/**
 * Infra um elemento a partir de um HTMLElement data
 */
function clickEvent(){
    infrate($(this).data("url"));
}

/**
 * Registra o evento click nos elementos
 * @param {string} classe nome string da classe para registrar
 */
function registerEvent(classe){
    $(classe).click(clickEvent);
}
