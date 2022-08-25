import "./Cart.css";
import { useContext } from "react";
import StoreContext from "../store/storeContext";

const Cart = () => {
    const cart = useContext(StoreContext).cart;

    return(
        <div className="cart">
            <h1>Currently you have {cart.length} items in your cart</h1>
            <div className="flex-container">
                <div className="preview">
                    <h3>Preview</h3>
                    <ul className="cart-items">
                        {cart.map((product) => (
                            <li key={product._id} className="cart-item">
                                {product.title} - ${product.price}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="checkout">
                    <h3>Checkout</h3>
                </div>
            </div>
        </div>
    );
}

export default Cart;