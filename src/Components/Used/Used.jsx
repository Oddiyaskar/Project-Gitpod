import './Used.scss'
import Ben from '../Img/Ben.png'
import Michael from '../Img/Michael.png'
import Juliuz from '../Img/Juliuz.png'
import David from '../Img/David.png'

function Used() {
    return (
        <>
            <section className='used'>
                <div className="container">
                    <h4 className='used__heading'>Used by 400,000+ developers.</h4>
                    <ul className='used__list'>
                        <li className='used__item'>
                            <p className='used__text'>GitPod is incredibly cool.</p>
                            <p className='used__text1'>In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.</p>
                            <div className="used__div">
                                <img className='used__icon' src={Ben} alt="Ben" width={48} height={48} />
                                <h5 className='used__title'>Ben Halpern</h5>
                            </div>

                            <p className='used__text2'>Creator and Co-founder <a className='used__link' href="#link">@forem</a> and <a className='used__link' href="#link">@ThePracticalDev</a></p>
                        </li>

                        <li className='used__item'>
                            <p className='used__text3'>Let's say we were overwhelmed how smooth @gitpod workspaces creation & own Docker image for workspaces worked.</p>
                            <p className='used__text4'>Plus, installing @code extensions from the store and integrating @gitlab CI. That blew my mind entirely, and that is hard ;)</p>
                            <div className="used__div">
                                <img className='used__icon' src={Michael} alt="Michael" width={48} height={48} />
                                <h5 className='used__title'>Michael Friedrich</h5>
                            </div>

                            <p className='used__text2'>Developer Evangelist <a className='used__link' href="#link">@GitLab</a></p>
                        </li>

                        <li className='used__item'>
                            <p className='used__text3'>Look at any PR (pull request) in a full coding environment where you can edit, build, and test the PR code, by just prepending "gitpod.io#" to the PR URL. Super useful for reviewing/testing stuff without having to check it out locally!</p>
                            <div className="used__div">
                                <img className='used__icon' src={Juliuz} alt="Juliuz" width={48} height={48} />
                                <h5 className='used__title'>Julius Volz</h5>
                            </div>
                            
                            <p className='used__text2'>Creator <a className='used__link' href="#link">@PrometheusIO</a></p>
                        </li>
                        <li className='used__item'>
                            <p className='used__text3'>I think I’m in love with @gitpod. It’s such a powerful tool. I’ve learned so much in the past week just from stumbling across Github repos that interest me and appending “http://gitpod.io/#” to the URL. A+ tool all around.</p>
                            <div className="used__div">
                                <img className='used__icon' src={David} alt="David" width={48} height={48} />
                                <h5 className='used__title'>David Ressler</h5>
                            </div>
                            
                            <p className='used__text2'>Engineering Manager <a className='used__link' href="#link">@instagram</a></p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Used;