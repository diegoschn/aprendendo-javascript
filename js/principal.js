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




