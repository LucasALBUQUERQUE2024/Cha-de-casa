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

// Lógica para enviar o formulário para a planilha do Google Sheets
document.getElementById('rsvpForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  const form = document.getElementById('rsvpForm');
  const formData = new FormData(form);
  
  // URL do seu Google Apps Script. VOCÊ PRECISA DESTA URL.
  const appScriptUrl = 'COLE_A_SUA_URL_DO_APPS_SCRIPT_AQUI'; 

  const formMessage = document.getElementById('formMessage');
  const submitButton = document.getElementById('rsvpSubmitButton');

  submitButton.disabled = true;
  formMessage.innerText = 'Enviando sua confirmação...';
  formMessage.style.color = '#6D4C41';

  fetch(appScriptUrl, {
    method: 'POST',
    body: formData,
  })
  .then(response => {
    if (response.ok) {
      formMessage.innerText = 'Confirmação enviada com sucesso! 💚';
      formMessage.style.color = '#5a7d75';
      form.reset();
    } else {
      formMessage.innerText = 'Ocorreu um erro. Tente novamente mais tarde.';
      formMessage.style.color = '#D4AF37';
      console.error('Erro na resposta do servidor:', response.status);
    }
  })
  .catch(error => {
    formMessage.innerText = 'Ocorreu um erro. Verifique sua conexão.';
    formMessage.style.color = '#D4AF37';
    console.error('Erro de conexão:', error);
  })
  .finally(() => {
    submitButton.disabled = false;
  });
});
