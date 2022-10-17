import Menu from "./Cabecalho/Menu";
import Banner from "./Cabecalho/Banner";
import Sobre from "../src/Sobre";
import Receitas from "./Receitas";
import QuemSomos from "./QuemSomos";
import Rodape from "./rodape";




function App() {
  return (
    <div className="App">

      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Open+Sans:wght@300;400;700&display=swap" 
      rel="stylesheet" />
      
      <Menu />
      <Banner />
      <Sobre />
      <Receitas />
      <QuemSomos />
      <Rodape />
    </div>
  );
}

export default App;
