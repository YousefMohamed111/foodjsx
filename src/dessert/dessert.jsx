import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Languageselectors from '../components/language-selectors';

function Sweet() {
    const { t } = useTranslation();
    const [sweetData, setSweetData] = useState([]);
    const [totalPriceSweet, setTotalPriceSweet] = useState(0);
    const [itemQuantities, setItemQuantities] = useState({});
    const [totalPricePizza, setTotalPricePizza] = useState(0);
    const [address, setAddress] = useState("");
    const [orderSent, setOrderSent] = useState(false);
    const [message, Setmesssage] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://pizza-and-desserts.p.rapidapi.com/desserts',
                headers: {
                    'X-RapidAPI-Key': '5c1a219683msh637b3d851371e16p186392jsn3f7df7678a5e',
                    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
                }
                //8b07d925a9msh31e80e054dae041p16bafdjsn0a94e81f96de بدليها بدل من key لو خلص request
            };
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
            Setmesssage(t("w"));
        } else if (getTotalPrice() <= 0) {
            Setmesssage(t("ff"));
        } else {
            setAddress("");
            setOrderSent(true);
            setTotalPriceSweet(0);
            setTotalPricePizza(0);
            localStorage.removeItem('totalPricePizza');
            setItemQuantities({});
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
                    {message && <p className="error-message">{message}</p>}
                    <input type="text" placeholder={t("enterAddress")} value={address} onChange={(e) => setAddress(e.target.value)} />
                    <button onClick={handleSendOrder}>{t("sendOrder")}</button>
                </div>
            )}
            {orderSent && <p>{t("orderSent")}</p>}
        </div>
    );
}

export default Sweet;
