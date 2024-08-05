alert('Bem vindo ao jogo do número secreto!');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(`Número secreto: ${numeroSecreto}`)
let chute;
let tentativas = 1;

// Enquanto | Chute | não for igual | ao numero secreto...
while (chute != numeroSecreto) {
    chute = prompt ('escolha um número entre 1 e 100');
    if (numeroSecreto == chute) {
        break;
    } else {
        let tamanho = chute > numeroSecreto ? 'MENOR' : 'MAIOR';
        alert(`O número secreto é ${tamanho} que ${chute}`);
        //if (chute > numeroSecreto) {
        //    alert(`O número secreto é MENOR que ${chute}`);
        //} else {
        //    alert(`O número secreto é MAIOR que ${chute}`);
        //}

        //tentativas = tentativas + 1
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
let frsTentativa = tentativas > 1 ? 'Foram utilizadas' : 'Foi utilizado apenas'
    alert(`Parabéns, você acertou o número secreto! (${frsTentativa} ${tentativas} ${palavraTentativa})`)


// Match.random() gera número maior que 0 e menor que 1, (0.5498096496)
// parseInt faz com que o número saia somente inteiro (0)