import StoreContext from "./storeContext";
import {useState} from "react";

const GlobalState = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({});
    
    const addToCart = (product) => {
        console.log("Adding to cart", product);

        let cartCopy = [...cart];
        cartCopy.push(product);
        setCart(cartCopy);
    };
    const removeFromCart = () => {};

    return (
        <StoreContext.Provider value={{
            cart: cart,
            user: user,
            addToCart: addToCart,
            removeFromCart: removeFromCart
        }}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default GlobalState;