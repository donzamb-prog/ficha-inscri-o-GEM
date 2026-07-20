# ⚜️ Ficha de Inscrição Escoteira - PWA

Sistema web responsivo e **Progressive Web App (PWA)** desenvolvido para a coleta, preenchimento e geração de Fichas de Inscrição e Fichas Médicas de associados do **Grupo Escoteiro Memorial 350 SP**.

---

## 🚀 Funcionalidades

- **📱 Funcionalidade Offline & PWA:** Pode ser instalado como aplicativo nativo no celular ou computador e utilizado sem acesso à internet.
- **📄 Geração de PDF e Impressão:** Converte os dados preenchidos em PDF formatado com suporte a download direto e compartilhamento nativo no celular.
- **👁️ Ocultação Inteligente (Maiores de 19 anos):** Se o associado for maior de idade e não possuir dados de responsáveis preenchidos, a seção de responsáveis é ocultada automaticamente no formulário e no PDF final.
- **💾 Salvamento Automático (Autosave):** Os dados digitados não são perdidos em caso de recarga acidental da página (armazenados localmente no navegador).
- **✍️ Assinatura Digital em Canvas:** Coleta de assinatura manuscrita integrada diretamente na ficha.
- **🔍 Busca Automática de CEP:** Preenchimento automático do endereço via API ViaCEP.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 / CSS3 / JavaScript (Vanilla):** Interface leve, rápida e adaptável para celulares e computadores.
- **[html2pdf.js](https://html2pdf.js.org/):** Biblioteca para conversão da interface HTML para arquivo PDF.
- **Service Worker & Manifest.json:** Infraestrutura PWA para funcionamento offline e instalação no dispositivo.
- **API ViaCEP:** Consulta automatizada de dados de logradouro por CEP.

---

## 📱 Como Instalar como Aplicativo (PWA)

1. Acesse o link do projeto publicado no **GitHub Pages** através do navegador do seu smartphone (Chrome, Safari ou Edge).
2. Toque no aviso **"Adicionar à tela inicial"** ou no menu de opções do navegador e selecione **"Instalar aplicativo"**.
3. O ícone da ficha estará disponível na tela inicial do seu aparelho para uso rápido, mesmo offline.

---

## ⚖️ Licença e Termos de Uso

Este projeto é de **uso exclusivo e restrito do Grupo Escoteiro Memorial 350 SP** para fins institucionais e operacionais. É estritamente proibida qualquer exploração comercial, venda ou redistribuição deste código para terceiros.

Para mais detalhes, consulte o arquivo [LICENSE](./LICENSE).
