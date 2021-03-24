<script type = "text/javascript">


document.getElementById("btnpesquisar").addEventListener("click", Pesquisar);
 
  function Pesquisar(){
  
  
  var criteriopesquisa = document.getElementById("ID").value;
  
  if (criteriopesquisa.trim().length == 0){  
   alert("Precisa fornecer critério para pesquisa!");
   return false;
  };
  
 
  
  google.script.run.withSuccessHandler(Carregar).PesquisarDados(criteriopesquisa);
  
  function Carregar(retorno){  
   
  if (retorno != "Não encontrado!"){
  
  document.getElementById("ID").value = retorno[0]
  M.updateTextFields();
  document.getElementById("CPF").value = retorno[1]
  M.updateTextFields();
  document.getElementById("Nome").value = retorno[2]
  M.updateTextFields();
  document.getElementById("Genero").value = retorno[3]
  M.updateTextFields();
  document.getElementById("Nascimento").value = retorno[4]
  M.updateTextFields();
  document.getElementById("Salario").value = retorno[5]
  M.updateTextFields();
  
  }else{
  
  alert("Não encontrado!");
   Limpar();
   
  }
    
  }
  }
  
  document.getElementById("btnlimpar").addEventListener("click", Limpar);
 
  function Limpar(){
  
  document.getElementById("ID").value = "";
  document.getElementById("CPF").value = "";
  document.getElementById("Nome").value = "";
  document.getElementById("Genero").value = "";
  document.getElementById("Nascimento").value = "";
  document.getElementById("Salario").value = "";
    
  }
  
  
  document.getElementById("btnexcluir").addEventListener("click", Excluir);
 
  function Excluir(){
  
  
  var criteriopesquisa = document.getElementById("ID").value;
  
  if (criteriopesquisa.trim().length == 0){  
   alert("Precisa fornecer critério para pesquisa!");
   return false;
  };
   
  var r = confirm("Deseja Realmente Excluir este item?");

if (r==false){
alert("Operação Cancelada")
return false;
}

  google.script.run.withSuccessHandler(Carregar).ExcluirDados(criteriopesquisa);
  
  function Carregar(retorno){  
   
  if (retorno != "Não encontrado!"){
  
  Limpar();
  
  alert("Excluído com sucesso!");
  
  }else{
  
  alert(retorno);
  }
    
  }
  }
  
  document.getElementById("btnsalvar").addEventListener("click", Salvar);
   
   function Salvar(){
   
   var ID = document.getElementById("ID").value;
   var CPF = document.getElementById("CPF").value;
   var Nome = document.getElementById("Nome").value;
   var Genero = document.getElementById("Genero").value;
   var Nascimento[ = document.getElementById("Nascimento[").value;
   var Salario = document.getElementById("Salario").value;
   
   
   if (ID.trim().length != 0){   
   alert("ID precisa ser vazio porque é gerado automaticamente ao salvar!");
   return false;   
   }
   
   if (CPF.trim().length == 0 || Nome.trim().length == 0 || Genero.trim().length == 0 || 
   Nascimento[.trim().length == 0 || Salario.trim().length == 0){
   
   alert("Preencher todos os campos, exceto o ID");
       
   }else{
   
  var Dados ={
 

 CPF: CPF,
 Nome: Nome,
 Genero: Genero,
 Nascimento: Nascimento,
 Salario: Salario,
  
   
   };
   
   
 google.script.run.withSuccessHandler(Salvar).SalvarDados(Dados);
   
  function Salvar(retorno) {
  
  alert(retorno);

  Limpar();
  
     }
}
}
 


document.getElementById("btneditar").addEventListener("click", Editar);
   
   function Editar(){
   
   var ID = document.getElementById("ID").value;
   var CPF = document.getElementById("CPF").value;
   var Nome = document.getElementById("Nome").value;
   var Genero = document.getElementById("Genero").value;
   var Nascimento[ = document.getElementById("Nascimento[").value;
   var Salario = document.getElementById("Salario").value;
      
   
   if (ID.trim().length == 0 || CPF.trim().length == 0 || Nome.trim().length == 0 || Genero.trim().length == 0 || 
   Nascimento[.trim().length == 0 || Salario.trim().length == 0){
   
   alert("Preencher todos os campos");
       
   }else{
   
  var Dados ={
 
 ID: ID,
 CPF: CPF,
 Nome: Nome,
 Genero: Genero,
 Nascimento: Nascimento,
 Salario: Salario,
  
   
   };
   
   
 google.script.run.withSuccessHandler(Editar).EditarDados(Dados);
   
  function Editar(retorno) {
  
  alert(retorno);
  if(retorno != "ID não encontrado!" ){
  Limpar();
  }
     }
}
}
  
  
  
</script>






















