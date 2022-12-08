import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <Link to='/'>
                <img src='./favicon.ico' alt='logo'/>
            </Link>
            <h1>Ecommerce</h1>
            <div className='Categories'>
                <Link to='/category/policial' className="menu">Categoria 1</Link>
                <Link to='/category/ficcion' className="menu">Categoria 2</Link>
                <Link to='/category/fantasia' className="menu">Categoria 3</Link>
            </div>
            
            <CartWidget />
        </nav>
    );
};
export default Navbar;