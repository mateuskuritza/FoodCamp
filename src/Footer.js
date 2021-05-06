export default function Footer(props) {

    const { state } = props;

    return (
        <div class={"footer" + (state ? " hidden" : " ")}>
            <a href="https://www.google.com/" class="fazer-pedido">
                Selecione os 3 itens<br></br>para fechar o pedido
        </a>
        </div>
    );
}