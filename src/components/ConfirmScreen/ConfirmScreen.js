import { Link } from "react-router-dom";
import "./confirmScreen.css";

export default function ConfirmScreen(props) {

    const { pratos, bebidas, sobremesas, setQuantities } = props;
    const selecionados = [pratos, bebidas, sobremesas];

    function calcTotal() {
        let resultado = 0;
        selecionados.forEach(foodType => foodType.forEach(food => resultado += (food.price * food.quantity)));
        return resultado;
    }

    const resultado = calcTotal().toFixed(2);

    function confirmOrder() {
        const whatsNumber = "5542998043116";
        const messageText = `
        Olá, gostaria de fazer o pedido:

    *- Prato:*${pratos.map(element => ` ${element.title + ' *' + (element.quantity + "x*")}`)};
    *- Bebida:*${bebidas.map(element => ` ${element.title + ' *' + (element.quantity + "x*")}`)};
    *- Sobremesa:*${sobremesas.map(element => ` ${element.title + ' *' + (element.quantity + "x*")}`)};

*Total: R$ ${resultado}*`;
        const messageTextEncoded = encodeURIComponent(messageText);
        const whatsMessageLink = `https://wa.me/${whatsNumber}?text=` + messageTextEncoded;

        window.open(whatsMessageLink);
    }

    return (
        <>
            <div className="confirmar-titulo">Revise seu pedido</div>
            <div className="pedido">
                <ul>

                    {selecionados.map(foodType => (
                        foodType.map(food => (
                            <li>
                                <div>{food.title}</div>
                                <div className="preco">{food.price} (x{food.quantity})</div>
                            </li>
                        ))
                    ))}

                    <li className="total">
                        <div>Total</div>
                        <div>R$ {resultado}</div>
                    </li>
                </ul>
            </div>
            <button className="confirmar" onClick={confirmOrder}>Tudo certo, pode pedir!</button>
            <Link to="/"><button className="cancelar" onClick={() => setQuantities(Array(9).fill(0))}>Cancelar</button></Link>
        </>
    );
}