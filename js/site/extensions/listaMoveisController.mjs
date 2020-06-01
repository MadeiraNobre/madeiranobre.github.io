export default class ListaMoveisController {
    json = undefined;
    elementoBase = "";
    tamanhoLinha = 0;
    constructor(json = undefined, elementoBase = "", tamanhoLinha = 3){
        this.json = json;
        this.elementoBase = elementoBase;
        this.tamanhoLinha = tamanhoLinha;
    }

    EnviarLista(){
        let tamanho = this.json.moveis.length / this.tamanhoLinha;
        for (let i = 0; i < tamanho; i++){
            this.CriarLinha(i);
        }
    }

    CriarLinha(linhaAtual = 0){
        let itens = document.getElementById(this.elementoBase);
        let linha = document.createElement("div");
        linha.setAttribute("class", "row");
        itens.appendChild(linha);

        let limite = (linhaAtual + 1) * this.tamanhoLinha;
        for(let i = linhaAtual * this.tamanhoLinha; i < this.json.moveis.length && i < limite; i++){
            if(this.json.moveis[i].ativado){
                let coluna = document.createElement("div");
                coluna.setAttribute("class", "col-4 text-center");
                let ahref = document.createElement("a");
                ahref.setAttribute("href", "itemView.html");
                ahref.onclick = function(){
                    $.cookie("id_movel", i);
                    sendSetIframeMsg(this.href);
                }
                let img = document.createElement("img");
                let p = document.createElement("p");
                p.innerText = this.json.moveis[i].tituloCatalogo;
                img.setAttribute('src', `/resorces/moveis-db/imgmoveis/${this.json.moveis[i].imgs[0]}`);
                img.setAttribute('alt', `Imagem da ${this.json.moveis[i].nome}`);
                img.setAttribute('class', 'thumb');
                ahref.appendChild(img);
                ahref.appendChild(p);
                coluna.appendChild(ahref);
                linha.appendChild(coluna);
            }else{
                limite++;
            }
        }
    }

}