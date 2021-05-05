import React, { useState } from 'react';



export default function MenuOption(props) {

    function calcQuantity(op) {
        if (op === "-") {
            setQuantity(quantity - 1);
            if (quantity === 1) {
                setSelected(false);
            }
        } else {
            setQuantity(quantity + 1);
        }
    }


    const { id, alt, src, title, description, price } = props;
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(false);

    return (
        <div
            class={"opcao" + (selected ? " selecionado" : "")}
            id={id} onClick={() => selected ? "" : (setSelected(true), setQuantity(1))}
        >
            <img alt={alt} src={src} />
            <div class="titulo">{title}</div>
            <div class="descricao">{description}</div>
            <div class="preco">
                <span>R$ {price}</span>
                <div class="contador">
                    <ion-icon
                        onClick={() => calcQuantity("-")}
                        name="remove-outline">
                    </ion-icon>

                    <span>{quantity}</span>

                    <ion-icon
                        onClick={() => calcQuantity("+")}
                        name="add-outline">
                    </ion-icon>
                </div>
            </div>
        </div>
    );
}