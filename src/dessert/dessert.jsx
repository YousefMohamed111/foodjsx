import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Languageselectors from '../components/language-selectors';
import'./dessert.css'
function Sweet() {
    const { t } = useTranslation();
    const [sweetData, setSweetData] = useState([]);
    const [totalPriceSweet, setTotalPriceSweet] = useState(0);
    const [itemQuantities, setItemQuantities] = useState({});
    const [totalPricePizza, setTotalPricePizza] = useState(0);
    const [address, setAddress] = useState("");
    const [orderSent, setOrderSent] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://pizza-and-desserts.p.rapidapi.com/desserts',
                headers: {
                    'X-RapidAPI-Key': '645790372fmsh30212a493134df3p12fa90jsna1e061cdf3e8',
                    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
                }
            };//a467078698mshed7b3788870b23cp14b08ejsn1bc46f0d5953
            try {
                const response = await axios.request(options);
                setSweetData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const totalPricePizzaFromStorage = localStorage.getItem('totalPricePizza');
        if (totalPricePizzaFromStorage) {
            setTotalPricePizza(parseFloat(totalPricePizzaFromStorage));
        }
    }, []);

    function buySweet(itemId, itemPrice) {
        setTotalPriceSweet(totalPriceSweet + itemPrice);
        setItemQuantities(prevQuantities => {
            const updatedQuantities = { ...prevQuantities };
            updatedQuantities[itemId] = (updatedQuantities[itemId] || 0) + 1;
            return updatedQuantities;
        });
    }

    function removeSweet(itemId, itemPrice) {
        if (totalPriceSweet - itemPrice >= 0 && itemQuantities[itemId] > 0) {
            setTotalPriceSweet(totalPriceSweet - itemPrice);
            setItemQuantities(prevQuantities => {
                const updatedQuantities = { ...prevQuantities };
                updatedQuantities[itemId] = (updatedQuantities[itemId] || 0) - 1;
                return updatedQuantities;
            });
        }
    }

    const getTotalPrice = () => {
        return totalPriceSweet + totalPricePizza;
    }

    const handleSendOrder = () => {
        if (address.trim() === "") {
            setError(t("enterAddress"));
        } else if (getTotalPrice() <= 0) {
            setError(t("ff"));
        } else {
            setAddress("");
            setOrderSent(true);
            setTotalPriceSweet(0);
            setTotalPricePizza(0);
            localStorage.removeItem('totalPricePizza');
            setItemQuantities({});
            setError("");
        }
    }

    return (
        <div>
            <Languageselectors />
            <h1 className='q'>{t("welcome")}</h1>
            <h1 className='q'>{t("bestMeals")}</h1>
            <div className='container'>
                <div className='row'>
                    {sweetData.map((item, index) => (
                        <div className='item' key={index}>
                            <img className='item-img' src={item.img} alt={item.name} />
                            <h1 className='item-name'>Name: {item.name}</h1>
                            <p className='item-description'>Description: {item.description}</p>
                            <p className='item-price'>Price: {item.price}$</p>
                            <div>
                                <button type="button" className="btn btn-warning" onClick={() => buySweet(index, item.price)}>+</button>
                                <span>{itemQuantities[index] || 0}</span>
                                <button type="button" className="btn btn-warning" onClick={() => removeSweet(index, item.price)}>-</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <h2>{t("totalPrice")} {totalPriceSweet}$</h2>
            <p>{t("totalPricePizza")} {totalPricePizza}</p>
            <p>{t("totalPriceBoth")} {getTotalPrice()}</p>
            {!orderSent && (
                <div>
                    {error && <p className="error-message">{error}</p>}
                    <input
                        className="address"
                        type="text"
                        placeholder={t("enterAddress")}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        disabled={orderSent}
                    />
                    <button onClick={handleSendOrder} disabled={orderSent}>{t("sendOrder")}</button>
                </div>
            )}
            {orderSent && <p>{t("orderSent")}</p>}
        </div>
    );
}

export default Sweet;
