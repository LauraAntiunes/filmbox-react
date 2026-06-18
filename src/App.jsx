import { HashRouter, Routes, Route } from "react-router-dom"
import "./App.css"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cadastro from "./pages/Cadastro"
import Listagem from "./pages/Listagem"

export default function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/listagem" element={<Listagem />} />
      </Routes>
    </HashRouter>
  )
}