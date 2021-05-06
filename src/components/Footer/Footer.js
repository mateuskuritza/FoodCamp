import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer(props) {

    let { buttonDisable } = props;

    let button = "";

    if (buttonDisable) {
        button = (<span>Selecione os 3 itens<br></br>para fechar o pedido</span>)
    } else {
        button = (<Link className="ativo" to="/confirm">Fechar pedido</Link>)
    }

    return (
        <div className="footer">
            {button}
        </div>
    );
}