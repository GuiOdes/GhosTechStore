function selecionar(btn) {
    botoes = document.getElementsByClassName("cores");
    for (cont = 0; cont < botoes.length; cont++){
        botoes[cont].style.cssText = "border: none";
    }
    btn.style.cssText = "border-color: #fff";
}

function frete() {
    document.getElementById("result").style.cssText = "display: block";
}

function comprar() {
    document.getElementById("sucess").style.cssText = "display: block";
}

function logar(){
    nome = document.getElementById("inptusu").value;
    alert("Bem vindo ao clube, "+nome);
}

function cadastro() {
    document.getElementById("sucess").style.cssText = "display: block";
}