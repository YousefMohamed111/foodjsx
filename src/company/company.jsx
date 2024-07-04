import './company.css';
import img1 from './img/brain-1773892_1280.webp';
import img2 from './img/meeting-1453895_1280.webp';
import img3 from './img/graph-7128344_1280 (1).webp';
import team1 from './img/man-1845814_640.jpg';
import team2 from './img/man-6339003_640.jpg';
import team3 from './img/portrait-657116_640.jpg';
import team4 from './img/portrait-322470_640.jpg';
import team5 from './img/woman-8728020_640.webp';
import img from './img/expand-home-img.png';
import { useTranslation } from 'react-i18next';
import Languageselectors from '../components/language-selectors';
import End from '../End/End';

function Company() {
    const { t } = useTranslation();
    const array = [
        {
            img: img1,
            title: t("thinking")
        },
        {
            img: img2,
            title: t("doing")
        },
        {
            img: img3,
            title: t("result")
        }
    ];
    const team = [
        {
            img: team1,
            Name: "Alexander Benjamin"
        },
        {
            img: team2,
            Name: "Christopher Daniel"
        },
        {
            img: team3,
            Name: "Ethan Matthew"
        },
        {
            img: team4,
            Name: "Emily Matthuse"
        },
        {
            img: team5,
            Name: "Sophia Isbell"
        }
    ];

    return (
        <>
            <div className="container-fluid b">
                <Languageselectors />
                <div className='main'>
                    <p>{t("company_description")}</p>
                </div>
            </div>
            <div className="container">
                <h1>{t("how_we_did_this")}</h1>
                <div className="row images">
                    {array.map((item, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <img src={item.img} alt={item.title} className='img-fluid imggs' />
                            <p className='titles'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='container call'>
                <div className='row align-items-center'>
                    <div className='col-12 col-md-6 talking'>
                        <p className='title-talk'>{t("call_us_1")}</p>
                        <p className='title-talk'>{t("call_us_2")}</p>
                        <p className='title-talk'>{t("call_us_3")}</p>
                    </div>
                    <div className='col-12 col-md-6'>
                        <img src={img} alt="Call Us" className='img-fluid' />
                    </div>
                </div>
            </div>
            <div className="container">
                <h1>{t("our_team")}</h1>
                <div className='row'>
                    {team.map((items, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                            <img src={items.img} className='taemimg img-fluid' alt={items.Name} />
                            <p className='nameteam'>{items.Name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <End />
        </>
    );
}

export default Company;
