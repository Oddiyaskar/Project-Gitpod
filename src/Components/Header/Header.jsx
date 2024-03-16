import "./Header.scss"
import Logo from '../Img/Logo.svg'
import Icon from '../Img/icon.svg'

function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <a className="header__link" href="#link">
                        <img className="header__logo" src={Logo} alt="Logo" width="131" height="40" />
                    </a>

                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a className="nav__link" href="https://www.gitpod.io/">Features</a>
                            </li>

                            <li className="nav__item">
                                <a className="nav__link" href="https://www.gitpod.io/">Pricing</a>
                            </li>

                            <li className="nav__item">
                                <a className="nav__link" href="https://www.gitpod.io/">Blog</a>
                            </li>

                            <li className="nav__item">
                                <a className="nav__link" href="https://www.gitpod.io/">Docs</a>
                            </li>

                            <li className="nav__item">
                                <a className="nav__link" href="https://www.gitpod.io/">Changelog</a>
                            </li>

                            <li className="nav__item">
                                <a className="nav__link" href="https://www.gitpod.io/">We're hiring</a>
                                <img className="nav__icon" src={Icon} alt="Icon" width="5" height="6" />
                            </li>
                        </ul>
                    </nav>

                    <button className="header__btn">Login</button>
                </div>
            </header>
        </>
    )
}

export default Header;