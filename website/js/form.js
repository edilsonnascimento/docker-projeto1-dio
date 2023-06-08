var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){

   event.preventDefault();   
   
   var form = document.querySelector("#form-adiciona");   

   var paciente = obtemPacienteDoFormulario(form);
   
   var erros = validaPaciente(paciente);

   if(erros.length > 0){
       exibeMensagensDeErro(erros);
       return;
   }

   adicionarPacienteNaTabela(paciente);

   form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function adicionarPacienteNaTabela(paciente){
   var pacienteTr = montarTr(paciente);
   var tabela = document.querySelector("#tabela-pacientes");
   tabela.appendChild(pacienteTr);

};

function obtemPacienteDoFormulario(form){

    return paciente = {
                nome: form.nome.value,
                peso: form.peso.value,
                altura: form.altura.value,
                gordura: form.gordura.value,
                imc: calculaImc(form.peso.value, form.altura.value)
            }
}

function montarTd(dado, classe){
    var td = document.createElement("td");

    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function montarTr(paciente){

    var pacienteTr = document.createElement("tr");

    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));   
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));
 
    return pacienteTr;
     
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("o NOME não pode ser em branco!!!");
    }

    if(paciente.gordura.length == 0){
        erros.push("o GORDURA não pode ser em branco!!!");
    }

    if(paciente.peso.length == 0){
        erros.push("o PESO não pode ser em branco!!!");
    }

    if(paciente.altura.length == 0){
        erros.push("a ALTURA não pode ser em branco!!!");
    }

    if(! validaPeso(paciente.peso)){
        erros.push("PESO invalido!!!");
    }

    if(! validaAltura(paciente.altura)){
        erros.push("ALTURA invalida!!!");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}