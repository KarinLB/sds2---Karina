import './styles.css';
//import { ReactComponent as Logo, ReactComponent} from './logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="main-navbar">
          
           <Link to="/" className="logo-text">DS Delivery</Link>
        </nav>
    )
}

export default Navbar;