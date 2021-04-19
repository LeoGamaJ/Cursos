console.log('Hello, world!');

// Váriaveis criasdas com let PODEM podem ser alteradas
let nome = 'Leo';
console.log(nome);
console.log('Seu nome é', nome);

let idade = 32;
console.log(idade);
console.log('Sua idade é:', idade);

// Váriaveis criasdas com const Não podem ser alteradas
const nasc = 1988;
console.log(nasc);
console.log('Você nasceu em', nasc);

// Aqui podemos observar o que uma variável let pode fazer. Ela sobrepõe o valor anterior, sem a necessidade de precisar especificar o let novamente.
nome = 'Messias';
console.log(nome);
console.log('Seu nome mudou, agora é:', nome);
// Caso tentemos fazer o mesmo com a variável nasc, obteremos um erro pois esta se encontra determinada por const (constante)

// Booleanas
const ehMaiorDeIdade = false;
console.log(ehMaiorDeIdade)

// Operadores Matemáticos
const soma = 5 + 4
console.log(soma)
const sub = 5 - 4
console.log(sub)
const mult = 5 * 4
console.log(mult) 
const div = 5 / 4
console.log(div)
const resto = 5 % 4
console.log(resto)

// Contador
let contador1 = 5
contador1 = contador1 + 5
console.log(contador1)

let contador2 = 10
contador2 += 10
console.log(contador2)
// contador3 ++
