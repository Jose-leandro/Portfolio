
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

// const validadores = {
//     nome:input => validandoInputNome(input),
//     email:input => validandoInputEmail(input)

// }

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

// export function valida(input) {
//     const tipoDeInput = input.dataset.tipo

//     if(validadores[tipoDeInput]) {
//         validadores[tipoDeInput](input)
//     }

//     if(input.validity.valid) {
//         input.parentElement.classList.remove('input-container--invalido')
//         input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
//     } else {
//         input.parentElement.classList.add('input-container--invalido')
//         input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
//     }
// }

// const tiposDeErro = [
//     'valueMissing',
//     'typeMismatch',
//     'patternMismatch',
//     'customError'
// ]

// const mensagensDeErro = {
//     nome: {
//         valueMissing: 'O campo de nome não pode estar vazio.'
//     },
//     email: {
//         valueMissing: 'O campo de email não pode estar vazio.',
//         typeMismatch: 'O email digitado não é válido.'
//     },
//     senha: {
//         valueMissing: 'O campo de senha não pode estar vazio.',
//         patternMismatch: 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos.'
//     },
//     dataNascimento: {
//         valueMissing: 'O campo de data de nascimento não pode estar vazio.',
//         customError: 'Você deve ser maior que 18 anos para se cadastrar.'
//     },
//     cpf: {
//         valueMissing: 'O campo de CPF não pode estar vazio.',
//         customError: 'O CPF digitado não é válido.' 
//     },
//     cep: {
//         valueMissing: 'O campo de CEP não pode estar vazio.',
//         patternMismatch: 'O CEP digitado não e valido.' ,
//         customError: "Não foi possivel buscar o CEP." 
//     },
//     logradouro: {
//         valueMissing: 'O campo de logradouro não pode estar vazio.',
//     },
//     cidade: {
//         valueMissing: 'O campo de cidade não pode estar vazio.',
//     },
//     estado: {
//         valueMissing: 'O campo de logradouro não pode estar vazio.',
//     },
//     preco: {
//         valueMissing: 'O campo de preço não pode estar vazio'
//     }

// }

// const validadores = {
//     dataNascimento:input => validaDataNascimento(input),
//     cpf:input => validaCPF(input),
//     cep:input => recuperarCEP(input)
// }

// function mostraMensagemDeErro(tipoDeInput, input) {
//     let mensagem = ''
//     tiposDeErro.forEach(erro => {
//         if(input.validity[erro]) {
//             mensagem = mensagensDeErro[tipoDeInput][erro]
//         }
//     })
    
//     return mensagem
// }

// function validaDataNascimento(input) {
//     const dataRecebida = new Date(input.value)
//     let mensagem = ''

//     if(!maiorQue18(dataRecebida)) {
//         mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'
//     }

//     input.setCustomValidity(mensagem)
// }

// function maiorQue18(data) {
//     const dataAtual = new Date()
//     const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

//     return dataMais18 <= dataAtual
// }

// function validaCPF(input) {
//     const cpfFormatado = input.value.replace(/\D/g, '')
//     let mensagem = ''

//     if(!checaCPFRepetido(cpfFormatado) || !checaEstruturaCPF(cpfFormatado)) {
//         mensagem = 'O CPF digitado não é válido.'
//     }

//     input.setCustomValidity(mensagem)
// }

// function checaCPFRepetido(cpf) {
//     const valoresRepetidos = [
//         '00000000000',
//         '11111111111',
//         '22222222222',
//         '33333333333',
//         '44444444444',
//         '55555555555',
//         '66666666666',
//         '77777777777',
//         '88888888888',
//         '99999999999'
//     ]
//     let cpfValido = true

//     valoresRepetidos.forEach(valor => {
//         if(valor == cpf) {
//             cpfValido = false
//         }
//     })

//     return cpfValido
// }

// function checaEstruturaCPF(cpf) {
//     const multiplicador = 10

//     return checaDigitoVerificador(cpf, multiplicador)
// }

// function checaDigitoVerificador(cpf, multiplicador) {
//     if(multiplicador >= 12) {
//         return true
//     }

//     let multiplicadorInicial = multiplicador
//     let soma = 0
//     const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split('')
//     const digitoVerificador = cpf.charAt(multiplicador - 1)
//     for(let contador = 0; multiplicadorInicial > 1 ; multiplicadorInicial--) {
//         soma = soma + cpfSemDigitos[contador] * multiplicadorInicial
//         contador++
//     }

//     if(digitoVerificador == confirmaDigito(soma)) {
//         return checaDigitoVerificador(cpf, multiplicador + 1)
//     }

//     return false
// }

// function confirmaDigito(soma) {
//     return 11 - (soma % 11)
// }

// function recuperarCEP(input) {
//     const cep = input.value.replace(/\D/g, "")
//     const url = `https://viacep.com.br/ws/${cep}/json/`
//     const options = {
//         method: "GET",
//         mode: "cors",
//         headers: {
//             "content-type": "application/json;charset=utf-8"
//         }
//     }

//     if(!input.validity.patternMismatch && !input.validity.valueMissing) {
//         fetch(url,options).then(
//             response => response.json()
//         ).then (
//             data => {
//                 if(data.erro) {
//                     input.setCustomValidity("Não foi possivel buscar o CEP")
//                     return
//                 }
//                 input.setCustomValidity(" ")
//                 preenchercampos(data)
//                 return
//             }
//         )
//     }
// }

// function preenchercampos(data) {
//     const logradouro = document.querySelector('[data-tipo="logradouro"]');
//     const cidade = document.querySelector('[data-tipo="cidade"]');
//     const estado = document.querySelector('[data-tipo="estado"]');

//     logradouro.value = data.logradouro
//     cidade.value = data.localidade
//     estado.value = data.uf

// }