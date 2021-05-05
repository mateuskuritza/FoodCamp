import MenuOption from "./MenuOption";

export default function MenuContainer(props) {

    console.log(props);
    const { title, content } = props.data;


    return (
        <>
            <div class="secao">
                <div class="titulo">{title}</div>
                <div class="opcoes">
                    {content.map(element => <MenuOption {...element} />)}
                </div>
            </div>
        </>
    );
}
