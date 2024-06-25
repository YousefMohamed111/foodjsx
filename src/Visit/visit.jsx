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
        <div className='container '>
            <h1 className='celebrity'>{t("celebrity")}</h1>
            <div className='visiter'>
                <img src={img} className='img1' />
                <img src={img1} className='img2' />
                <img src={img2} className='img3' />
                <img src={img3} className='img4' />
                <img src={img4} className='img5' />
                <img src={img5} className='img6' />
            </div>
        </div>
    )
}

export default Visit;
