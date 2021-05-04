export default function MenuContainer(props) {
    console.log(props);
    const { title, content } = props;
    
    return (
        <>
            <div class="secao">
                <div class="titulo">{title}</div>
                <div class="opcoes">
                    {content}
                </div>
            </div>
        </>
    );
}
