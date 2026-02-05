const form = document.getElementById("loginForm");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  // Credenciais simuladas
  const emailCorreto = "aluno@studyhub.com";
  const senhaCorreta = "123456";

  if (email === "" || senha === "") {
    mostrarFeedback("⚠️ Preencha todos os campos.", "red");
    return;
  }

  if (!email.includes("@")) {
    mostrarFeedback("❌ Email inválido.", "red");
    return;
  }

  if (senha.length < 6) {
    mostrarFeedback("🔑 A senha deve ter pelo menos 6 caracteres.", "red");
    return;
  }

  if (email === emailCorreto && senha === senhaCorreta) {
    mostrarFeedback("🎉 Login realizado com sucesso!", "green");
  } else {
    mostrarFeedback("❌ Email ou senha incorretos.", "red");
  }
});

function mostrarFeedback(mensagem, cor) {
  feedback.textContent = mensagem;
  feedback.style.color = cor;
}
