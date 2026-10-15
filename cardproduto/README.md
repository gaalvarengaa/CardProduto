# CardProduto — Exercício Módulo 19

Componente `CardProduto` em React com estilização feita 100% em CSS-in-JS usando **Styled Components**.

O card exibe nome, preço e um botão "Adicionar ao carrinho". A prop booleana `adicionado` altera a cor do botão:

- `adicionado={true}` → verde `#198754`
- `adicionado={false}` → cinza `#6c757d`

A prop é repassada ao styled-component como `$adicionado` (prop transitória), para não chegar ao DOM.

## Como rodar

```bash
npm install
npm run dev
```

## Estrutura

```
src/
├── components/
│   └── CardProduto.jsx   # Componente + estilos (Card, Nome, Preco, BotaoAdicionar)
├── App.jsx               # Dados estáticos e grade responsiva
└── main.jsx
```
