import Logo from './Logo'
import BurguerMenu from './BurguerMenu'
import './NavBar.scss'
import { useNavigate, Link } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('/')
  }

  return (
    <div className="navbar-container">
      <Logo onClick={handleLogoClick} />
      <ul className="nav-list">
        <li>
          <Link to={'/Receitas'}>Receitas</Link>
        </li>
        <li>
          <Link to={'/'}>Reviews</Link>
        </li>
        <li>
          <Link to={'/'}>Cadastrar</Link>
        </li>
      </ul>
      <button className="login-button">Entrar</button>
      <BurguerMenu />
    </div>
  )
}

export default NavBar
