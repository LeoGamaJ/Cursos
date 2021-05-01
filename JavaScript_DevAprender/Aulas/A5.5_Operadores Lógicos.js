// Operador Lógico e (&&)
// retorna TRUE se os dois operandos forem true

/*
console.log(true && true)
console.log(true && false)
*/

/*
let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar)
*/

// Operador lógico ou (||)
let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

console.log('Pode aplicar: ' ,podeAplicar);

// Operador NOT (!)

let candidatoRecusado = !podeAplicar;
console.log('Cadidato recusado: ' ,candidatoRecusado);
