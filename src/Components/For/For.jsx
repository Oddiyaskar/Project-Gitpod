import './For.scss'
import Img from '../Img/Img.png'

function For() {
    return (
        <>
            <section className='for'>
                <div className="container">
                    <div className="for__info">
                        <h3 className='for__heading'>Think CI/CD for dev environments</h3>
                        <p className='for__text'>We invented prebuilds so application code, configuration and infrastructure can all be stored as machine-executable code in your git repositories and applied to dev environments automatically and continuously.</p>
                        <button className='for__btn'>More on prebuilds</button>
                        <button className='for__btn2'>Documentation</button>
                    </div>

                    <img className='for__img' src={Img} alt="Img" width={590} height={472} />
                </div>
            </section>
        </>
    )
}

export default For;