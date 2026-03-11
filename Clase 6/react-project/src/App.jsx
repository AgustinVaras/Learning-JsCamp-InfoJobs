//Paginas
import { SearchPage } from "./pages/Search.jsx";
import { HomePage } from "./pages/Home.jsx";
import { Error404 } from "./pages/404.jsx";

//Componentes
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

//Hooks
import { useRouter } from "./hooks/useRouter.jsx";


function App() {

  const { currentPath } = useRouter();

  let page = <Error404 />;

  if (currentPath === '/') {
    page = <HomePage />
  } else if (currentPath === '/search') {
    page = <SearchPage />
  } 


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
