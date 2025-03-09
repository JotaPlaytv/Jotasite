document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".form-box").classList.add("show");
});
// Armazenar as respostas
let respostas = {
  pergunta1: '',
  pergunta2: '',
  pergunta3: ''
};

// Função para abrir o modal
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

// Função para fechar o modal
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// Função para registrar as respostas
function responder(pergunta, resposta) {
  respostas[pergunta] = resposta;
  
  // Verificar se todas as perguntas foram respondidas
  if (respostas.pergunta1 && respostas.pergunta2 && respostas.pergunta3) {
    // Mostrar o botão para abrir o WhatsApp
    document.getElementById('btnWhatsApp').style.display = 'inline-block';
  }
}

// Função para abrir o WhatsApp com a mensagem formatada
function abrirWhatsApp() {
  const mensagem = `Suporte Técnico:
  
  Pergunta 1: ${respostas.pergunta1}
  Pergunta 2: ${respostas.pergunta2}
  Pergunta 3: ${respostas.pergunta3}
  
  Preciso de ajuda!`;
  
  const telefone = 'seu_numero_aqui';  // Coloque o número do WhatsApp aqui
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
  
  window.open(url, '_blank');
}