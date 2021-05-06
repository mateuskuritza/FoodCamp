import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import MenuContainer from './MenuContainer';
import Footer from './Footer';
import Header from './Header';
import ConfirmScreen from './ConfirmScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {

    const [quantities, setQuantities] = useState(Array(9).fill(0));
    const [buttonDisable, setButtonDisable] = useState(true);
    const [changedButton, setChangedButton] = useState(false);

    const allOptions = {
        pratos: {
            title: "Primeiro, seu prato"
            , content: [
                {
                    id: 0
                    , alt: "Frango Yin Yang"
                    , src: "imgs/frango_yin_yang.png"
                    , title: "Frango Yin Yang"
                    , description: "Um pouco de batata, um pouco de salada"
                    , price: "14.90"
                    , quantity: quantities[0]
                }, {
                    id: 1
                    , alt: "Hamburguer"
                    , src: "imgs/hamburguer.jpg"
                    , title: "Hamburguer Gostoso"
                    , description: "Carne de primeira"
                    , price: "17.90"
                    , quantity: quantities[1]
                }, {
                    id: 2
                    , alt: "Yakisoba"
                    , src: "imgs/yakisoba.jpeg"
                    , title: "Yakisobão"
                    , description: "Bastante macarrão"
                    , price: "16.90"
                    , quantity: quantities[2]
                }
            ]
        }
        , bebidas: {
            title: "Agora, sua bebida"
            , content: [
                {
                    id: 3
                    , alt: "Lata de coca-cola"
                    , src: "imgs/coquinha_gelada.png"
                    , title: "Coquinha gelada"
                    , description: "Lata 350ml"
                    , price: "6.90"
                    , quantity: quantities[3]
                }, {
                    id: 4
                    , alt: "Suco de laranja"
                    , src: "imgs/suco-de-laranja.png"
                    , title: "Suco de laranja"
                    , description: "Laranja fresquinha"
                    , price: "4.90"
                    , quantity: quantities[4]
                }, {
                    id: 5
                    , alt: "Copo com água"
                    , src: "imgs/copo-agua.jpg"
                    , title: "Copo com água"
                    , description: "Água normal"
                    , price: "7.90"
                    , quantity: quantities[5]
                }
            ]
        }
        , sobremesas: {
            title: "Por fim, sua sobremesa"
            , content: [
                {
                    id: 6
                    , alt: "Pudim"
                    , src: "imgs/pudim.png"
                    , title: "Pudim"
                    , description: "Apenas um pudim"
                    , price: "7.90"
                    , quantity: quantities[6]
                }, {
                    id: 7
                    , alt: "Sagu"
                    , src: "imgs/sagu.jpg"
                    , title: "Sagu"
                    , description: "Sagu de vinho"
                    , price: "6.90"
                    , quantity: quantities[7]
                }, {
                    id: 8
                    , alt: "Bolo de chocolate"
                    , src: "imgs/bolo-chocolate.jpg"
                    , title: "Bolo de chocolate"
                    , description: "É um bolinho"
                    , price: "4.90"
                    , quantity: quantities[8]
                }
            ]
        }
    };

    const pratosSelecionados = allOptions.pratos.content.filter(element => element.quantity !== 0);
    const bebidasSelecionadas = allOptions.bebidas.content.filter(element => element.quantity !== 0);
    const sobremesasSelecionadas = allOptions.sobremesas.content.filter(element => element.quantity !== 0);

    if (!changedButton && pratosSelecionados.length && bebidasSelecionadas.length && sobremesasSelecionadas.length) {
        setButtonDisable(false);
        setChangedButton(true);
    }

    if (changedButton && (pratosSelecionados.length === 0 || bebidasSelecionadas.length === 0 || sobremesasSelecionadas.length === 0)) {
        setButtonDisable(true);
        setChangedButton(false);
    }

    let resultado = 0;

    pratosSelecionados.forEach(element => {
        resultado += element.price * element.quantity;
    })

    console.log(resultado);
    return (
        <>
            <Router>



                <Switch>

                    <Route path="/confirm">
                        <ConfirmScreen />
                    </Route>

                    <Route path="/">
                        <Header />
                        <div class="menu">
                            <MenuContainer data={allOptions.pratos} setQuantities={setQuantities} quantities={quantities} />
                            <MenuContainer data={allOptions.bebidas} setQuantities={setQuantities} quantities={quantities} />
                            <MenuContainer data={allOptions.sobremesas} setQuantities={setQuantities} quantities={quantities} />
                        </div>
                        <Footer buttonDisable={buttonDisable} />

                    </Route>



                </Switch>
            </Router>
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));