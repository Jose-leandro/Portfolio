const inputs = document.querySelectorAll(".input");

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {

        valida(evento.target)
    });
});

function valida(inputAlvo) {

    const tipoDeInput = inputAlvo.dataset.tipo;
    let spanErro = document.querySelector(".span__erro")

    if (inputAlvo.validity.valid) {
        spanErro.innerHTML = "";
        spanErro.style.display = "none";
        inputAlvo.removeAttribute('style');

        return;
    }

    inputAlvo.style.borderBottom = "2px solid #954848";
    spanErro.style.display = "inline-block";
    spanErro.innerHTML = mostraMensagemDeErro(tipoDeInput, inputAlvo);
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagensDeErro = {
    nome: {
        valueMissing: 'Por favor, preencha o campo de nome. Ele não pode ficar em branco.',
        typeMismatch: 'O nome inserido não parece ser válido. Por favor, verifique e tente novamente.',
        patternMismatch: "O nome inserido não parece ser válido. Por favor, verifique e tente novamente."
    },
    assunto: {
        valueMissing: 'Por favor, preencha o campo de assunto. Ele não pode ficar em branco.',
        typeMismatch: 'O assunto inserido não parece ser válido. Por favor, verifique e tente novamente.',
        patternMismatch: "O assunto inserido não parece ser válido. Por favor, verifique e tente novamente."
    },
    mensagem: {
        valueMissing: 'Por favor, preencha o campo de mensagem. Ele não pode ficar em branco.',
        typeMismatch: 'A mensagem inserida não parece ser válida. Por favor, verifique e tente novamente.',
        patternMismatch: "A mensagem inserida não parece ser válida. Por favor, verifique e tente novamente."
    }
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = '';
    tiposDeErro.forEach(erro => {
        if (input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro];
        }
    });

    return mensagem;
}

function alteracaoDadosMailto() {
    let inputNome = document.querySelector("[data-tipo='nome']").value;
    let valuleInputMensagem = document.querySelector("[data-tipo='mensagem']").value;
    let valuleInputAssunto = document.querySelector("[data-tipo='assunto']").value;

    let palavrasSudacoes = ["Olá, bom dia", "Boa noite", "Bom dia", "Olá", "Olá, tudo bem", "Tudo bem", "Boa tarde"];
    let corpoEmail = "";

    for (let i = 0; i < palavrasSudacoes.length; i++) {
        if (valuleInputMensagem.includes(palavrasSudacoes[i])) {
            console.log("Sim a saudações")
            console.log(palavrasSudacoes[i])
            let novoTexto = valuleInputMensagem.replace(palavrasSudacoes[i], "");
            corpoEmail = `${palavrasSudacoes[i]}, Meu Nome é ${inputNome}, ${novoTexto}`;
            break;
        }
    }

    if (corpoEmail === "") {
        Console.log("Não há saudações")
        corpoEmail = `Olá, tudo, Meu Nome é ${inputNome} ${valuleInputMensagem}`;
    }

    document.querySelector(".mailto-email").href = `mailto:jose.leandro.nasciment@gmail.com?subject=${valuleInputAssunto}&body=${encodeURIComponent(corpoEmail)}`;

    agradecimentoPeloContato();
}


function agradecimentoPeloContato() {

    document.querySelector(".form__agradecimentos").style.display = "flex";

    let inputNome = document.querySelector("[data-tipo='nome']").value;
    console.log(inputNome)

    let mensagemDeAgradecimento = `Olá, ${inputNome}. Muito obrigado por entrar em contato. Sua mensagem é muito importante para mim e farei o possível para responder o mais rápido possível. Agradecemos a sua paciência.`;
    document.querySelector(".agradecimentos__mesagem").innerHTML = mensagemDeAgradecimento;
}


document.querySelector(".agradecimentos__x").addEventListener("click", () => {

    document.querySelector(".form__agradecimentos").removeAttribute('style');
})






