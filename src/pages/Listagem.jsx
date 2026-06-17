import { useContext } from "react"
import { FilmeContext } from "../context/FilmeContext"

export default function Listagem() {
  const { filmes, removerFilme } = useContext(FilmeContext)

  function stars(nota) {
    const n = Math.round(Number(nota) / 2)
    return "⭐".repeat(n) + "☆".repeat(5 - n)
  }

  return (
    <div className="page">
      <h2>🔥 Em destaque</h2>

      {filmes.length === 0 ? (
        <p>Nenhum filme adicionado</p>
      ) : (
        <div className="card-list">
          {filmes.map((f, i) => (
            <div className="card" key={i}>
              <strong>{f.titulo}</strong>
              <p>{f.genero}</p>
              <p>{stars(f.nota)}</p>

              <button onClick={() => removerFilme(i)}>
                Remover
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}