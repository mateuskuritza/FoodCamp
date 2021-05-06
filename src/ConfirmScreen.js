import { Link } from "react-router-dom";

export default function ConfirmScreen(props) {

    const { pratos, bebidas, sobremesas, setQuantities } = props;

    function calcTotal() {
        let resultado = 0;
        pratos.forEach(element => resultado += (parseFloat(element.price) * element.quantity));
        bebidas.forEach(element => resultado += (parseFloat(element.price) * element.quantity));
        sobremesas.forEach(element => resultado += (parseFloat(element.price) * element.quantity));
        return resultado;
    }

    const resultado = calcTotal().toFixed(2);

    function confirmOrder() {
        const whatsNumber = "5542998043116";
        const whatsLink = `https://wa.me/${whatsNumber}?text=`;

        const messageText = `
        Olá, gostaria de fazer o pedido:
    - Prato:${pratos.map(element => ` ${element.title + ' *' + (element.quantity + "x*")}`)};
    - Bebida:${bebidas.map(element => ` ${element.title + ' *' + (element.quantity + "x*")}`)};
    - Sobremesa:${sobremesas.map(element => ` ${element.title + ' *' + (element.quantity + "x*")}`)};
*Total: R$ ${resultado}*
        `;
        const messageTextEncoded = encodeURIComponent(messageText);

        const whatsMessageLink = whatsLink + messageTextEncoded;

        window.open(whatsMessageLink);
    }

    return (
        <>
            <div className="confirmar-titulo">Revise seu pedido</div>
            <div className="confirmar-pedido">
                <ul>
                    {pratos.map(element => (
                        <li className="prato">
                            <div className="nome">{element.title}</div>
                            <div className="preco">{element.price} (x{element.quantity})</div>
                        </li>
                    ))}
                    {bebidas.map(element => (
                        <li className="bebida">
                            <div className="nome">{element.title}</div>
                            <div className="preco">{element.price} (x{element.quantity})</div>
                        </li>
                    ))}
                    {sobremesas.map(element => (
                        <li className="sobremesa">
                            <div className="nome">{element.title}</div>
                            <div className="preco">{element.price} (x{element.quantity})</div>
                        </li>
                    ))}
                    <li className="total">
                        <div>Total</div>
                        <div>R$ {resultado}</div>
                    </li>
                </ul>
            </div>
            <button className="confirmar-button confirmar" onClick={confirmOrder}>Tudo certo, pode pedir!</button>
            <button className="confirmar-button cancelar" onClick={() => setQuantities(Array(9).fill(0))}><Link to="/">Cancelar</Link></button>
        </>
    );
}