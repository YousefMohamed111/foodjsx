// import React from 'react';
// import './Home.css';
// import img from './img/delivery-guy-1424808_1280.webp';
// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// function Home() {
//     const { t } = useTranslation()
//     return (
//         <div className='mm container-fluid'>
//             <div className='row align-items-center'>
//                 <div className='col-lg-12 col-sm-12 col-xl-12 col-xxl-12 col-xs-12 content text'>
//                     <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mk'>{t("tiredOfGoingToRestaurants")}</h1>
//                     <Link to="./Delivery"><button type="button" class="btn btn-primary">Get Started</button></Link>
//                 </div>
//                 <div className='col-lg-12 col-sm-12 col-xl-12 col-xxl-12 col-xs-12 content image'>
//                     <img src={img} className='img-deliver' alt='food delivery'></img>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;
import React from 'react';
import './Home.css';
import img from './img/delivery-guy-1424808_1280.webp';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();
    return (
        <div className='mm container-fluid'>
            <div className='row align-items-center'>
                <div className='col-lg-6 col-md-12 col-sm-12 text-center text-lg-left o'>
                    <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mk'>{t("tiredOfGoingToRestaurants")}</h1>
                    <Link to="./Delivery">
                        <button type="button" className="btn btn-primary mt-3">{t("Get Started")}</button>
                    </Link>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 text-center oo'>
                    <img src={img} className='img-deliver' alt='food delivery'></img>
                </div>
            </div>
        </div>
    );
}

export default Home;
