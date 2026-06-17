import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cadastro from "./pages/Cadastro"
import Listagem from "./pages/Listagem"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/listagem" element={<Listagem />} />
      </Routes>
    </BrowserRouter>
  )
}