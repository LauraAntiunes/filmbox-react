import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Início</Link>
      <Link to="/cadastro">Cadastro</Link>
      <Link to="/listagem">Listagem</Link>
    </nav>
  )
}