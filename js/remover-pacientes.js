var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){

  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function () {
    var alvoDoEvento = event.target;
    var paiDoAlvo = alvoDoEvento.parentNode;
    paiDoAlvo.remove();
  }, 500);

});

/*Esse script faz com que ao ocorrer um evento de Double Click em
um dos pacientes da tabela, o mesmo seja removido.

o event.target tranforma o local clicado em um alvo;
o parentNode faz com que esse alvo e o "pai" dele escutem o Double
Click e os removam.

a classe fadeOut cria uma pequena animação na remoção
do paciente, ele some bem devagar;

a função set.timeout faz com que o JS "espere" determinado
tempo para executar a remoção;

*/
