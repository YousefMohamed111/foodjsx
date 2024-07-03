import React from 'react'
import img1 from './img/Hotpot.png'
import './chiefs.css'
import { useTranslation } from 'react-i18next';
function Chiefs() {
    const { t } = useTranslation();
    return (
        <div className='container ch'>
            <div className="row">
                <div className='col-lg-6 col-md-12 col-sm-12  col-xl-6 col-xxl-6 o2'>
                    <img src={img1} className='img-chief' />
                </div>
                <div className='cccc col-lg-6 col-md-12 col-sm-12  col-xl-6 col-xxl-6 o1'>
                    <p className='chief'>  {t('q')}</p>
                    <p className='chiefss'>{t('ww')}</p>
                    <p className='chiefss'>{t('e')}</p>
                    <p className='chiefss'>{t('r')}</p>
                    <p className='chiefss'>{t('t')}</p>
                </div>
            </div>
        </div>
    )
}

export default Chiefs;
