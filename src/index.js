import ReactDOM from 'react-dom';
import React from 'react';
import MenuOption from './MenuOption';
import MenuContainer from './MenuContainer';
import Footer from './Footer';
import Header from './Header';
import ConfirmScreen from './ConfirmScreen';

function App() {
    return (
        <>
            <ConfirmScreen />
            <Header />
            <div class="menu">
                <MenuContainer
                    title="Primeiro, seu prato"
                    content={
                        <MenuOption alt="Frango Yin Yang" src="imgs/frango_yin_yang.png" title="Frango Yin Yang" description="Um pouco de batata, um pouco de salada" price="14.90" />
                        , <MenuOption alt="Hamburguer" src="imgs/hamburguer.jpg" title="Hamburguer Gostoso" description="Carne de primeira" price="17.90" />
                        , <MenuOption alt="Yakisoba" src="imgs/yakisoba.jpeg" title="Yakisobão" description="Bastante macarrão" price="16.90" />}

                />
                <MenuContainer
                    title="Agora, sua bebida"
                    content={
                        <MenuOption alt="Lata de coca-cola" src="imgs/coquinha_gelada.png" title="Coquinha gelada" description="Lata 350ml" price="6.90" />
                        , <MenuOption alt="Suco de laranja" src="imgs/suco-de-laranja.png" title="Suco de laranja" description="Laranja fresquinha" price="4.90" />
                        , <MenuOption alt="Copo com água" src="imgs/copo-agua.jpg" title="Copo com água" description="Água normal" price="7.90" />}

                />
                <MenuContainer
                    title="Por fim, sua sobremesa"
                    content={
                        <MenuOption alt="Pudim" src="imgs/pudim.png" title="Pudim" description="Apenas um pudim" price="7.90" />
                        , <MenuOption alt="Sagu" src="imgs/sagu.jpg" title="Sagu" description="Sagu de vinho" price="6.90" />
                        , <MenuOption alt="Bolo de chocolate" src="imgs/bolo-chocolate.jpg" title="Bolo de chocolate" description="É um bolinho" price="4.90" />}

                />
            </div>
            <Footer />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));