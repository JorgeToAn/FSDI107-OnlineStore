import "./Catalog.css";
import Product from "./Product";

const Catalog = () => {
    return(
        <div className="catalog">
            <h1>Nippy Online Store</h1>

            <div className="product-list">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    )
}

export default Catalog;