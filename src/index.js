import "./styles/reset.css";
import "./styles/style.css";

import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import MenuContainer from './components/Menu/MenuContainer';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import ConfirmScreen from './components/ConfirmScreen/ConfirmScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {

    const [quantities, setQuantities] = useState(Array(9).fill(0));
    const [buttonDisable, setButtonDisable] = useState(true);
    const [changedButton, setChangedButton] = useState(false);


    const allOptions = [
        {
            title: "Primeiro, seu prato"
            , content: [
                {
                    id: 0
                    , alt: "Frango Yin Yang"
                    , src: "./imgs/frango_yin_yang.png"
                    , title: "Frango Yin Yang"
                    , description: "Um pouco de batata, um pouco de salada"
                    , price: "14.90"
                    , quantity: quantities[0]
                }, {
                    id: 1
                    , alt: "Hamburguer"
                    , src: "./imgs/hamburguer.jpg"
                    , title: "Hamburguer Gostoso"
                    , description: "Carne de primeira"
                    , price: "17.90"
                    , quantity: quantities[1]
                }, {
                    id: 2
                    , alt: "Yakisoba"
                    , src: "./imgs/yakisoba.jpeg"
                    , title: "Yakisobão"
                    , description: "Bastante macarrão"
                    , price: "16.90"
                    , quantity: quantities[2]
                }
            ]
        }
        , {
            title: "Agora, sua bebida"
            , content: [
                {
                    id: 3
                    , alt: "Lata de coca-cola"
                    , src: "./imgs/coquinha_gelada.png"
                    , title: "Coquinha gelada"
                    , description: "Lata 350ml"
                    , price: "6.90"
                    , quantity: quantities[3]
                }, {
                    id: 4
                    , alt: "Suco de laranja"
                    , src: "./imgs/suco-de-laranja.png"
                    , title: "Suco de laranja"
                    , description: "Laranja fresquinha"
                    , price: "4.90"
                    , quantity: quantities[4]
                }, {
                    id: 5
                    , alt: "Copo com água"
                    , src: "./imgs/copo-agua.jpg"
                    , title: "Copo com água"
                    , description: "Água normal"
                    , price: "7.90"
                    , quantity: quantities[5]
                }
            ]
        }
        , {
            title: "Por fim, sua sobremesa"
            , content: [
                {
                    id: 6
                    , alt: "Pudim"
                    , src: "./imgs/pudim.png"
                    , title: "Pudim"
                    , description: "Apenas um pudim"
                    , price: "7.90"
                    , quantity: quantities[6]
                }, {
                    id: 7
                    , alt: "Sagu"
                    , src: "./imgs/sagu.jpg"
                    , title: "Sagu"
                    , description: "Sagu de vinho"
                    , price: "6.90"
                    , quantity: quantities[7]
                }, {
                    id: 8
                    , alt: "Bolo de chocolate"
                    , src: "./imgs/bolo-chocolate.jpg"
                    , title: "Bolo de chocolate"
                    , description: "É um bolinho"
                    , price: "4.90"
                    , quantity: quantities[8]
                }
            ]
        }
    ];


    const [pratosSelecionados, bebidasSelecionadas, sobremesasSelecionadas] = allOptions.map(element => element.content.filter(element => element.quantity !== 0))

    if (!changedButton && pratosSelecionados.length && bebidasSelecionadas.length && sobremesasSelecionadas.length) {
        setButtonDisable(false);
        setChangedButton(true);
    }

    if (changedButton && (!pratosSelecionados.length || !bebidasSelecionadas.length || !sobremesasSelecionadas.length)) {
        setButtonDisable(true);
        setChangedButton(false);
    }

    return (
        <>
            <Router>

                <Header />

                <Switch>
                    <Route path="/confirm">
                        <div className="menu">
                            <ConfirmScreen setQuantities={setQuantities} pratos={pratosSelecionados} bebidas={bebidasSelecionadas} sobremesas={sobremesasSelecionadas} />
                        </div>
                    </Route>

                    <Route path="/">
                        <div className="menu">
                            {allOptions.map(element => <MenuContainer data={element} setQuantities={setQuantities} quantities={quantities} />)}
                        </div>
                        <Footer buttonDisable={buttonDisable} />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));