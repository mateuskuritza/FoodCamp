import MenuOption from "./MenuOption";

export default function MenuContainer(props) {

    const { title, content } = props.data;
    const { setQuantities, quantities } = props;

    return (
        <>
            <div class="secao">
                <div class="titulo">{title}</div>
                <div class="opcoes">
                    {content.map(element => <MenuOption {...element} setQuantities={setQuantities} quantities={quantities} />)}
                </div>
            </div>
        </>
    );
}
