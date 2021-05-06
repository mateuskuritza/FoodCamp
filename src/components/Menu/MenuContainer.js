import MenuOption from "./MenuOption";
import "./menu.css";

export default function MenuContainer(props) {

    const { title, content } = props.data;
    const { setQuantities, quantities } = props;

    return (
        <>
            <div className="secao">
                <div className="titulo">{title}</div>
                <div className="opcoes">
                    {content.map(element => <MenuOption {...element} setQuantities={setQuantities} quantities={quantities} />)}
                </div>
            </div>
        </>
    );
}
