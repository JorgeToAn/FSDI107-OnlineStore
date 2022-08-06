import "./Catalog.css";
import Product from "./Product";
import DataService from "../services/dataService";
import { useEffect } from "react";
import { useState } from "react";

const Catalog = () => {
    const [products, setProducts] = useState([]);

    const loadData = () => {
        let service = new DataService();
        let prods = service.getCatalog();
        setProducts(prods);
        console.log("Products:", products);
    };

    useEffect(() => {
        loadData();
    });
    
    return(
        <div className="catalog">
            <h1>Nippy Online Store</h1>

            <div className="product-list">
                {products.map((product) => (
                    <Product key={product._id}  data={product}/>
                ))}
            </div>
        </div>
    );
}

export default Catalog;