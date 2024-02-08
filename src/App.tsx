import React from "react"
import "./App.css"
import { TempStorePage } from "./pages/TempStorePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
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

        <div style={{background: "#eff3ff", height: "100vh", display: "flow-root"}}>
          <Routes>
            <Route path="/" element={<TempStorePage />} />
            <Route path="/auth" element={<AuthenticationPage />} />
          </Routes>
        </div>

      </main>
    </BrowserRouter>
  )
}

export default App
