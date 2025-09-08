function selectGift(item) {
  if (item.checked) {
    alert("Você escolheu: " + item.nextElementSibling.innerText);
  }
}

function copyPix() {
  const pixKey = document.getElementById("pixKey").innerText;
  navigator.clipboard.writeText(pixKey);
  alert("Chave Pix copiada!");
}
