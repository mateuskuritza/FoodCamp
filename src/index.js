import ReactDOM from 'react-dom';
import React from 'react';

function App() {
    return (
        <>
            <div class="overlay escondido">
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
                        <div class="opcao prato-frango" onclick="selecionarPrato('.prato-frango', 'Frango Yin Yang', 14.90)">
                            <img alt="Comida boa" src="img/frango_yin_yang.png" />
                            <div class="titulo">Frango Yin Yang</div>
                            <div class="descricao">Um pouco de batata, um pouco de salada</div>
                            <div class="preco">R$ 14,90</div>
                            <div class="check">
                                <ion-icon name="checkmark-circle"></ion-icon>
                            </div>
                        </div>

                        <div class="opcao prato-carne" onclick="selecionarPrato('.prato-carne', 'Carne Yin Yang', 17.90)">
                            <img alt="Comida boa" src="img/frango_yin_yang.png" />
                            <div class="titulo">Carne Yin Yang</div>
                            <div class="descricao">Um pouco de batata, um pouco de salada</div>
                            <div class="preco">R$ 17,90</div>
                            <div class="check">
                                <ion-icon name="checkmark-circle"></ion-icon>
                            </div>
                        </div>

                        <div class="opcao prato-peixe" onclick="selecionarPrato('.prato-peixe', 'Peixe Yin Yang', 16.90)">
                            <img alt="Comida boa" src="img/frango_yin_yang.png" />
                            <div class="titulo">Peixe Yin Yang</div>
                            <div class="descricao">Um pouco de batata, um pouco de salada</div>
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
                        <div class="opcao bebida-coca" onclick="selecionarBebida('.bebida-coca', 'Coquinha gelada', 6.90)">
                            <img alt="Comida boa" src="img/coquinha_gelada.png" />
                            <div class="titulo">Coquinha gelada</div>
                            <div class="descricao">Lata 350ml</div>
                            <div class="preco">R$ 6,90</div>
                            <div class="check">
                                <ion-icon name="checkmark-circle"></ion-icon>
                            </div>
                        </div>

                        <div class="opcao bebida-guarana" onclick="selecionarBebida('.bebida-guarana', 'Guaraná gelado', 4.90)">
                            <img alt="Comida boa" src="img/coquinha_gelada.png" />
                            <div class="titulo">Guaraná gelado</div>
                            <div class="descricao">Lata 350ml</div>
                            <div class="preco">R$ 4,90</div>
                            <div class="check">
                                <ion-icon name="checkmark-circle"></ion-icon>
                            </div>
                        </div>

                        <div class="opcao bebida-suco" onclick="selecionarBebida('.bebida-suco', 'Suquinho gelado', 7.90)">
                            <img alt="Comida boa" src="img/coquinha_gelada.png" />
                            <div class="titulo">Suquinho gelado</div>
                            <div class="descricao">500ml</div>
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
                        <div class="opcao sobremesa-pudim" onclick="selecionarSobremesa('.sobremesa-pudim', 'Pudim', 7.90)">
                            <img alt="Comida boa" src="img/pudim.png" />
                            <div class="titulo">Pudim</div>
                            <div class="descricao">Apenas um pudim</div>
                            <div class="preco">R$ 7,90</div>
                            <div class="check">
                                <ion-icon name="checkmark-circle"></ion-icon>
                            </div>
                        </div>

                        <div class="opcao sobremesa-mousse" onclick="selecionarSobremesa('.sobremesa-mousse', 'Mousse', 6.90)">
                            <img alt="Comida boa" src="img/pudim.png" />
                            <div class="titulo">Mousse</div>
                            <div class="descricao">Cremoso, gostoso</div>
                            <div class="preco">R$ 6,90</div>
                            <div class="check">
                                <ion-icon name="checkmark-circle"></ion-icon>
                            </div>
                        </div>

                        <div class="opcao sobremesa-brownie" onclick="selecionarSobremesa('.sobremesa-brownie', 'Brownie', 4.90)">
                            <img alt="Comida boa" src="img/pudim.png" />
                            <div class="titulo">Brownie</div>
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