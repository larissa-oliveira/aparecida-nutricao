// Calculando o IMC;
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

  var paciente = pacientes[i] ;

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if (!pesoEhValido) {
      pesoEhValido = false;
      tdImc.textContent = "Peso inválido!";
      paciente.classList.add("peso-invalido");
  }

  if (!alturaEhValida) {
      alturaEhValida = false;
      tdImc.textContent = "Altura inválida!";
      paciente.classList.add("peso-invalido");

  }

  if (pesoEhValido && alturaEhValida) {
      var imc = calcImc(peso,altura);
      tdImc.textContent = imc;
      //a propriedade(toFixed(2)) define o numero de casas decimais;
  }
}

function validaPeso(peso){
  if(peso >= 0 && peso <= 1000){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura >=0 && altura <= 3.00 ){
    return true;
  }else{
    return false;
  }
}


// Função para calcular o IMC (essa função pode ser chamada em outros arquivos JS);
function calcImc (peso, altura){
  var imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
