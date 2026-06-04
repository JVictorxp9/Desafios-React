import { useState } from 'react'

const TrocaTexto = () => {

  const [texto, setTexto] = useState('Sistema Online')

  return (
    <div>
      <h1>{texto}</h1>
      <button onClick={() => setTexto('Sistema Off')}>
        Trocar
      </button>
    </div>
  )
}

export default TrocaTexto