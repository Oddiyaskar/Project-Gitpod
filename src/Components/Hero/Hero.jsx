import './Hero.scss'
import Frame from '../Img/Frame.svg'
import Rectangle from '../Img/Rectangle.png'

function Hero() {
    return (
        <>
            <section className='hero'>
                <div className="container">
                    <div className="hero__info">
                        <h1 className='hero__heading'>Always</h1>
                        <h1 className='hero__heading'>Ready to Code.</h1>
                        <p className='hero__text'>Spin up fresh, automated dev environments for each task, in the cloud, in seconds.</p>
                        <div className="hero__div">
                            <button className='hero__btn'>Try Now</button>
                            <p className='hero__textt'>Open a workspace. <br /> Start from any Git context.</p>
                        </div>
                        <img className='hero__icon' src={Frame} alt="Frame" width="160" height="32" />
                    </div>

                    <img className='hero__img' src={Rectangle} alt="Rectangle" width={630} height={652} />
                </div>
            </section>
        </>
    )
}

export default Hero;