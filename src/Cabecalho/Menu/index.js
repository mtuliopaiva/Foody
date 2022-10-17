import './Menu.css'

const Menu = () => {
    return(
        <div className='menu container'>
            <img src='/imagens/icon.png' alt='Logotipo da página de receitas Foody' />
            <h1>Foody</h1>
            <ul>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Receitas</a></li>
                <li><a href="#">Quem somos</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
            
        </div>

    )
}

export default Menu