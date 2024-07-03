// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { useTranslation } from 'react-i18next';
// import './End.css';

// function End() {
//     const { t } = useTranslation();

//     return (
//         <div className="container-fuield end">
//             <div>
//                 <h2 className="title">{t('About us')}</h2>
//                 <p className="title-2">{t('Community')}</p>
//                 <p className="title-2">{t('Foods made with 💖')}</p>
//                 <p className="title-2">{t('Call us')}</p>
//             </div>
//             <div>
//                 <h2 className="title">{t('Contacts')}</h2>
//                 <p className="title-2">+30 011373746734</p>
//                 <p className="title-2">+30 0128590384</p>
//                 <p className="title-2">+30 0128590384</p>
//                 <p className="title-2">+30 0128590384</p>
//             </div>
//             <div>
//                 <h2 className="title">{t('our Location')}</h2>
//                 <p className="title-2">{t('Alexandria-Maime')}</p>
//                 <p className="title-2">{t('Alexandria-Maime')}</p>
//                 <p className="title-2">{t('Alexandria-Maime')}</p>
//                 <p className="title-2">{t('Alexandria-Maime')}</p>
//             </div>
//             <div>
//                 <h2 className="title">{t('Follow us')}</h2>
//                 <FontAwesomeIcon icon={faFacebook}  className="logo"/>
//                 <FontAwesomeIcon icon={faInstagram} className="logo" />
//                 <FontAwesomeIcon icon={faTelegram}  className="logo"/>
//                 <FontAwesomeIcon icon={faTwitter} className="logo" />

//             </div>
//         </div>
//     );
// }

// export default End;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import './End.css';

function End() {
    const { t } = useTranslation();

    return (
        <div className="container-fluid end">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <h2 className="title">{t('About us')}</h2>
                    <p className="title-2">{t('Community')}</p>
                    <p className="title-2">{t('Foods made with 💖')}</p>
                    <p className="title-2">{t('Call us')}</p>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h2 className="title">{t('Contacts')}</h2>
                    <p className="title-2">+30 011373746734</p>
                    <p className="title-2">+30 0128590384</p>
                    <p className="title-2">+30 0128590384</p>
                    <p className="title-2">+30 0128590384</p>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h2 className="title">{t('our Location')}</h2>
                    <p className="title-2">{t('Alexandria-Maime')}</p>
                    <p className="title-2">{t('Alexandria-Maime')}</p>
                    <p className="title-2">{t('Alexandria-Maime')}</p>
                    <p className="title-2">{t('Alexandria-Maime')}</p>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h2 className="title">{t('Follow us')}</h2>
                    <FontAwesomeIcon icon={faFacebook} className="logo" />
                    <FontAwesomeIcon icon={faInstagram} className="logo" />
                    <FontAwesomeIcon icon={faTelegram} className="logo" />
                    <FontAwesomeIcon icon={faTwitter} className="logo" />
                </div>
            </div>
        </div>
    );
}

export default End;
