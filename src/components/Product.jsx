import "./Product.css";
import QuantityPicker from "./QuantityPicker";
// import { useState } from "react";

const Product = (props) => {
    // const [total, setTotal] = useState(props.data.price);

    return(
        <div className="product">
            <img src={"/images/"+props.data.image} alt="product-item" width={250} height={250} />
            <h4>{props.data.title}</h4>
            <p>Total ${props.data.price.toFixed(2)}</p>
            <p>${props.data.price.toFixed(2)}</p>
            <QuantityPicker/>
        </div>
    );
};

export default Product;