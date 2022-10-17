import Botao from '../Botao';
import './Receitas.css'

const Receitas = () => {


    return (
        <div className='receitas container'>
            <h2>Receitas</h2>
            <div className='receitas__cartao'>
                <h3>Bowl de Abacate</h3>
                <img src='/imagens/receitas/tigela-de-abacate.jpg'></img>
                <p>Receita refrescante e cheia de vitaminas para seu café da manhã.</p>
                <Botao>Ver Receita</Botao>
            </div>
            
            
        </div>

    )
}


export default Receitas