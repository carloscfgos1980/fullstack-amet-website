import logo from "./Amet_Logo.png"
import ShoppingCart from './components/ShoppingCart';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="container-fluid bg-dark py-3">
            <ShoppingCart />
            <div className="row justify-content-between align-items-center">
                <div div className="col-sm-3 text-center py-1">
                    <img src={logo}
                        width="20%"
                        className="d-inline-block align-top"
                        alt="Logo" />
                </div>
                <div div className="display-3 col-sm-4 text-center text-light py-1">Amet Laza</div>
                <div className="col-sm-5 text-center">
                    <nav className="navbar">
                        <div className="mx-5">
                            <Link className="m-1 btn btn-warning" to="/">Home</Link>
                            <Link className="m-1 btn btn-warning" to="/about">About</Link>
                            <Link className="m-1 btn btn-warning" to="/works">Works</Link>
                            <Link className="m-1 btn btn-warning" to="/shop">Shop</Link>
                            <Link className="m-1 btn btn-warning" to="/contact">Contact</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavBar;