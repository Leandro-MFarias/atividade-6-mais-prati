# 🛒 Atividade 6 - Mini Loja  

Aplicação desenvolvida em **React** que simula uma **loja de games** com funcionalidade de carrinho de compras.  
O projeto foi proposto como atividade prática para aplicar diferentes formas de estilização: **CSS Global, CSS Modules, TailwindCSS e styled-components**.  

---

## 🚀 Funcionalidades  

- **Navbar fixa**  
  - Exibe logo, toggle de tema (claro/escuro com persistência) e badge do carrinho.  

- **Grid de Produtos Responsivo**  
  - ≤480px: 1 coluna  
  - 481–768px: 2 colunas  
  - 769–1024px: 3 colunas  
  - ≥1025px: 4 colunas  

- **Card de Produto**  
  - Imagem quadrada com espaço reservado.  
  - Título (até 2 linhas com ellipsis).  
  - Preço formatado.  
  - Avaliação (estrelas ★).  
  - Tag (“Novo” ou “Promo”).  
  - Botão **Adicionar ao Carrinho** com variantes (solid / outline / ghost).  

- **Carrinho de Compras**  
  - Listagem dos produtos adicionados.  
  - Controles de aumentar/diminuir quantidade.  
  - Remover item do carrinho.  
  - Exibe total a pagar.  
  - **Scroll bloqueado** enquanto o carrinho está aberto.  

- **Interações e Estados**  
  - Hover com elevação/sombra.  
  - Focus visível para acessibilidade.  
  - Estados disabled e loading (skeleton simulando atraso).  
  - Dark mode aplicado a cores, sombras e bordas.  
  - Imagens com lazy loading.  

---

## 🛠️ Tecnologias Utilizadas  

- [React](https://reactjs.org/)  
- [Context API](https://react.dev/reference/react/useContext)  
- [TailwindCSS](https://tailwindcss.com/)  
- [styled-components](https://styled-components.com/)  
- CSS Global  
- CSS Modules  

---

## 📂 Estrutura Geral  

- `01-onlyCss/` → Versão usando **CSS global**.  
- `02-cssModules/` → Versão usando **CSS Modules**.  
- `03-tailwindcss/` → Versão usando **TailwindCSS**.  
- `04-styledComponents/` → Versão usando **styled-components**.  

Cada pasta contém:  
- `Navbar` → Cabeçalho fixo com tema e carrinho.  
- `ProductCard` → Card de produto com interações.  
- `Button` → Botão reutilizável com variantes.  
- `Skeleton` → Componente de loading.  

---

## ▶️ Como Rodar o Projeto  

### 1. Clone o repositório  
```bash
https://github.com/Leandro-MFarias/atividade-6-mais-prati.git
```

### 2. Entre na pasta do projeto
```bash
 cd atividade-6-mais-prati
```

### 3. Intalar dependências
```bash
  npm install
```