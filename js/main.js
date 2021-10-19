
function calcularJurosSimples() {
    var capital = (document.getElementById("fcapital")).value;
    var taxa = (document.getElementById("ftaxa")).value;
    var periodo = (document.getElementById("fperiodo")).value;
    var juros = capital * taxa * periodo;

    console.log(juros);
  //  console.log(capital, taxa, periodo);
 

}
