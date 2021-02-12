var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var tatiana = document.querySelector('#quarta-paciente');
console.log(tatiana);

var peso = tatiana.querySelector('.info-peso');
console.log(peso.textContent);

//calcular imc de um determinado paciente
//querySelector - pega apenas um elemento, já o querySelectorAll pega 
//todos os elementos
//Obtendo o trecho da class
var pacientes = document.querySelectorAll('.paciente');
for(var i=0; i<pacientes.length;i++){
    var paciente = pacientes[i];
    
    //obtendo o peso do paciente
    var tdPeso = paciente.querySelector('.info-peso');
    console.log(tdPeso);
    var peso = tdPeso.textContent;

    //obtendo a altura do paciente
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    //validando informações
    var pesoEhValido = true;
    var alturaEhValida = true;

    var tdImc = paciente.querySelector('.info-imc');

    if(peso<=0 || peso>=1000){
        tdImc.textContent = "Peso inválido";
        pesoEhValido = false;
        //O Element .classList é uma propriedade somente leitura,
        // que retorna uma coleção DOMTokenList ativa dos atributos de classe do elemento.
        paciente.classList.add('paciente-invalido');
    }


    if(altura<=0 || altura>=3.00){
        tdImc.textContent = "Peso inválido";
        alturaEhValida = false;
        paciente.classList.add('paciente-invalido');
    }

    if(pesoEhValido && alturaEhValida){
        var imc = peso / (altura * altura);
        //atualizando o imc da querySelector correspondente
        tdImc.textContent = imc.toFixed(2);
    }

}


//addEventListener -> escuta o evento causado pelo usuário, no caso desse
//exemplo, ele vai escutar o evento de click.
// titulo.addEventListener("click", function mostraMensagem(){
//     console.log('Olá, eu fui clicado!');
// });

//preventDefault() - previne o corpotamento do botão.. 
//através do form, podemos acessar o name dos inputs também.. e pra pegarmos
//os valores dos inputs digitados, utilizamos value.
//createElement('nomeDaTag'), serve para criar elemento HTML dentro do JS.
//appendChild(nomeDaTagFilha) - serve para jogar a tag filha dentro do pai.

var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');

    //obtendo os valores dos campos
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //criando a tag tr dentro do javascript
    var pacienteTr = document.createElement('tr');
    
    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');

    //obtendo os valores
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    console.log(pacienteTr.appendChild(nomeTd));
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);











    
    

});

