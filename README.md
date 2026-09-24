# ⚜️ Ficha de Inscrição Digital — Grupo Escoteiro Memorial 350 SP

Aplicação web responsiva para preenchimento, validação e geração de **Ficha de Inscrição e Ficha Médica** do Grupo Escoteiro Memorial 350 SP. O formulário gera um arquivo PDF formatado e pronto para impressão ou compartilhamento direto via WhatsApp e outros aplicativos.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

---

## 🚀 Funcionalidades

- **Navegação por Abas:** Organização em 3 seções principais (*Informações Básicas*, *Responsáveis* e *Ficha Médica*).
- **Validação Sequencial:** Garante que os campos obrigatórios em destaque (padrão Paxtu/UEB) sejam preenchidos antes de avançar para a próxima etapa.
- **Autopreenchimento por CEP:** Integração com a API ViaCEP para busca automática de logradouro, bairro, cidade e UF.
- **Cópia de Endereço:** Botão de atalho para replicar o endereço do associado nos dados do responsável.
- **Assinatura Digital Nascida na Tela:** Quadro interativo (Canvas) para desenho de assinatura via mouse ou toque na tela (touchscreen).
- **Persistência de Dados (Auto-Save):** Armazenamento local temporário (`localStorage`) para evitar perda de dados em caso de atualização da página.
- **Geração e Compartilhamento de PDF:**
  - Estilização exclusiva para PDF (formato de ficha oficial impressa com linhas limpas, sem botões ou alertas de tela).
  - Suporte à Web Share API para envio do PDF diretamente por aplicativos no smartphone (WhatsApp, E-mail, Telegram).
  - Impressão/Download direto pelo navegador.

---

## 🛠️ Tecnologias Utilizadas

- **Front-end:** HTML5, CSS3 (CSS Variables, Flexbox, CSS Grid) e JavaScript Vanilla (ES6+).
- **Geração de PDF:** [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) (wrapper para `html2canvas` e `jsPDF`).
- **Web API:** API [ViaCEP](https://viacep.com.br/) para busca de endereços.
- **Hospedagem:** GitHub Pages.

---

## 📂 Estrutura do Repositório

```text
.
├── index.html          # Código-fonte principal (HTML, CSS e JavaScript integrados)
├── logo_gem.png        # Emblema oficial do Grupo Escoteiro Memorial 350 SP
├── logo_ueb.png        # Logo oficial da União dos Escoteiros do Brasil
└── README.md           # Documentação do projeto
