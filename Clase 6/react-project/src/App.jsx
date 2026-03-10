//React
import { useEffect, useState } from "react";

//Paginas
import { SearchPage } from "./pages/Search.jsx";
import { HomePage } from "./pages/Home.jsx";
import { Error404 } from "./pages/404.jsx";

//Componentes
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  const [ currentPath, setCurrentPath ] = useState(window.location.pathname);

  let page = <Error404 />;

  if (currentPath === '/') {
    page = <HomePage />
  } else if (currentPath === '/search') {
    page = <SearchPage />
  } 

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    }
  }, []);

  return (
    <>
        <Header />
        {/* <HomePage /> */}
        {page}
        <Footer />
    </>
  )
}

export default App
