import './Aboutus.css'
import img from './img/main_img.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function Aboutus() {
    const { t } = useTranslation()
    return (
        <>
            <div className="container n">
                <div className='about'>
                    <p className='questions'>{t("aboutUs")}</p>
                    <p className='ques'>{t("overview")}</p>
                    <p className='ques'>{t("famousFoods")}</p>
                    <p className='ques'>{t("preparationSteps")}</p>
                    <Link to="./company"><button type="button" class="btn btn-warning btns">Warning</button></Link>
                </div>
                <div>
                    <img src={img} />
                </div>
            </div>
        </>
    )
}
export default Aboutus;