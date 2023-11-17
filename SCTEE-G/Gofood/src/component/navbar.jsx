import Logo from '../image/Logo.png';
import './navbar.css';

function Navbar(){
    return(
        <nav className='navbar'>
            <div className='logo'>
                <img src={Logo} alt='Logo'/>
            </div>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <a href="/">Home</a>
                </li>
                <li className='nav-item'>
                    <a href="/Product">Product</a>
                </li>
                <li className='nav-item'>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;