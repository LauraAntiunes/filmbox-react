import { useState, useContext } from "react"
import { FilmeContext } from "../context/FilmeContext"

export default function Cadastro() {
  const { adicionarFilme } = useContext(FilmeContext)

  const [titulo, setTitulo] = useState("")
  const [nota, setNota] = useState("")
  const [genero, setGenero] = useState("")
  const [erro, setErro] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (!titulo || !nota || !genero) {
      setErro("Todos os campos são obrigatórios")
      return
    }

    adicionarFilme({ titulo, nota, genero })

    setTitulo("")
    setNota("")
    setGenero("")
    setErro("")
  }

  return (
    <div className="cadastro-container">
      <form className="cadastro-box" onSubmit={handleSubmit}>
        <h2>Cadastrar Filme</h2>

        <input
          placeholder="Nome do filme"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <select value={genero} onChange={(e) => setGenero(e.target.value)}>
          <option value="">Gênero</option>
          <option value="Ação">Ação</option>
          <option value="Comédia">Comédia</option>
          <option value="Drama">Drama</option>
          <option value="Terror">Terror</option>
        </select>

        <select value={nota} onChange={(e) => setNota(e.target.value)}>
          <option value="">Nota (1 a 5)</option>
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>

        <button type="submit">Salvar</button>

        {erro && <p className="error">{erro}</p>}
      </form>
    </div>
  )
}