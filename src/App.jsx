import MeuPerfil from './components/MeuPerfil'
import BotaoAlerta from './components/BotaoAlerta'
import TrocaTexto from './components/TrocaTexto'
import LogoUniesp from './components/LogoUniesp'
import Filme from './components/Filme'
import MaiorDeIdade from './components/MaiorDeIdade'
import CartaoDestaque from './components/CartaoDestaque'
import EcoTexto from './components/EcoTexto'
import DataAgora from './components/DataAgora'

const App = () => {

  const meusFilmes = [
    { id: 1, titulo: 'Matrix', ano: 1999 },
    { id: 2, titulo: 'O Senhor dos Anéis', ano: 2001 },
    { id: 3, titulo: 'Interestelar', ano: 2014 }
  ]

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Meus Mini-Desafios - Carlos</h1>
      <hr />
      <MeuPerfil />
      <hr />
      <BotaoAlerta />
      <hr />
      <TrocaTexto />
      <hr />
      <LogoUniesp />
      <hr />
      
      <div>
        <h3>Desafio Lista de Filmes:</h3>
        <ul>
          {meusFilmes.map(filme => (
            <Filme key={filme.id} titulo={filme.titulo} ano={filme.ano} />
          ))}
        </ul>
      </div>
      <hr />

      <MaiorDeIdade idade={17} />
      <hr />
      <CartaoDestaque />
      <hr />
      <EcoTexto />
      <hr />
      <DataAgora />
    </div>
  )
}

export default App