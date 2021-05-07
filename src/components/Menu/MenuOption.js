import React, { useState } from 'react';
import "./menu.css";


export default function MenuOption(props) {

    const { id, alt, src, title, description, price, setQuantities, quantities } = props;
    const [quantity, setQuantity] = useState(0);
    const [selected, setSelected] = useState(false);



    function removeQuantity(id) {
        const quantitiesNew = [...quantities];
        setQuantity(quantity - 1);
        quantitiesNew[id] = quantitiesNew[id] === 0 ? 0 : quantitiesNew[id] - 1;
        setQuantities(quantitiesNew);

        if (quantity === 1) {
            setSelected(false);
        }
    }

    function addQuantity(id) {
        const quantitiesNew = [...quantities];
        setQuantity(quantity + 1);
        quantitiesNew[id] += 1;
        setQuantities(quantitiesNew);
    }

    return (
        <div
            className={"opcao " + (selected ? "selecionado" : "")}
            onClick={() => selected ? "" : (setSelected(true), addQuantity(id))}
        >
            <img alt={alt} src={src} />
            <div className="titulo">{title}</div>
            <div className="descricao">{description}</div>
            <div className="preco">
                <span>R$ {price}</span>
                <div className="contador">
                    <ion-icon
                        onClick={() => removeQuantity(id)}
                        name="remove-outline">
                    </ion-icon>

                    <span>{quantity}</span>

                    <ion-icon
                        onClick={() => addQuantity(id)}
                        name="add-outline">
                    </ion-icon>
                </div>
            </div>
        </div>
    );
}