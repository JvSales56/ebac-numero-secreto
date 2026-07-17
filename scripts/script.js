const obterElemento = (id) => document.getElementById(id);

let numeroSecreto = null;
let tentativas = 0;

function gerarNumero() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativas = 0;

  obterElemento("palpite").value = "";
  obterElemento("dicaResultado").textContent = "";
  obterElemento("tentativas").textContent = "";
}

function gerarChute() {
  return Math.floor(Math.random() * 100) + 1;
}

function chutarPalpite() {
  const elementoPalpite = obterElemento("palpite");
  elementoPalpite.value = gerarChute();
  
  testarPalpite();
}

function compararPalpite() {
  const palpite = Number(obterElemento("palpite").value);
  const elementoDicaResultado = obterElemento("dicaResultado");

  tentativas++;

  if (palpite === numeroSecreto) {
    elementoDicaResultado.textContent = `Parabéns! Você acertou o número secreto! Era ${numeroSecreto}.`;
    numeroSecreto = null;

    return;
  } else if (palpite < numeroSecreto) {
    elementoDicaResultado.textContent = `O número secreto é maior!`;
  } else if (palpite > numeroSecreto) {
    elementoDicaResultado.textContent = `O número secreto é menor!`;
  }
}

function testarTentativas() {
  const elementoTentativas = obterElemento("tentativas");

  if (tentativas >= 10) {
    elementoTentativas.textContent = `Você atingiu o limite de tentativas. O número secreto era ${numeroSecreto}.`;
    numeroSecreto = null;

    return;
  }

  elementoTentativas.textContent = `Tentativas: ${tentativas}/10`;
}

function checarNumeroSecreto() {
  if (numeroSecreto === null) {
    alert(
      "O número secreto ainda não foi gerado. Por favor, clique em 'Começar Jogo' para gerar um número secreto.",
    );
    return false;
  }

  return true;
}

function testarPalpite() {
  if (!checarNumeroSecreto()) {
    return;
  }

  compararPalpite();

  if(numeroSecreto !== null){
    testarTentativas();
  }
}
