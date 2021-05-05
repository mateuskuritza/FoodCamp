import React, { useState } from 'react';



export default function MenuOption(props) {

    function select(element){
        element.classList.toggle("selecionado");
    }

    function selectFunction(id) {
        if (!selected) {
            const opcaoSelecionada = document.querySelector("#"+id);
            select(opcaoSelecionada);
            setSelected(true);
            setValue(1);
        }
    }

    function calcValue(id, op) {
        const opcaoSelecionada = document.querySelector("#"+id);
        if (op === "-") {
            setValue(value - 1);
            if (value === 1) {
                select(opcaoSelecionada);
                setSelected(false);
            }
        }else{
            setValue(value + 1);
        }
    }


    const { alt, src, title, description, price } = props;
    const [value, setValue] = useState(1);
    const [selected, setSelected] = useState(false);

    const idOpcao = title.replaceAll(" ", "");

    return (
        <div class="opcao" id={idOpcao} onClick={() => selectFunction(idOpcao)}>
            <img alt={alt} src={src} />
            <div class="titulo">{title}</div>
            <div class="descricao">{description}</div>
            <div class="preco">
                <span>R$ {price}</span>
                <div class="contador">
                    <ion-icon onClick={() => calcValue(idOpcao,"-")} name="remove-outline"></ion-icon>
                    <span>{value}</span>
                    <ion-icon onClick={() => calcValue(idOpcao,"+")} name="add-outline"></ion-icon>
                </div>
            </div>
        </div>
    );
}