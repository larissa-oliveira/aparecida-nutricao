//Configurando o botão e fazendo com que ele envie dados p/ a tabela;
var botaoAdicionar = document.querySelector("#adicionar-paciente");

// Função dos eventos do formulário;
botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();
// Adicionando um novo paciente na tabela;
  var form = document.querySelector("#form-adiciona");
// Extraindo informações do formulário;
  var paciente = obtemPacienteDoFormulario(form);
// Montando a tabela com a função montaTr;
  var erros = validaPaciente(paciente);

  if(erros.length > 0){
    exibeMensagensDeErro(erros);
    return;
  }

//Função que adiciona os pacientes na tabela;
  adicionaPacientesNaTabela(paciente);

  form.reset();

});

function adicionaPacientesNaTabela(paciente){
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

// Função que exibe as mensagens de erro;
function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
  }

// função q cria o objeto para receber informaçoes da tabela;
  function obtemPacienteDoFormulario(form){
// objeto Paciente.
    var paciente = {
      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      imc: calcImc(form.peso.value, form.altura.value)
    }
    return paciente;
  }

function montaTr(paciente){
  // Cria um novo elemento, transformando um JS em HTML(tr,td);
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

// Cria o elemento Tr na tabela e ao mesmo tempo chama a função para montar Td;
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;

}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add("classe");

  return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;

}
