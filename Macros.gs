var url = "https://docs.google.com/spreadsheets/d/1DpuqAO9pYLu4Ku0Euu_Uc0x5cBF3aM2blhjV-TbPiXM/edit#gid=0"

function PesquisarDados(criteriopesquisa){

var planilha = SpreadsheetApp.openByUrl(url);
var guiadados = planilha.getSheetByName("Dados");

var dados = guiadados.getRange(2, 1, guiadados.getLastRow(),6).getValues();

for(var linha = 0; linha<dados.length; linha++){
          
     if(dados[linha][0] == criteriopesquisa || dados[linha][1] == criteriopesquisa){           
       
        var Carregar={};
        
        var data = Utilities.formatDate(dados[linha][4], Session.getScriptTimeZone(), "dd/MM/yyyy");
        var valor = dados[linha][5].toLocaleString("pt-BR");
        
        Carregar.ID = dados[linha][0]
        Carregar.CPF = dados[linha][1];
        Carregar.Nome = dados[linha][2];      
        Carregar.Genero = dados[linha][3];         
        Carregar.Nascimento = data;
        Carregar.Salario = valor;
    
         return ([Carregar.ID,Carregar.CPF, Carregar.Nome, Carregar.Genero, Carregar.Nascimento, Carregar.Salario])     
         
         
     }
     


}

return "Não encontrado!";


}


function ExcluirDados(criteriopesquisa){

var planilha = SpreadsheetApp.openByUrl(url);
var guiadados = planilha.getSheetByName("Dados");

var dados = guiadados.getRange(2, 1, guiadados.getLastRow()).getValues();

for(var linha = 0; linha<dados.length; linha++){
          
     if(dados[linha][0] == criteriopesquisa){           
       
           var linha = linha + 2;
           
           guiadados.deleteRow(linha);           
    
         return "Excluído!"    
         
         
     }

}

return "Não encontrado!";


}


function SalvarDados(Dados){

var planilha = SpreadsheetApp.openByUrl(url);
var guiadados = planilha.getSheetByName("Dados");

var novoid = Math.max.apply(null, guiadados.getRange("A2:A").getValues()); 
var novoid = novoid + 1


var linha = guiadados.getLastRow() + 1;

guiadados.getRange(linha, 1).setValue(novoid);
guiadados.getRange(linha, 2).setValue([Dados.CPF]);
guiadados.getRange(linha, 3).setValue([Dados.Nome]);
guiadados.getRange(linha, 4).setValue([Dados.Genero]);
guiadados.getRange(linha, 5).setValue([Dados.Nascimento]);
guiadados.getRange(linha, 6).setValue([Dados.Salario]);

guiadados.getRange(linha, 5).setNumberFormat('dd"/"mm"/"yyyy');

return "Salvo com sucesso!";



}



function EditarDados(Dados){

var planilha = SpreadsheetApp.openByUrl(url);
var guiadados = planilha.getSheetByName("Dados");

var criteriopesquisa = Dados.ID

var dados = guiadados.getRange(2, 1, guiadados.getLastRow()).getValues();

for(var linha = 0; linha<dados.length; linha++){
          
     if(dados[linha][0] == criteriopesquisa){   
     
      var linha = linha + 2;

      guiadados.getRange(linha, 2).setValue([Dados.CPF]);
      guiadados.getRange(linha, 3).setValue([Dados.Nome]);
      guiadados.getRange(linha, 4).setValue([Dados.Genero]);
      guiadados.getRange(linha, 5).setValue([Dados.Nascimento]);
      guiadados.getRange(linha, 6).setValue([Dados.Salario]);

       guiadados.getRange(linha, 5).setNumberFormat('dd"/"mm"/"yyyy');

          return "Editado com sucesso!";
    }
}

return "ID não encontrado!";

}




