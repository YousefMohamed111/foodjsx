import "./piza.css"
import img1 from './img/th (1).jpeg';
import img2 from './img/th.jpeg';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Languageselectors from '../components/language-selectors';
function Pizza() {
    const { t } = useTranslation();
    return (
        <>
            <div>
                <Languageselectors />
                <div className="container-fulied headre">
                    <div className="talkkk">
                        <p>{t("welcomee")}</p>
                        <p>{t("orderPlacement")}</p>
                        <p>{t("visitAgain")}</p>
                    </div>
                </div>
                <div className="second">
                    <Link to="/login">
                        <div className="card text-bg-dark">
                            <img src={img2} className="card-img" alt="..." />
                            <img src={img1} className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Pizza</h5>
                                <p className="card-text">{t("pizzaDescription")}</p>
                                <p className="card-text">{t("extraDessert")}</p>
                            </div>
                        </div></Link>
                </div>
            </div>
        </>
    )
}
export default Pizza;