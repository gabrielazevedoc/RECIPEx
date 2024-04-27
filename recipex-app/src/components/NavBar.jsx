import Logo from "./Logo";
import BurguerMenu from "./BurguerMenu";
import './NavBar.scss';
import { Link } from "react-router-dom";

const NavBar = () => {
     return(
       <div className="navbar-container">
        <Link to={'/'}>{<Logo/>}</Link>
        <ul className="nav-list">
            <li>
                <Link to={'/Receitas'}>Receitas</Link> 
            </li>
            <li>
                Reviews
            </li>
            <li>
                Cadastrar
            </li>
        </ul>
        <button className="login-button">Entrar</button>
        <BurguerMenu/>
       </div> 
    )
}

export default NavBar;