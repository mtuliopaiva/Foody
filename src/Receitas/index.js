import Botao from '../Botao';
import './Receitas.css'
import { useState } from 'react';

const Receitas = () => {

    return (
        <div className='receitas container'>
            <h2>Receitas</h2>
            <div className='receitas__cartao'>
                <h3>Bowl de Abacate</h3>
                <img src='/imagens/receitas/tigela-de-abacate.jpg'></img>
                <p>Receita refrescante e cheia de vitaminas para seu café da manhã.</p>
                <Botao >Ver Receita</Botao>
            </div>
            <div className='receitas__cartao'>
                <h3>Salada de Kiwi</h3>
                <img src='/imagens/receitas/salada-de-kiwi.jpg'></img>
                <p>Rica de vitaminas e sais minerais, a salada de kiwi é uma ótima opção para o café da manhã ou sobremesa.</p>
                <Botao >Ver Receita</Botao>
            </div>
            <div className='receitas__cartao'>
                <h3>Legumes à Juliana</h3>
                <img src='/imagens/receitas/pimentoes-a-juliana.jpg'></img>
                <p>Um prato simples e sofisticado com nosso molho especial.</p>
                <Botao >Ver Receita</Botao>
            </div>

        </div>

    )
}



export default Receitas