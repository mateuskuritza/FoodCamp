import { Link } from "react-router-dom";

export default function ConfirmScreen() {

    return (
        <>
            <div class="confirmar-titulo">Revise seu pedido</div>
            <div class="confirmar-pedido">
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
            </div>
            <button class="confirmar-button confirmar">Tudo certo, pode pedir!</button>
            <button class="confirmar-button cancelar"><Link to="/">Cancelar</Link></button>
        </>
    );
}