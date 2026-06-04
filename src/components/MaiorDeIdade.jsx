const MaiorDeIdade = ({ idade }) => {
  return (
    <>
      <h3>Você tem {idade} anos</h3>
      {idade >= 18
        ? <p>✅  Acesso Permitido ao Sistema!</p>
        : <p>❌  Acesso Negado. </p>}
    </>
  )
}

export default MaiorDeIdade