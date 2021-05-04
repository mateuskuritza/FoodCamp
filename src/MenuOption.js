export default function MenuOption(props) {

    const { alt, src, title, description, price } = props;

    return (
        <div class="opcao">
            <img alt={alt} src={src} />
            <div class="titulo">{title}</div>
            <div class="descricao">{description}</div>
            <div class="preco">R$ {price}</div>
            <div class="check">
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        </div>
    );
}