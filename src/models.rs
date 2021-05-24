use serde::Deserialize;

#[derive(Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Movel {
    pub ativado: bool,
    pub nome: String,
    pub titulo_catalogo: String,
    pub descricao: String,
    pub imgs: Vec<String>
}

#[derive(Deserialize)]
pub struct MoveisResponse {
    pub moveis: Vec<Movel>
}
