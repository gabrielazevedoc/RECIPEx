import logo from "../assets/images/recipex-logo.png";
import BurguerMenu from "./BurguerMenu";
import './NavBar.scss';

const NavBar = () => {
    return(
       <div className="NavBar">
        <img className="logo" src={logo} alt="logo do site" />
        <ul className="nav">
            <li>
                <a href="#">Receitas</a>
            </li>
            <li>
                <a href="#">Reviews</a>
            </li>
            <li>
                <a href="#">Cadastrar</a>
            </li>
        </ul>
        <button className="login-button">Entrar</button>
        <BurguerMenu/>
       </div> 
    )
}

export default NavBar;