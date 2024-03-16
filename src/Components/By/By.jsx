import "./By.scss"
import Auth from '../Img/auth.png'
import Chrome from '../Img/chrome.svg'
import FireFox from '../Img/firefox.svg'

function By() {
    return (
        <>
            <section className="by">
                <div className="container">
                    <h1 className="by__heading">Remote-first. Secure by design.</h1>
                    <img className="by__img" src={Auth} alt="Auth" width={1269} height={821} />
                    <p className="by__text">You no longer need an over-powered laptop to code, Gitpod works just as smoothly on a Chromebook or iPad. All you need is a browser. Gitpod centralizes all source code and never stores it on insecure machines and networks.</p>
                    <img className="by__icon" src={Chrome} alt="Chrome" width="211" height="52" />
                    <img className="by__icons" src={FireFox} alt="FireFox" width="203" height="52" />
                </div>
            </section>
        </>
    )
}

export default By;