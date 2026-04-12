import { lazy , Suspense } from "react";

//Paginas
const HomePage = lazy(() => import('./pages/Home.jsx'));
const SearchPage = lazy(() => import('./pages/Search.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Detail = lazy(() => import('./pages/Detail.jsx'));

//Componentes
import { Routes , Route } from 'react-router';
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Spinner } from "./components/Spinner.jsx";



function App() {

  return (
    <>
        <Header />
        <Suspense fallback={
            <div className="loading-container">
                <Spinner />
                <p>Cargando...</p>
            </div>
        }>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/jobs/:id" element={<Detail />} />
            </Routes>
        </Suspense>
        <Footer />
    </>
  )
}

export default App
