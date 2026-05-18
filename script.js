function questionario() {
    alert("Vamos conhecer a base do Javascript!")
    var decisao = confirm("Está pronto para aprender?");
    const pais = `Brasil`;
    var teste = null;
    let teste2

    if (decisao) {
        let nome = prompt(`Qual é o seu nome?`).toUpperCase();

        let idade = Number.parseInt(prompt(`Qual é a sua idade?`));

        let curso = prompt(`Qual é o seu curso?`);

        let salario = prompt(`Qual é o seu salário?`);

        let nota = Number(prompt(`Qual é a maior nota que tirou no curso até agora?`));

        document.writeln(`<h2 class="inicio">Seja bem vindo, ` + nome + `!</h2>`);
        document.write(`<ul class="lista">`);
        document.writeln(`<li class="item">Você tem ` + idade + ` anos.</li>`);
        document.writeln(`<li class="item">Curso escolhido: ${curso.toLowerCase()}</li>`);
        document.writeln(`<li class="item">Você tem ` + nome.length + ` caracteres no seu nome.</li>`);
        document.writeln(`<li class="item">Seu país é ` + pais + `.</li>`);
        document.writeln(`<li class="item">Seu salário é de: ` + Number.parseFloat(salario).toFixed(2) + `.</li>`);
        document.write(`</ul>`);

        console.log(typeof nome);
        console.log(typeof decisao);
        console.log(typeof idade);
        console.log(typeof curso);
        console.log(typeof teste);
        console.log(typeof teste2);
    } else {
        alert("Tudo bem, volte quando estiver pronto!")
        document.writeln(`<h2>Sistema encerrado.. recarregue a página.</h2>`);
        alert(decisao)
        alert(nome)
    }
}

function calcularBanco() {
    let saldo = Number(prompt("Qual é o seu saldo?"));
    let deposito = Number(prompt("Quanto deseja depositar?"));
    let saque = Number(prompt("Quanto deseja sacar?"));
    let taxa = Number(prompt("Qual é a taxa de juros?"));
    let anos = Number(prompt("Quantos anos deseja deixar o dinheiro investido?"));

    saldo = saldo + deposito

    saldo = saldo - saque

    let rendimento = saldo * (taxa / 100)

    let metadeSaldo = saldo / 2

    let saldo_par = saldo % 2 == 0

    let jurosCompstos = saldo * (1 + taxa / 100) ** anos

    /*saldo += 50

    saldo -= 20

    saldo *= 2

    saldo /= 2 

    saldo **= 2*/

    document.getElementById("resultado").innerHTML = `
    
    <strong>Saldo:</strong>
    R$ ${rendimento.toFixed(2)} <br>

    <strong>Metade do Saldo:</strong>
    R$ ${metadeSaldo.toFixed(2)} <br>

    <strong>Saldo é:</strong>
    ${saldo_par ? `número par` : `número ímpar`} <br>

    <strong>Juros Compostos:</strong>
    R$ ${jurosCompstos.toFixed(2)} <br>

    `
}