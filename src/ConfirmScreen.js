export default function ConfirmScreen(props) {
    return (
        <div class="overlay hidden">
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
    );
}