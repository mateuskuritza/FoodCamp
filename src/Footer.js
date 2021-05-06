import { Link } from "react-router-dom";

export default function Footer(props) {

    let { buttonDisable } = props;

    let button = "";

    if (buttonDisable) {
        button = (<a href="#">Selecione os 3 itens<br></br>para fechar o pedido</a>)
    } else {
        button = (<Link className="ativo" to="/confirm">Fechar pedido</Link>)
    }

    return (
        <div className="footer">
            {button}
        </div>
    );
}