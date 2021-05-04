// import SelectFunction from "./SelectFunction";
import React, { useState } from 'react';



export default function MenuOption(props) {

    function SelectFunction() {
        const element = document.querySelector(".esseaqui");
        element.classList.add("selecionado");
        // this no react??? 
    }

    function UnSelectFunction() {
        const element = document.querySelector(".esseaqui.selecionado");
        element.classList.remove("selecionado");
        setValue(1);
    }

    const { alt, src, title, description, price } = props;
    const [value, setValue] = useState(1);

    return (
        <div class="opcao esseaqui" onClick={SelectFunction}>
            <img alt={alt} src={src} />
            <div class="titulo">{title}</div>
            <div class="descricao">{description}</div>
            <div class="preco">
                <span>R$ {price}</span>
                <div class="contador">
                    <ion-icon onClick={() => setValue(value - 1)} name="remove-outline"></ion-icon>
                    <span>{value === 0 ? UnSelectFunction() : value}</span>
                    <ion-icon onClick={() => setValue(value + 1)} name="add-outline"></ion-icon>
                </div>
            </div>


        </div>
    );
}