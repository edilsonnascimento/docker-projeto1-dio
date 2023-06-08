var campoFiltro = document.querySelector("#filtrar-tabela");
var pacientes = document.querySelectorAll(".paciente");

campoFiltro.addEventListener("input", function(){    
    var expressao = new RegExp(campoFiltro.value, "i");     

    if(campoFiltro.value.length > 0){
        pacientes.forEach(function(paciente){
            var nome = tdNome = paciente.querySelector(".info-nome").textContent;                        
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        });
    }else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel");
        });
    }

});