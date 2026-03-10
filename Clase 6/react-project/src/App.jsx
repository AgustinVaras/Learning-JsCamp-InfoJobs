//React
import { useState } from "react";

//Paginas
import { SeachPage } from "./pages/Search.jsx";
import { HomePage } from "./pages/Home.jsx";

//Componentes
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

export function App() {
      
  return (
    <>
        <Header />
        <HomePage />
        <Footer />
    </>
  )
}

export default App
