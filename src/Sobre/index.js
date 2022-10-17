import './Sobre.css'

const Sobre = () => {
    return(
        <div className='sobre'>
            <h2>Sobre</h2>
                <p className='conteudo container'>Foody foi criada em 2016 com o objetivo de trazer aos clientes vida através 
                    da culinária saudável, com ingredientes selecionados e todo o cuidado em cada etapa do preparo.
                    Entre os nossos diferenciais, estão o acompanhamento em todas nossas receitas
                    dos principais chefs e nutricionistas do estado de Minas Gerais.
                    Tudo para que sua experiência seja saudável e verdadeiramente gostosa!
                    </p>
            <img src='/imagens/sobre.png'/>
        </div>
    )
}

export default Sobre