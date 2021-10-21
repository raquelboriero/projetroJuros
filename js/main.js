
function calcularJurosSimples() {
    var capital = (document.getElementById("fcapital")).value;
    var taxa = (document.getElementById("ftaxa")).value;
    var periodo = (document.getElementById("fperiodo")).value;
    var juros = capital * taxa * periodo;
    var vTotal = parseFloat(capital) + parseFloat(juros);
    var resultJSimples = document.getElementById("resultJSimples");
    resultJSimples.innerHTML = "O valor do juros será de R$" + juros + "! Ao final de " + periodo + " anos, você terá R$" + vTotal + ".";
  console.log(vTotal);

  //  validar os 3 campos 

}

function calcularJurosComposto() {
  var capital = (document.getElementById("fcapital")).value;
  var taxa = (document.getElementById("ftaxa")).value;
  var periodo = (document.getElementById("fperiodo")).value;
  var base = parseFloat(1 + taxa);
  var montanteAPagar = Math.pow(base, periodo);
  console.log(montanteAPagar);
 
  


  // var resultJComposto = document.getElementById("resultJComposto");
  // resultJComposto.innerHTML = "O valor do juros será de R$" + MontanteAPagar + "! Ao final de " + periodo + " anos, você terá R$" + vTotal + ".";


//  validar os 3 campos 

}
