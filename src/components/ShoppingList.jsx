import "./ShoppingList.css";
import { useState } from "react";

const ShoppingList = () => {
    const [shoppingText, setShoppingText] = useState("");
    const [items, setItems] = useState([]);

    const textChange = (args) => {
        let value = args.target.value;
        setShoppingText(value);
    }

    const save = () => {
        let itemsArray = items;
        itemsArray.push(shoppingText);
        setItems(itemsArray);
    };

    return(
        <div className="shoppingList">
            <h3>Shopping List</h3>

            <div className="form">
                <input onChange={textChange} type="text" />
                <button onClick={save}>Add</button>
            </div>

            <ul>
                {items.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingList;