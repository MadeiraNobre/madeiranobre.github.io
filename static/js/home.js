$.getJSON("/static/assets/internal/moveis-db/moveis.json", function(dados){
    criarTabela(3, dados, $("#itens"));
});