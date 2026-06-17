import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { FilmeProvider } from "./context/FilmeContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <FilmeProvider>
    <App />
  </FilmeProvider>
)