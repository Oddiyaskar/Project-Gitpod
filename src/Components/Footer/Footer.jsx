import "./Footer.scss"
import Icon from '../Img/icon.svg'
import Icons from '../Img/icons.svg'
import Img from '../Img/img.svg'

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__info">
                        <div className="footer__info1">
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <h6 className="footer__heading">Gitpod</h6>
                                </li>

                                <li className="footer__item">
                                    <a className="footer__link" href="#link">Home</a>
                                </li>

                                <li className="footer__item">
                                    <a className="footer__link" href="#link">Features</a>
                                </li>

                                <li className="footer__item">
                                    <a className="footer__link" href="#link">Pricing</a>
                                </li>

                                <li className="footer__item">
                                    <a className="footer__link" href="#link">Changelog</a>
                                </li>

                                <li className="footer__item">
                                    <a className="footer__link" href="#link">Self-Hosted</a>
                                </li>

                                <li className="footer__item">
                                    <a className="footer__link" href="#link">Gitpod vs GitHub Codespaces</a>
                                </li>

                                <li className="footer__item">
                                    <a className="footer__link" href="#link">Status</a>
                                </li>
                            </ul>

                            <ul className="footer__list1">
                                <li className="footer__item">
                                    <h6 className="footer__heading">Developer</h6>
                                </li>

                                <li className="footer__item">
                                    <a className="footer__link" href="#link">Getting started</a>
                                </li>

                                <li className="footer__item">
                                    <a className="footer__link" href="#link">Screencasts</a>
                                </li>

                                <li className="footer__item">
                                    <a className="footer__link" href="#link">Blog</a>
                                </li>

                                <li className="footer__item">
                                    <a className="footer__link" href="#link">Documentation</a>
                                </li>

                                <li className="footer__item">
                                    <a className="footer__link" href="#link">Report a bug</a>
                                </li>

                                <li className="footer__item">
                                    <a className="footer__link" href="#link">Community</a>
                                </li>
                            </ul>

                            <ul className="footer__list2">
                                <li className="footer__item">
                                    <h6 className="footer__heading">Company</h6>
                                </li>

                                <li className="footer__item">
                                    <a className="footer__link" href="#link">About</a>
                                </li>

                                <li className="footer__item">
                                    <a className="footer__link" href="#link">Careers</a>
                                    <img className="footer__icon" src={Icon} alt="Icon" width="5" height="6" />
                                </li>

                                <li className="footer__item">
                                    <a className="footer__link" href="#link">Contact</a>
                                </li>

                                <li className="footer__item">
                                    <a className="footer__link" href="#link">Media Kit</a>
                                </li>
                            </ul>

                            <ul className="footer__list3">
                                <li className="footer__item">
                                    <h6 className="footer__heading">Legal</h6>
                                </li>

                                <li className="footer__item">
                                    <a className="footer__link" href="#link">Imprint</a>
                                </li>

                                <li className="footer__item">
                                    <a className="footer__link" href="#link">Terms of Service</a>
                                </li>

                                <li className="footer__item">
                                    <a className="footer__link" href="#link">Privacy Policy</a>
                                </li>

                                <li className="footer__item">
                                    <a className="footer__link" href="#link">Media Kit</a>
                                </li>
                            </ul>
                        </div>

                        <hr className="footer__line" />

                        <div className="footer__div">
                            <img className="footer__icons" src={Icons} alt="Icons" width="24" height="25" />
                            <p className="footer__text">Copyright ©</p>
                            <p className="footer__text1">2021</p>
                            <p className="footer__text2">Gitpod</p>
                            <img className="footer__img" src={Img} alt="Img" width="104" height="24" />
                        </div>
                    </div>

                    <div className="footer__div1">
                        <p className="footer__text3">This website uses cookies to enhance the user experience. Read our privacy policy for more info.</p>
                        <button className="footer__btn">Accept Cookies</button>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;