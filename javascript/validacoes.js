
const inputs = document.querySelectorAll("input");
console.log(inputs)

inputs.forEach(input => {
    
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
        console.log(evento)
        
        console.log(evento.validity)

    })
});

var span = document.querySelector(".span__erro");
    console.log(span);
    
    var inputNome = document.querySelector("[data-tipo='nome']");
    
    var inputEmail = document.querySelector("[data-tipo='email']");

    var inputMotivo = document.querySelector("[data-tipo='motivo']");

    var lableNome = document.querySelector(".label__nome");

    var lableEmail = document.querySelector(".label__email");

    var lableMotivo = document.querySelector(".label__motivo");

function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    console.log(tipoDeInput)
 
    if(input.validity.valid) {
      
    span.innerHTML = " ";

    inputNome.classList.remove("erro__nome");
    inputEmail.classList.remove("erro__email");
    inputMotivo.classList.remove("erro__motivo");
    lableNome.classList.remove("contener__nome");
    lableEmail.classList.remove("contener__email");
    lableMotivo.classList.remove("contener__motivo");
   
    } else {
        if(input == inputNome) {
            inputNome.classList.add("erro__nome");
            lableNome.classList.add("contener__nome");
        }
        if(input == inputEmail) {
            inputEmail.classList.add("erro__email");
            lableEmail.classList.add("contener__email");
        }
        if(input == inputMotivo) {
            inputMotivo.classList.add("erro__motivo");
            lableMotivo.classList.add("contener__motivo");
        }

        span.style.visibility="visible";
        span.innerHTML = mostraMensagemDeErro(tipoDeInput, input);
      
    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo de nome não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.',
        patternMismatch: "o seu não não e válido"
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.',
        patternMismatch: "o seu email não e valido"
    },
    motivo: {
        valueMissing: 'O campo de motivo não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.',
        patternMismatch: "o motivo não mim parecer exato"
    }

}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = '';
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro];
        }
    })
    console.log(mensagem)
    return mensagem;
}

function validandoInputNome() {
    var inputNome = document.querySelector("[data-tipo='nome']");
  
    valida(inputNome);
}

function validandoInputEmail() {
    var inputEmail = document.querySelector("[data-tipo='email']");

    valida(inputEmail);
}

function validandoInputMotivo() {
    var inputMotivo = document.querySelector("[data-tipo='motivo']");
    valida(inputMotivo);
}
