// Função
// Verbo + Substantivo

/*
let corSite = "azul";
function resetCor() {
    corSite = "";
};

console.log(corSite)
resetCor()
console.log(corSite)
*/

/*
let corSite = "azul";
function resetCor(cor) {
    corSite = cor;
};

console.log(corSite);
resetCor("vermelho");
console.log(corSite);
*/

let corSite = "azul";
function resetCor(cor, tonalidade) {
    corSite = cor + tonalidade;
};

console.log(corSite);
resetCor("verde", " claro");
console.log(corSite);

