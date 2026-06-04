const BotaoAlerta = () => {

  const handleClick = () => {
    alert('onClick funcionando')
  }

  return (
    <div>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  )
}

export default BotaoAlerta