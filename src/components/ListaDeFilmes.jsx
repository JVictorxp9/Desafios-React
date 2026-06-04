import axios from 'axios'
import { useEffect, useState } from 'react'

const ListaDeFilmes = () => {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/filmes")
        .then((response) => {
            setFilmes(response.data)
        })
        .catch ((erro) => {
            console.error("não foi encontrado o filme", erro)
        });
    }, []);

  return (
    <ul>
      {filmes.map((filme) => (
        <li key={filme.id}>{filme.titulo} ({filme.ano}) </li>
      ))}
    </ul>
  )
}

export default ListaDeFilmes