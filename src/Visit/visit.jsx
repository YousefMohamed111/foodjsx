// import React from 'react'
// import './visit.css'
// import img from './img/maxresdefault.jpg'
// import img1 from './img/th (1).jpg'
// import img2 from './img/th (2).jpg'
// import img3 from './img/th (3).jpg'
// import img4 from './img/th.jpg'
// import img5 from './img/Maytag-ColinFergusonAd_1502383215273_63963743_ver1.0_900_675.jpg'
// import { useTranslation } from 'react-i18next';
// function Visit() {
//     const { t } = useTranslation();
//     return (
//         <div className='container '>
//             <div className='row'>
//                 <h1 className='celebrity'>{t("celebrity")}</h1>
//                 <div className='visiter col-lg-12 col-md-12 col-sm-12 col-xl-12 col-xxl-12'>
//                     <img src={img} className='img1' />
//                     <img src={img1} className='img2' />
//                     <img src={img2} className='img3' />
//                     <img src={img3} className='img4' />
//                     <img src={img4} className='img5' />
//                     <img src={img5} className='img6' />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Visit;
import React from 'react'
import './visit.css'
import img from './img/maxresdefault.jpg'
import img1 from './img/th (1).jpg'
import img2 from './img/th (2).jpg'
import img3 from './img/th (3).jpg'
import img4 from './img/th.jpg'
import img5 from './img/Maytag-ColinFergusonAd_1502383215273_63963743_ver1.0_900_675.jpg'
import { useTranslation } from 'react-i18next';

function Visit() {
    const { t } = useTranslation();
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='celebrity'>{t("celebrity")}</h1>
                <div className='visiter col-12'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
                            <img src={img} className='img-fluid' alt='celebrity1' />
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
                            <img src={img1} className='img-fluid' alt='celebrity2' />
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
                            <img src={img2} className='img-fluid' alt='celebrity3' />
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
                            <img src={img3} className='img-fluid' alt='celebrity4' />
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
                            <img src={img4} className='img-fluid' alt='celebrity5' />
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
                            <img src={img5} className='img-fluid' alt='celebrity6' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visit;
