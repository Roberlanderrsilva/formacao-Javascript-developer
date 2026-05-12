// Exemplo de entrada baseada na imagem
const entradas = [5, 3, 4, 1, 10, 8];
let i = 0;

function gets() {
    return entradas[i++];
}

// Lógica do Desafio
const n = gets(); // Quantidade de números (o primeiro valor)
let maiorPar = null;
let menorImpar = null;

for (let i = 0; i < n; i++) {
    const numero = gets();

    if (numero % 2 === 0) {
        // Lógica para o Maior Par
        if (maiorPar === null || numero > maiorPar) {
            maiorPar = numero;
        }
    } else {
        // Lógica para o Menor Ímpar
        if (menorImpar === null || numero < menorImpar) {
            menorImpar = numero;
        }
    }
}

console.log(`Maior número par: ${maiorPar}`);
console.log(`Menor número ímpar: ${menorImpar}`);