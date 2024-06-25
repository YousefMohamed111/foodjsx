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
    const [message, Setmesssage] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://pizza-and-desserts.p.rapidapi.com/desserts',
                headers: {
                    'X-RapidAPI-Key': 'ddf881fae0mshe761ff8e4a2b0cbp116c40jsne983689f024f',
                    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
                }
                // لو  خلص عدد مرات ال request api  
                // headers: {
                //     'x-rapidapi-key': 'bd47444328msh75f1580f52b7bc9p1ef4aajsna79c6ca80cec',
                //     'x-rapidapi-host': 'pizza-and-desserts.p.rapidapi.com'
                // }
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
        if (address.trim() !== "") {
            setAddress("");
            setOrderSent(true);
            setTotalPriceSweet(0);
            setTotalPricePizza(0);
            localStorage.removeItem('totalPricePizza');
            setItemQuantities({});
        }
        else {
            Setmesssage(t("w"));

        }
    }
    return (
        <div>
            <Languageselectors />
            <h1 className='q'>{t("welcome")}</h1>
            <h1 className='q'>{t("bestMeals")} </h1>
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
