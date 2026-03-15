//Paginas
import { SearchPage } from "./pages/Search.jsx";
import { HomePage } from "./pages/Home.jsx";

//Componentes
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Route } from "./components/Route.jsx";


function App() {

  return (
    <>
        <Header />
        <Route path="/" component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Footer />
    </>
  )
}

export default App
