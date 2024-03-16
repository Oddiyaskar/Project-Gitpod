import "./Get.scss"
import Type from '../Img/Get/Type.svg' 
import Phyton from '../Img/Get/Phyton.svg'
import Go from '../Img/Get/go.svg'
import Rust from '../Img/Get/Rust.svg'
import Java from '../Img/Get/Java.svg'
import Svelte from '../Img/Get/Svelte.svg'

function Get() {
    return (
        <>
            <section className="get">
                <div className="container">
                    <h5 className="get__heading">Get started now</h5>

                    <ul className="get__list">
                        <li className="get__item">
                            <h6 className="get__title">Connect Git repository</h6>
                            <p className="get__text">Select a Git provider to start with an existing project from any Git context.</p>
                            <button className="get__btn">Continue with GitLab</button><br />
                            <button className="get__btn1">Continue with GitHub</button><br />
                            <button className="get__btn2">Continue with Bitbucket</button>
                            <p className="get__text1">Or prefix any GitLab, GitHub or Bitbucket URL with</p>
                            <button className="get__btn3">gitpod.io/#</button>
                        </li>

                        <li className="get__item">
                            <h6 className="get__title">Launch an example workspace</h6>
                            <p className="get__text">Dive into one of our example workspaces</p>

                            <div className="get__div">
                                <img className="get__img" src={Type} alt="Type" width="27" height="27" />
                                <p className="get__text3">Node or TypeScript</p>
                                <button className="get__btn4">Launch workspace</button>
                            </div>

                            <div className="get__div1">
                                <img className="get__img" src={Phyton} alt="Phyton" width="27" height="27" />
                                <p className="get__text3">Python</p>
                                <button className="get__btn4">Launch workspace</button>
                            </div>

                            <div className="get__div2">
                                <img className="get__img" src={Go} alt="Go" width="27" height="27" />
                                <p className="get__text3">Go</p>
                                <button className="get__btn4">Launch workspace</button>
                            </div>

                            <div className="get__div3">
                                <img className="get__img" src={Rust} alt="Rust" width="27" height="27" />
                                <p className="get__text3">Rust</p>
                                <button className="get__btn4">Launch workspace</button>
                            </div>

                            <div className="get__div4">
                                <img className="get__img" src={Java} alt="Java" width="27" height="27" />
                                <p className="get__text3">Java</p>
                                <button className="get__btn4">Launch workspace</button>
                            </div>

                            <div className="get__div5">
                                <img className="get__img" src={Svelte} alt="Svelte" width="27" height="27" />
                                <p className="get__text3">Svelte</p>
                                <button className="get__btn4">Launch workspace</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Get;