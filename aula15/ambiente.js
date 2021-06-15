let num = [5,8,4]
num[3] = 6 // acrescenta 6 na posicao 3
//num.length() // mostra tamanho do vetor
num.sort() // reorganiza em ordem crescente os valores dentro do vetor
num.push(1) //coloca um numero no último campo, criando ele

console.log(`O vetor tem ${num.length} elementos e seu itens são ${num}`)

let pos = num.indexOf(3) // se o resultado for -1 não foi encontrado o valor
console.log(`O valor está na posição ${pos}`) 