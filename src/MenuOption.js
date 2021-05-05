import React, { useState } from 'react';



export default function MenuOption(props) {

    function selectFunction(e) {
        if (!selected) {
            e.currentTarget.classList.add("selecionado");
            setSelected(true);
            setValue(1);
        }
    }

    function calcValue(e, op) {

        const opcaoSelecionada = e.currentTarget.parentNode.parentNode.parentNode;

        if (op === "-") {
            setValue(value - 1);
            if (value === 1) {
                opcaoSelecionada.classList.remove("selecionado");
                setSelected(false);
            }
        }

        if (op === "+") {
            setValue(value + 1);
        }
    }

    const { alt, src, title, description, price } = props;
    const [value, setValue] = useState(1);
    const [selected, setSelected] = useState(false);

    return (
        <div class="opcao" onClick={(e) => selectFunction(e)}>
            <img alt={alt} src={src} />
            <div class="titulo">{title}</div>
            <div class="descricao">{description}</div>
            <div class="preco">
                <span>R$ {price}</span>
                <div class="contador">
                    <ion-icon onClick={(e) => calcValue(e, "-")} name="remove-outline"></ion-icon>
                    <span>{value}</span>
                    <ion-icon onClick={(e) => calcValue(e, "+")} name="add-outline"></ion-icon>
                </div>
            </div>
        </div>
    );
}