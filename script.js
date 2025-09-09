// Ação para copiar a chave Pix
function copyPix() {
  const pixKey = document.getElementById("pixKey").innerText;
  navigator.clipboard.writeText(pixKey);
  alert("Chave Pix copiada!");
}

// Ação ao selecionar um item da lista de presentes
function selectGift(checkbox) {
  if (checkbox.checked) {
    alert("Você escolheu: " + checkbox.nextElementSibling.innerText + "!");
  }
}

// Lógica para enviar o formulário RSVP para a planilha do Google Sheets
const form = document.getElementById('rsvpForm');
const formMessage = document.getElementById('formMessage');
const submitButton = document.getElementById('rsvpSubmitButton');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  submitButton.disabled = true;
  submitButton.innerText = 'Enviando...';
  formMessage.style.color = '#B8860B';
  formMessage.innerText = 'Por favor, aguarde...';

  // URL do seu Google Apps Script (a que você copiou do passo de implantação)
  const url = 'https://script.google.com/macros/s/AKfycbyAsGCaHgAbQg5ZUqeHVeJ-iO11Ns6kCQZxR6Xq1srILkgWqNnBIGVhpxpECQRlzW0-/exec';
  
  // Cria um objeto FormData para pegar todos os dados do formulário
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
