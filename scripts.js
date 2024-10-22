const formulario = document.getElementById("clientForm");
const errorMessage = document.getElementById("error-message");

formulario.addEventListener("submit", function (event) {
  if (!formulario.checkValidity()) {
    event.preventDefault(); // Impede o envio do formulário
    errorMessage.style.display = "block"; // Exibe a mensagem de erro
  } else {
    errorMessage.style.display = "none"; // Oculta a mensagem se estiver tudo OK
  }
});
