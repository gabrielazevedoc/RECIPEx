import logo from "../assets/images/recipex-logo.png";
import "./Logo.scss";

const Logo = ({onClick}) => {
    return <img className="logo" onClick={onClick} src={logo} alt="logo do site"/>;
}

export default Logo;