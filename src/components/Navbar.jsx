import { Link } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <nav>
      <button
        className="menu-btn"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        ☰
      </button>

      <div className={menuAberto ? "nav-links aberto" : "nav-links"}>
        <Link to="/">Início</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/listagem">Listagem</Link>
      </div>
    </nav>
  )
}