import './Our.scss'
import GitLab from '../Img/Our/GitLab.svg'
import FreeCode from '../Img/Our/freeCode.svg'
import DWave from '../Img/Our/DWave.svg'
import Google from '../Img/Our/Google.svg'
import Amazon from '../Img/Our/Amazon.svg'
import Facebook from '../Img/Our/facebook.svg'
import Uber from '../Img/Our/Uber.svg'
import OpenAi from '../Img/Our/OpenAI.jpg'
import Intel from '../Img/Our/Intel.svg'
import Theia from '../Img/Our/Theia.svg'
import Code from '../Img/Our/Code.svg'
import Geeks from '../Img/Our/4Geeks.svg'

const Icons = [
    {
        id: 0,
        img: GitLab,
    },
    {
        id: 1,
        img: FreeCode,
    },
    {
        id: 2,
        img: DWave,
    },
    {
        id: 3,
        img: Google,
    },
    {
        id: 4,
        img: Amazon,
    },
    {
        id: 5,
        img: Facebook,
    },
    {
        id: 6,
        img: Uber,
    },
    {
        id: 7,
        img: OpenAi,
    },
    {
        id: 8,
        img: Intel,
    },
    {
        id: 9,
        img: Theia,
    },
    {
        id: 10,
        img: Code,
    },
    {
        id: 11,
        img: Geeks,
    },
];

function Our() {
    return (
        <>
            <section className='our'>
                <div className="container">
                    <ul className='our__list'>
                        {Icons.map((icon) => (
                            <li key={icon.id} className='our__item'>
                                <img className='our__img' src={icon.img} alt="img" width={138} height={67} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Our;