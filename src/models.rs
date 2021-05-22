use serde::Deserialize;

#[derive(Deserialize, Clone)]
pub struct Categoria {
    pub id: u64,
    pub name: String,
    pub icon: String
}
