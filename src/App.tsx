import React from "react"
import "./App.css"
import { TempStorePage } from "./pages/TempStorePage"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import { AuthenticationPage } from "./pages/AuthenticationPage"

function App () {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Pokedex</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to='/auth'>Sign-in</NavLink>
        </nav>
      </header>
      <main>

        <Routes>
          <Route path="/" element={<TempStorePage />} />
          <Route path="/auth" element={<AuthenticationPage />} />
        </Routes>

      </main>
    </BrowserRouter>
  )
}

export default App
