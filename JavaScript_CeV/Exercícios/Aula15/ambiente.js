let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`Já o segundo valor do vetor é ${num[1]}`)
console.log(`E o último valor do vetor é ${num[5]}`)

let pos = num.indexOf(8) 
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
