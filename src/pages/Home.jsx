import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <div className="hero-content">
        <h1>Filmbox</h1>
        <p>Filmes, notas e gêneros em um só lugar</p>

        <button onClick={() => navigate("/cadastro")}>
          Começar
        </button>
      </div>
    </div>
  )
}