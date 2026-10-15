import styled from 'styled-components'

const CORES = {
  verde: '#198754',
  cinza: '#6c757d',
}

/* ---------- Estilos ---------- */

const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 280px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  font-family: system-ui, sans-serif;
`

const Nome = styled.h2`
  margin: 0;
  font-size: 1.1rem;
  color: #212529;
`

const Preco = styled.p`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 700;
  color: #0d6efd;
`

const BotaoAdicionar = styled.button`
  margin-top: auto;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${({ $adicionado }) =>
    $adicionado ? CORES.verde : CORES.cinza};
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover {
    filter: brightness(0.92);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 3px solid rgba(13, 110, 253, 0.5);
    outline-offset: 2px;
  }
`

/* ---------- Componente ---------- */

function CardProduto({ nome, preco, adicionado }) {
  const precoFormatado = preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <Card>
      <Nome>{nome}</Nome>
      <Preco>{precoFormatado}</Preco>
      <BotaoAdicionar type="button" $adicionado={adicionado}>
        Adicionar ao carrinho
      </BotaoAdicionar>
    </Card>
  )
}

export default CardProduto
