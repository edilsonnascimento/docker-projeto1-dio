var titulo = document.querySelector(".container");
titulo.textContent = "Maria Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){   

   var trPaciente = pacientes[i];

   var tdPeso = trPaciente.querySelector('.info-peso');
   var peso = tdPeso.textContent;

   var tdAltura = trPaciente.querySelector('.info-altura'); 
   var altura = tdAltura.textContent;

   var tdImc = trPaciente.querySelector('.info-imc');

   var pesoEhValido = validaPeso(peso);   
   var alturaEhValida = validaAltura(altura);

   if(!pesoEhValido) {
      pesoEhValido = false;
      tdImc.textContent = 'peso inválido';
      trPaciente.classList.add("paciente-invalido");
   }
   
   if(!alturaEhValida) {
      alturaEhValida = false;
      tdImc.textContent = 'altura inválida';
      trPaciente.classList.add("paciente-invalido");
   }
   
   if(pesoEhValido && alturaEhValida) {
      tdImc.textContent = calculaImc(peso, altura);
   }         
}

function calculaImc(peso, altura){
   var imc = peso / ( altura * altura);
   return imc.toFixed(2);
}

function validaPeso(peso){
   return (peso >= 0 && peso < 1000);
}

function validaAltura(altura){
   return (altura > 0 && altura < 3.00);
}