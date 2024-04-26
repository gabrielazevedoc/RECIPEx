import Logo from "./Logo";
import BurguerMenu from "./BurguerMenu";
import './NavBar.scss';
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }

    return(
       <div className="navbar-container">
        <Logo onclick={handleClick} />
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