// Função para copiar a chave Pix
function copyPix() {
  const pixKey = document.getElementById("pixKey").innerText;
  navigator.clipboard.writeText(pixKey);
  alert("Chave Pix copiada!");
}

// Função para lidar com a seleção dos presentes
function selectGift(checkbox) {
  if (checkbox.checked) {
    alert("Você escolheu: " + checkbox.nextElementSibling.innerText + "!");
  }
}

// Função para enviar o formulário RSVP
const form = document.getElementById('rsvpForm');
const formMessage = document.getElementById('formMessage');
const submitButton = document.getElementById('rsvpSubmitButton');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  submitButton.disabled = true;
  submitButton.innerText = 'Enviando...';
  formMessage.style.color = '#B8860B';
  formMessage.innerText = 'Por favor, aguarde...';

  // URL do seu Google Apps Script (IMPORTE A URL QUE VOCÊ COPIOU AQUI)
  const url = 'COLE_AQUI_A_SUA_URL_DO_GOOGLE_APPS_SCRIPT';
  
  // Cria um objeto FormData para pegar os dados do formulário
  const formData = new FormData(form);

  fetch(url, {
    method: 'POST',
    body: formData,
  })
  .then(response => response.text())
  .then(data => {
    if (data === "Sucesso") {
      formMessage.style.color = 'green';
      formMessage.innerText = 'Sua confirmação foi enviada com sucesso! ✨';
      form.reset(); // Limpa o formulário após o envio
    } else {
      throw new Error('Erro no envio.');
    }
  })
  .catch(error => {
    console.error('Erro:', error);
    formMessage.style.color = 'red';
    formMessage.innerText = 'Ocorreu um erro. Tente novamente mais tarde.';
  })
  .finally(() => {
    submitButton.disabled = false;
    submitButton.innerText = 'Enviar Confirmação';
  });
});
