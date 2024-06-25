import React from 'react'
import img1 from './img/Hotpot.png'
import './chiefs.css'
import { useTranslation } from 'react-i18next';
function Chiefs() {
    const { t } = useTranslation();
    return (
        <div className='ch'>
            <div>
                <img src={img1} className='img-chief' />
            </div>
            <div className='cccc'>
                <p className='chief'>  {t('q')}</p>
                <p className='chiefss'>{t('ww')}</p>
                <p className='chiefss'>{t('e')}</p>
                <p className='chiefss'>{t('r')}</p>
                <p className='chiefss'>{t('t')}</p>

            </div>
        </div>
    )
}

export default Chiefs;
