import { createContext, useEffect, useState } from "react"

export const FilmeContext = createContext()

export function FilmeProvider({ children }) {
  const [filmes, setFilmes] = useState(() => {
    const saved = localStorage.getItem("filmes")
    return saved ? JSON.parse(saved) : []
  })

  function adicionarFilme(filme) {
    setFilmes([...filmes, filme])
  }

  function removerFilme(index) {
    setFilmes(filmes.filter((_, i) => i !== index))
  }

  // 💾 salva sempre que mudar
  useEffect(() => {
    localStorage.setItem("filmes", JSON.stringify(filmes))
  }, [filmes])

  return (
    <FilmeContext.Provider value={{ filmes, adicionarFilme, removerFilme }}>
      {children}
    </FilmeContext.Provider>
  )
}