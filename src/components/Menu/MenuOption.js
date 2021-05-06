import React, { useState } from 'react';
import "./menu.css";


export default function MenuOption(props) {

    const { id, alt, src, title, description, price, setQuantities, quantities } = props;
    const [quantity, setQuantity] = useState(0);
    const [selected, setSelected] = useState(false);

    function calcQuantity(id, op) {

        const quantitiesNew = [...quantities];

        if (op === "-") {
            setQuantity(quantity - 1);
            quantitiesNew[id] = quantitiesNew[id] === 0 ? 0 : quantitiesNew[id] - 1;

            setQuantities(quantitiesNew);
            if (quantity === 1) {
                setSelected(false);
            }
        } else {
            setQuantity(quantity + 1);
            quantitiesNew[id] += 1;
            setQuantities(quantitiesNew);
        }

    }

    return (
        <div
            className={"opcao" + (selected ? " selecionado" : "")}
            id={id} onClick={() => selected ? "" : (setSelected(true), calcQuantity(id, "+"))}
        >
            <img alt={alt} src={src} />
            <div className="titulo">{title}</div>
            <div className="descricao">{description}</div>
            <div className="preco">
                <span>R$ {price}</span>
                <div className="contador">
                    <ion-icon
                        onClick={() => calcQuantity(id, "-")}
                        name="remove-outline">
                    </ion-icon>

                    <span>{quantity}</span>

                    <ion-icon
                        onClick={() => calcQuantity(id, "+")}
                        name="add-outline">
                    </ion-icon>
                </div>
            </div>
        </div>
    );
}