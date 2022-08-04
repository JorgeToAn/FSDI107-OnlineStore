import "./QuantityPicker.css";
import { useState } from "react";

const  QuantityPicker = () => {
    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        setQuantity(quantity+1);
    };

    const decrease = () => {
        if (quantity > 1) setQuantity(quantity-1);
    };

    return(
        <div className="quantityPicker">
            <button onClick={increase}>+</button>
            <label>{quantity}</label>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default QuantityPicker;