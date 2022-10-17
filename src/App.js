import Menu from "./Cabecalho/Menu";
import Banner from "./Cabecalho/Banner";
import Sobre from "../src/Sobre";
import Receitas from "./Receitas";



function App() {
  return (
    <div className="App">
      <Menu />
      <Banner />
      <Sobre />
      <Receitas />
    </div>
  );
}

export default App;
