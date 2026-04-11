//Paginas
import { SearchPage } from "./pages/Search.jsx";
import { HomePage } from "./pages/Home.jsx";
import { Contact } from "./pages/Contact.jsx"
import { Detail } from "./pages/Detail.jsx";

//Componentes
import { Routes , Route } from 'react-router';
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";


function App() {

  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs/:id" element={<Detail />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App
