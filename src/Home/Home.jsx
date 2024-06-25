import React from 'react';
import './Home.css';
import img from './img/delivery-guy-1424808_1280.webp';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function Home() {
    const { t } = useTranslation()
    return (
        <div className='mm'>
            <div className='content text'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mk'>{t("tiredOfGoingToRestaurants")}</h1>
                <Link to="./Delivery"><button type="button" class="btn btn-primary">Get Started</button></Link>
            </div>
            <div className='content image'>
                <img src={img} className='img-deliver' alt='food delivery'></img>
            </div>
        </div>
    );
}

export default Home;
