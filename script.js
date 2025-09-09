/* ===== PALETA DE CORES E FONTES ===== */
:root {
  --font-heading: 'Playfair Display', serif; /* Títulos principais e nomes */
  --font-subheading: 'Lora', serif; /* Subtítulos e destaques */
  --font-body: 'Montserrat', sans-serif; /* Corpo do texto e formulários */

  --color-primary-dark: #6D4C41; /* Marrom escuro aconchegante */
  --color-primary-light: #A1887F; /* Marrom claro/rosado */
  --color-accent-gold: #D4AF37; /* Dourado suave para detalhes */
  --color-text-dark: #333333;
  --color-text-light: #555555;
  --color-background-light: #FBF9F7; /* Creme muito claro */
  --color-background-medium: #EDEAE7; /* Bege acinzentado */
  --color-border: #E0DCD8; /* Borda suave */
}

/* ===== ESTILO GERAL E FUNDO ===== */
body {
  margin: 0;
  padding: 0;
  font-family: var(--font-body);
  background-color: var(--color-background-light);
  color: var(--color-text-dark);
  text-align: center;
  line-height: 1.8; /* Aumentei o espaçamento da linha para melhor leitura */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden; /* Evita scroll horizontal */
}

/* Padrão de fundo sutil para o body */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml,%3Csvg width="6" height="6" viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23e8e1d7" fill-opacity="0.2" fill-rule="evenodd"%3E%3Cpath d="M5 0h1L0 6V5zm1 6V5H5z"/%3E%3C/g%3E%3C/svg%3E');
  z-index: -1;
  opacity: 0.7; /* Tornar o padrão mais sutil */
}

/* Container principal */
.container {
  max-width: 800px; /* Mais largo para um visual mais grandioso */
  margin: 0 auto;
  padding: 60px 30px; /* Mais padding */
  flex-grow: 1;
}

/* ===== SEÇÃO HERO (TOPO DA PÁGINA) ===== */
.hero-section {
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1517702157774-c36a83607063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80') center center / cover no-repeat;
  color: white;
  padding: 120px 20px; /* Mais altura */
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  margin-bottom: 60px;
  position: relative;
  overflow: hidden; /* Para garantir que o gradiente e a imagem fiquem bem */
}

.hero-content {
  position: relative;
  z-index: 1; /* Garante que o texto fique acima do overlay */
}

.hero-section .subtitle {
  font-family: var(--font-body);
  font-size: 1.2em;
  letter-spacing: 5px;
  font-weight: 300;
  margin-bottom: 15px;
  color: rgba(255,255,255,0.8);
}

.hero-section .title {
  font-family: var(--font-heading);
  font-size: 6em; /* Título maior */
  margin: 0;
  line-height: 1;
  color: white;
  text-shadow: 2px 2px 8px rgba(0
