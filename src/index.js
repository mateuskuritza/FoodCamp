import ReactDOM from 'react-dom';
import React from 'react';
import MenuContainer from './MenuContainer';
import Footer from './Footer';
import Header from './Header';
import ConfirmScreen from './ConfirmScreen';

function App() {

    const allOptions = {
        pratos: {
            title: "Primeiro, seu prato"
            , content: [
                {
                    id: 1
                    , alt: "Frango Yin Yang"
                    , src: "imgs/frango_yin_yang.png"
                    , title: "Frango Yin Yang"
                    , description: "Um pouco de batata, um pouco de salada"
                    , price: "14.90"
                }, {
                    id: 2
                    , alt: "Hamburguer"
                    , src: "imgs/hamburguer.jpg"
                    , title: "Hamburguer Gostoso"
                    , description: "Carne de primeira"
                    , price: "17.90"
                }, {
                    id: 3
                    , alt: "Yakisoba"
                    , src: "imgs/yakisoba.jpeg"
                    , title: "Yakisobão"
                    , description: "Bastante macarrão"
                    , price: "16.90"
                }
            ]
        }
        , bebidas: {
            title: "Agora, sua bebida"
            , content: [
                {
                    id: 4
                    , alt: "Lata de coca-cola"
                    , src: "imgs/coquinha_gelada.png"
                    , title: "Coquinha gelada"
                    , description: "Lata 350ml"
                    , price: "6.90"
                }, {
                    id: 5
                    , alt: "Suco de laranja"
                    , src: "imgs/suco-de-laranja.png"
                    , title: "Suco de laranja"
                    , description: "Laranja fresquinha"
                    , price: "4.90"
                }, {
                    id: 6
                    , alt: "Copo com água"
                    , src: "imgs/copo-agua.jpg"
                    , title: "Copo com água"
                    , description: "Água normal"
                    , price: "7.90"
                }
            ]
        }
        , sobremesas: {
            title: "Por fim, sua sobremesa"
            , content: [
                {
                    id: 7
                    , alt: "Pudim"
                    , src: "imgs/pudim.png"
                    , title: "Pudim"
                    , description: "Apenas um pudim"
                    , price: "7.90"
                }, {
                    id: 8
                    , alt: "Sagu"
                    , src: "imgs/sagu.jpg"
                    , title: "Sagu"
                    , description: "Sagu de vinho"
                    , price: "6.90"
                }, {
                    id: 9
                    , alt: "Bolo de chocolate"
                    , src: "imgs/bolo-chocolate.jpg"
                    , title: "Bolo de chocolate"
                    , description: "É um bolinho"
                    , price: "4.90"
                }
            ]
        }
    };

    return (
        <>
            <ConfirmScreen />
            <Header />

            <div class="menu">
                <MenuContainer data={allOptions.pratos} />
                <MenuContainer data={allOptions.bebidas} />
                <MenuContainer data={allOptions.sobremesas} />
            </div>

            <Footer />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));