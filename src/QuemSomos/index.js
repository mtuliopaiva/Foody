import './QuemSomos.css'

const QuemSomos = () => {
    return(
        <div className='quem-somos'>
            <h2>Quem Somos</h2>
                <p>Conheça nossas fundadoras</p>
                <div className='quem-somos__cartao'>
                    <img src='./imagens/pessoas/andreia.jpg'></img>
                    <p>Andréia</p>
                    <p>Marketing</p>
                </div>

                <div className='quem-somos__cartao'>
                    <img src='./imagens/pessoas/roberta.jpg'></img>
                    <p>Roberta</p>
                    <p>Chef de cozinha</p>
                </div>

                <div className='quem-somos__cartao'>
                    <img src='./imagens/pessoas/marcela.jpg'></img>
                    <p>Márcia</p>
                    <p>Operações</p>
                </div>
        </div>
    )
}

export default QuemSomos