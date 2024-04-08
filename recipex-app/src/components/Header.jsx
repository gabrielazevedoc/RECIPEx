import HeaderImg from '../assets/images/imagem-vegetais.png';
import './Header.scss'

const Header = () => {
    return(
        <div className="Header">
            <div className="Header-text">
                <h1>Bem vindo ao Recipe<span>X</span></h1>
                <p>Aqui você encontra a melhor biblioteca de receitas que a própria comunidade faz</p>
                <button>Entrar</button>
            </div>
            <div className="Header-img">
                <img src={HeaderImg} alt="Vegetais separados" />
            </div>
        </div>
    )
}

export default Header;