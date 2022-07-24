var erros = [];
var numSorteado = Math.floor(Math.random()*100)+1;
const chances = 6;
var totalchances;
function apostar(){
    var Innum = document.getElementById("num");
    var num = Number(Innum.value);
    var respChances = document.getElementById("chances");
    var respErros = document.getElementById("erros");
    var dica = document.getElementById("dica");
    
    if (num<=0 || num>100 || isNaN(num)){
        alert("Digite um valor válido que seja acima de 0 e menor que 100!")
        Innum.value = "";
        Innum.focus();
        return;
    }
    if (num == numSorteado){
        alert("Parabéns!! Você acertou o Número!")
        dica.textContent = "Muito bem! , o valor sorteado foi " + numSorteado;
        aposta.disabled = true;
        jogarDenovo.className = "exibe";
    }
    if (erros.indexOf(num) >=0 ){
        alert("Valor já digitado!")
        Innum.value = "";
        Innum.focus();
    }else{
        erros.push(num);
    }
   
    for (var i = 1; i<=erros.length;i++){
        var numChances = i;
        totalchances = chances - numChances;
        respChances.textContent = chances - numChances;
        respErros.textContent = erros.length + "("+ erros.join(",")+")";
    }
    if (totalchances == 0){
        alert("Chances acabaram!!")
        dica.textContent = "Você não acertou o número, o valor sorteado foi " + numSorteado + ".";
        aposta.disabled = true;
        jogarDenovo.className = "exibe";
        aposta.style = " height: 40%; font-family: 'Times New Roman', Times, serif; font-size: 25px;border-style:hidden;border-color: gray;color: rgb(170, 169, 169);"
    
    }else{
        var respDica = num < numSorteado? "maior" : "menor";
        dica.textContent = "Digite um valor " + respDica + " que " + num;
    }
    Innum.value = "";
    Innum.focus();
}
var aposta = document.getElementById("aposta");
aposta.addEventListener("click", apostar);

function jogarNovamente(){
    location.reload();
}
var jogarDenovo = document.getElementById("jogarDenovo");
jogarDenovo.addEventListener("click", jogarNovamente);
