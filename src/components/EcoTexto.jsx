import { useState } from "react";

const EcoTexto = () => {

const [texto, setTexto] = useState('')

  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      {texto
        ? <p>Texto capturado em tempo real: <strong>{texto}</strong></p>
        : <p style={{ color: 'gray' }}>Digite alguma coisa...</p>}
    </div>
  )
}

export default EcoTexto