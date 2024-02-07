import React from "react"
import "./App.css"
import { TempStorePage } from "./pages/TempStorePage"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import { AuthenticationPage } from "./pages/AuthenticationPage"
import { ResponsiveAppBar } from "./components/ResponsiveAppBar"

function App () {

  

  return (
    <BrowserRouter>
      <header>
        <nav>
          <ResponsiveAppBar />
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
