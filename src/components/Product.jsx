import "./Product.css";
import QuantityPicker from "./QuantityPicker";

const Product = () => {
    return(
        <div className="product">
            <img src="https://picsum.photos/200" alt="lorem picture" />
            <h4>Lorem ipsum</h4>
            <QuantityPicker></QuantityPicker>
        </div>
    );
};

export default Product;