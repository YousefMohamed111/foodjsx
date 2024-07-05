import './Aboutus.css';
import img from './img/main_img.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Aboutus() {
    const { t } = useTranslation();
    return (
        <>
            <div className="container n">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xl-6 col-xxl-6 about o1">
                        <p className="questions">{t("aboutUs")}</p>
                        <p className="ques">{t("overview")}</p>
                        <p className="ques">{t("famousFoods")}</p>
                        <p className="ques">{t("preparationSteps")}</p>
                        <Link to="./company"><button type="button" className="btn btn-warning btns">{t("knows")}</button></Link>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xl-6 col-xxl-6 barg o2">
                        <img src={img} className="img-fluid" alt="About us" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Aboutus;
