import React, { useState, useEffect } from "react";
import './Delivery.css'
import { useTranslation } from 'react-i18next';
import Languageselectors from '../components/language-selectors';

function Delivery() {
    const [data, setData] = useState([]);
    const { t } = useTranslation();
    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=12.91285&longitude=100.87808&limit=30&currency=USD&distance=2&open_now=false&lunit=km&lang=en_US';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'ddf881fae0mshe761ff8e4a2b0cbp116c40jsne983689f024f',
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result);
                setData(result.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="div">
                <Languageselectors />
                <p className="Welcome">{t("English")}</p>
                <div className="delivery-container">
                    {data.map((item, index) => (
                        <div key={index} className="delivery-item">
                            {item.photo && item.photo.images && (
                                <img src={item.photo.images.medium.url} alt={item.name} className="delivery-image" />
                            )}
                            <div className="delivery-details">
                                <p className="delivery-name">{item.name}</p>
                                <p><span className="information">Address:</span>{item.address}</p>
                                <p><span className="information">Phone:</span>{item.phone}</p>
                                <p><span className="information">Loation:</span>{item.location_string}</p>
                                <p><span className="information">Ranking:</span> {item.ranking}</p>
                                <p><span className="information">Rating: </span>{item.rating}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Delivery;
