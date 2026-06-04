import { useState, useEffect } from 'react'

const DataAgora = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    const id = setTimeout(() => {
      setData(new Date().toLocaleString())
    }, 0)

    return () => clearTimeout(id)
  }, [])

  return (
    <p>Acessado no dia e hora: {data}</p>
  )
}

export default DataAgora