import React, { useState } from 'react';



export default function MenuOption(props) {

    function selectFunction(e) {
        const elementClasses = e.currentTarget.classList;
        if (!selected) {
            elementClasses.add("selecionado");
            setSelected(true);
            setValue(1);
        }
        if (selected && value === 0) {
            elementClasses.remove("selecionado");
            setSelected(false);
        }
    }

    function calcValue(op) {
        if (op === "-") {
            setValue(value - 1);
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
                    <ion-icon onClick={() => calcValue("-")} name="remove-outline"></ion-icon>
                    <span>{value}</span>
                    <ion-icon onClick={() => calcValue("+")} name="add-outline"></ion-icon>
                </div>
            </div>
        </div>
    );
}