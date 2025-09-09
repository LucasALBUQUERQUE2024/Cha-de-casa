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
