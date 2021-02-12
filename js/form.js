//preventDefault() - previne o corpotamento do botão.. 
//através do form, podemos acessar o name dos inputs também.. e pra pegarmos
//os valores dos inputs digitados, utilizamos value.
//createElement('nomeDaTag'), serve para criar elemento HTML dentro do JS.
//appendChild(nomeDaTagFilha) - serve para jogar a tag filha dentro do pai.

var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');

    var paciente = obtemPacienteDoFormulario(form);
    console.log(paciente.imc);

    var pacienteTr = montaTr(paciente);
    
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
    

});

function obtemPacienteDoFormulario(form){
    paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
    
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(criarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criarTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function criarTd(dado, classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
} 
    