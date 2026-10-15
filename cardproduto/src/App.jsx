import styled from 'styled-components'
import CardProduto from './components/CardProduto.jsx'

const produtos = [
  { id: 1, nome: 'Tênis Esportivo', preco: 259.9, adicionado: true },
  { id: 2, nome: 'Mochila Urbana', preco: 189.5, adicionado: false },
  { id: 3, nome: 'Fone Bluetooth', preco: 349.0, adicionado: false },
  { id: 4, nome: 'Relógio Digital', preco: 129.9, adicionado: true },
]

const Pagina = styled.main`
  min-height: 100vh;
  box-sizing: border-box;
  padding: 32px 16px;
  background: #f5f6f8;
`

const Titulo = styled.h1`
  margin: 0 0 24px;
  text-align: center;
  font-family: system-ui, sans-serif;
  color: #212529;
`

const Grade = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  justify-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

function App() {
  return (
    <Pagina>
      <Titulo>Loja</Titulo>
      <Grade>
        {produtos.map((produto) => (
          <CardProduto
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            adicionado={produto.adicionado}
          />
        ))}
      </Grade>
    </Pagina>
  )
}

export default App
