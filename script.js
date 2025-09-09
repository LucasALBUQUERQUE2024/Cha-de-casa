/* ===== PALETA DE CORES E FONTES ===== */
:root {
  --font-heading: 'Playfair Display', serif; /* Fonte elegante para títulos */
  --font-body: 'Poppins', sans-serif; /* Fonte limpa e legível para o corpo do texto */
  --color-primary: #5a7d75; /* Verde-acinzentado escuro */
  --color-secondary: #f4e8d9; /* Bege suave */
  --color-text-dark: #333;
  --color-text-light: #666;
  --color-background: #fdfaf5; /* Off-white quase branco */
  --color-accent: #926f5b; /* Um tom de cobre/terracota */
}

/* ===== ESTILO GERAL E FUNDO ===== */
body {
  margin: 0;
  padding: 0;
  font-family: var(--font-body);
  background: var(--color-background);
  color: var(--color-text-dark);
  text-align: center;
  line-height: 1.7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Container */
.container {
  max-width: 750px; /* Um pouco mais largo */
  margin: 0 auto;
  padding: 50px 25px;
  position: relative;
  flex-grow: 1;
}

/* Adicionando um padrão de fundo sutil */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml,%3Csvg width="6" height="6" viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23e8e1d7" fill-opacity="0.5" fill-rule="evenodd"%3E%3Cpath d="M5 0h1L0 6V5zm1 6V5H5z"/%3E%3C/g%3E%3C/svg%3E');
  z-index: -1;
}

/* ===== TÍTULOS E TEXTOS DE INTRODUÇÃO ===== */
header {
  margin-bottom: 40px;
}

.title {
  font-family: var(--font-heading);
  font-size: 5em;
  margin: 0.1em 0 0.1em;
  color: var(--color-primary);
  line-height: 1;
}

.subtitle {
  font-family: var(--font-body);
  font-size: 1.4em;
  letter-spacing: 4px;
  font-weight: 300;
  color: var(--color-text-light);
  text-transform: uppercase;
}

.intro-box {
  background-color: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  margin-bottom: 30px;
}

.intro {
  margin: 10px 0;
  font-size: 1.15em;
  color: var(--color-text-dark);
}

.highlight {
  font-weight: 500;
  color: var(--color-primary);
}

/* ===== CARTÃO DA DATA E LOCALIZAÇÃO ===== */
.date-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  margin: 40px auto;
  display: inline-block;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
}

.date-card .day {
  font-size: 1.1em;
  font-weight: 500;
  color: var(--color-primary);
  display: block;
}

.date-card .number {
  font-family: var(--font-heading);
  font-size: 4.5em;
  font-weight: 700;
  color: var(--color-text-dark);
  line-height: 1;
}

.date-card .month {
  font-size: 1.6em;
  display: block;
  color: var(--color-text-light);
  font-weight: 400;
}

.date-card .hour {
  font-size: 1.2em;
  color: var(--color-text-light);
  margin-top: 15px;
  font-weight: 500;
}

.location {
  margin-bottom: 40px;
  font-size: 1.1em;
  color: var(--color-text-light);
}

.location a {
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 600;
}

/* ===== SEÇÕES DO SITE (LISTA, RSVP, PIX) ===== */
section {
  background: white;
  padding: 30px;
  border-radius: 12px;
  margin-top: 35px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.07);
}

section h3 {
  margin-top: 0;
  text-align: center;
  color: var(--color-primary);
  font-size: 1.8em;
  margin-bottom: 25px;
  font-family: var(--font-heading);
}

.gift-item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
}

.gift-item {
  margin: 10px 0;
  font-size: 1.05em;
  color: var(--color-text-dark);
}

.gift-item input[type="checkbox"] {
  transform: scale(1.1);
  margin-right: 8px;
  accent-color: var(--color-primary);
}

/* ===== FORMULÁRIO E BOTÕES ===== */
.rsvp form {
  text-align: left;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 1em;
  color: var(--color-text-dark);
  margin-bottom: 8px;
  font-weight: 500;
}

.form-group input, .form-group select, .form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: var(--font-body);
  font-size: 1em;
  box-sizing: border-box;
}

.form-group input:focus, .form-group select:focus, .form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 5px rgba(90, 125, 117, 0.5);
}


/* ===== PIX ===== */
.pix {
  background: var(--color-secondary);
  margin-top: 30px;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.07);
}

.pix h3 {
  color: var(--color-primary);
  font-family: var(--font-heading);
}

.pix code {
  font-size: 1.2em;
  background: white;
  padding: 8px 15px;
  border-radius: 8px;
  display: inline-block;
  font-weight: 500;
  color: var(--color-primary);
  margin-bottom: 15px;
}

button {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 12px 22px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 15px;
  font-size: 1em;
  transition: background 0.3s ease;
  box-shadow: 0 3px 8px rgba(0,0,0,0.2);
}

button:hover {
  background: #4a6660;
}

/* ===== RODAPÉ ===== */
footer {
  margin-top: 50px;
  padding: 20px;
  font-size: 0.9em;
  color: var(--color-text-light);
  background: var(--color-secondary);
  width: 100%;
}

/* ===== RESPONSIVIDADE ===== */
@media (max-width: 600px) {
  .container {
    padding: 30px 20px;
  }
  .title {
    font-size: 3.5em;
  }
  .subtitle {
    font-size: 1.1em;
    letter-spacing: 2px;
  }
  .date-card .number {
    font-size: 3.5em;
  }
  .date-card .month {
    font-size: 1.3em;
  }
  section h3 {
    font-size: 1.6em;
  }
  .pix code {
    font-size: 1em;
  }
}
