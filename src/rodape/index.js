import './Rodape.css'

const Rodape = () => {
    return(
        <footer className='rodape'>

            <div className='contato-info'>
            <h2>Contato</h2>
                <div className='social-media'>
                    <a href='#'><img src='/imagens/icons8-facebook-num-círculo.svg'></img></a>
                    <a href='#'><img src='/imagens/icons8-instagram.svg'></img></a>
                    <a href='#'><img src='/imagens/icons8-linkedin.svg'></img></a>
                    <a href='#'><img src='/imagens/icons8-twitter.svg'></img></a>
                </div>
                <div className='endereco'>
                    <address>Av. João Naves de Ávila, 2121 - Uberlândia/MG, 38408-100</address>
                    <a href="tel:+553432114569"><p>(34) 3211-4569</p></a>
                    <a href="mailto:contato@foody.com"><p>contato@foody.com</p></a>
                        <p>Segunda à sexta: 08h às 18h</p>
                </div>

            </div>
                
        </footer>
    )
}

export default Rodape