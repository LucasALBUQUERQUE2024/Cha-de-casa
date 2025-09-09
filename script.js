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

// O Netlify Forms processa o formulário automaticamente com o atributo data-netlify="true" no HTML.
// Não é necessário um JavaScript adicional para o envio.
// A mensagem de sucesso padrão do Netlify será exibida após o envio.
