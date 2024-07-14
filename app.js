let numeroAleatorio = GerarNumeroAleatorio();
let tentativas = 1 ;
let listaCodigos = ["java", "python"];
console.log(listaCodigos[1]);

function exibirTextoNaTela(tag, texto){
    let tudo = document.querySelector(tag);
    tudo.innerHTML = texto;

}

function textoInicial(){
  exibirTextoNaTela("h1", "Jogo do Numero Secreto do Brayan")
  exibirTextoNaTela("p", "Escolha um numero entre 1 e 100")

}
textoInicial();

function GerarNumeroAleatorio(){
  return (parseInt(Math.random() * 100 ) + 1);
  
}

console.log(numeroAleatorio)


function verificarChute(){
    let chute = document.querySelector("input").value;
    if (chute == numeroAleatorio) {
      exibirTextoNaTela("h1", "voce acertou!");
      let palavra_tentativas = (tentativas > 1 ? " tentativas" : " tentativa")
      exibirTextoNaTela("p", "o numero secreto com " + tentativas + palavra_tentativas) ;
      document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        if ( chute > numeroAleatorio) {
          exibirTextoNaTela("p", "O numero secreto e menor");
          
         } else {
            if  (chute < numeroAleatorio) {
            exibirTextoNaTela("p", "o numero secreto e maior");
            }
          } tentativas = tentativas + 1 ; 
            limpaCampo();
      }
}

function limpaCampo(){
    chute =  document.querySelector("input");
    chute.value = "";

}

function ReiniciarJG() {
    tentativas = 1;
    textoInicial();
    numeroAleatorio = GerarNumeroAleatorio();
    document.getElementById("reiniciar").setAttribute("disabled", true);
    console.log(numeroAleatorio)
    limpaCampo()

}
    

