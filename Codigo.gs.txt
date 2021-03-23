function ExibirFormulario(){
   
var Form = HtmlService.createTemplateFromFile("Formulario");
  
var MostrarForm = Form.evaluate();
  
MostrarForm.setTitle("FORMULÁRIO").setHeight(265).setWidth(650);
  
SpreadsheetApp.getUi().showModalDialog(MostrarForm, "FORMULÁRIO");

  
}


function Chamar(Arquivo){

  return HtmlService.createHtmlOutputFromFile(Arquivo).getContent();

}


