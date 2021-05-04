import ReactDOM from 'react-dom';
import React from 'react';

function App() {
    return (
        <>
            <div class="overlay">
                <div class="confirmar-pedido">
                    <div class="titulo">Confirme seu pedido</div>
                    <ul>
                        <li class="prato">
                            <div class="nome">Frango Yin Yang</div>
                            <div class="preco">14,90</div>
                        </li>
                        <li class="bebida">
                            <div class="nome">Coquinha gelada</div>
                            <div class="preco">4,90</div>
                        </li>
                        <li class="sobremesa">
                            <div class="nome">Pudim</div>
                            <div class="preco">7,90</div>
                        </li>
                        <li class="total">
                            <div>Total</div>
                            <div>R$ 27,70</div>
                        </li>
                    </ul>
                    <button class="confirmar">Tudo certo, pode pedir!</button>
                    <button class="cancelar">Cancelar</button>
                </div>
            </div>

            <div class="header">
                <div class="titulo">FoodCamp</div>
                <div class="subtitulo">Sua comida em 6 minutos</div>
            </div>

            <div class="menu">
                <div class="secao">
                    <div class="titulo">Primeiro, seu prato</div>
                    <div class="opcoes pratos">
                        <div class="opcao">
                            <img alt="Frango Yin Yang" src="imgs/frango_yin_yang.png" />
                            <div class="titulo">Frango Yin Yang</div>
                            <div class="descricao">Um pouco de batata, um pouco de salada</div>
                            <div class="preco">R$ 14,90</div>
                            <div class="check">
                                <ion-icon name="checkmark-circle"></ion-icon>
                            </div>
                        </div>

                        <div class="opcao">
                            <img alt="Hamburguer" src="imgs/hamburguer.jpg" />
                            <div class="titulo">Hamburguer Gostoso</div>
                            <div class="descricao">Carne de primeira</div>
                            <div class="preco">R$ 17,90</div>
                            <div class="check">
                                <ion-icon name="checkmark-circle"></ion-icon>
                            </div>
                        </div>

                        <div class="opcao">
                            <img alt="Yakisoba" src="imgs/yakisoba.jpeg" />
                            <div class="titulo">Yakisobão</div>
                            <div class="descricao">Bastante macarrão</div>
                            <div class="preco">R$ 16,90</div>
                            <div class="check">
                                <ion-icon name="checkmark-circle"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="secao">
                    <div class="titulo">Agora, sua bebida</div>
                    <div class="opcoes bebidas">
                        <div class="opcao">
                            <img alt="Lata de coca-cola" src="imgs/coquinha_gelada.png" />
                            <div class="titulo">Coquinha gelada</div>
                            <div class="descricao">Lata 350ml</div>
                            <div class="preco">R$ 6,90</div>
                            <div class="check">
                                <ion-icon name="checkmark-circle"></ion-icon>
                            </div>
                        </div>

                        <div class="opcao">
                            <img alt="Suco de laranja" src="imgs/suco-de-laranja.png" />
                            <div class="titulo">Suco de laranja</div>
                            <div class="descricao">Laranja fresquinha</div>
                            <div class="preco">R$ 4,90</div>
                            <div class="check">
                                <ion-icon name="checkmark-circle"></ion-icon>
                            </div>
                        </div>

                        <div class="opcao">
                            <img alt="Copo com água" src="imgs/copo-agua.jpg" />
                            <div class="titulo">Copo com água</div>
                            <div class="descricao">Água normal</div>
                            <div class="preco">R$ 7,90</div>
                            <div class="check">
                                <ion-icon name="checkmark-circle"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="secao">
                    <div class="titulo">Por fim, sua sobremesa</div>
                    <div class="opcoes sobremesas">
                        <div class="opcao">
                            <img alt="Pudim" src="imgs/pudim.png" />
                            <div class="titulo">Pudim</div>
                            <div class="descricao">Apenas um pudim</div>
                            <div class="preco">R$ 7,90</div>
                            <div class="check">
                                <ion-icon name="checkmark-circle"></ion-icon>
                            </div>
                        </div>

                        <div class="opcao">
                            <img alt="Sagu" src="imgs/sagu.jpg" />
                            <div class="titulo">Sagu</div>
                            <div class="descricao">Sagu de vinho</div>
                            <div class="preco">R$ 6,90</div>
                            <div class="check">
                                <ion-icon name="checkmark-circle"></ion-icon>
                            </div>
                        </div>

                        <div class="opcao">
                            <img alt="Bolo de chocolate" src="imgs/bolo-chocolate.jpg" />
                            <div class="titulo">Bolo de Chocolate</div>
                            <div class="descricao">É um bolinho</div>
                            <div class="preco">R$ 4,90</div>
                            <div class="check">
                                <ion-icon name="checkmark-circle"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer">
                <a href="https://www.google.com/" class="fazer-pedido">
                    Selecione os 3 itens<br></br>para fechar o pedido
                </a>
            </div>
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));