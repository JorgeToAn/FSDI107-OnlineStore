import './navBar.css';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className="brand">
                <img src="/images/onlinestore_logo.png" alt="logo" width={40} height={40}/>
                <h5>Nippy Online Store</h5>
            </div>
            <div className="links">
                <nav>
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="/catalog">Store</Link>
                    <Link className='link' to="/list">My List</Link>
                    <Link className='link' to="/about">About</Link>
                    <Link className='btn-link' to="/cart">Cart</Link>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;