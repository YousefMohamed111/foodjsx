import './restuarant.css';
import { useEffect, useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Languageselectors from '../components/language-selectors';

function Restaurant() {
    const { t } = useTranslation();
    const [totalPricePizza, setTotalPricePizza] = useState(0);
    const [pizzaData, setPizzaData] = useState([]);
    const [itemQuantities, setItemQuantities] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://pizza-and-desserts.p.rapidapi.com/pizzas',
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
                setPizzaData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);


    function buyPizza(itemId, itemPrice) {
        setTotalPricePizza(prevTotalPricePizza => prevTotalPricePizza + itemPrice);
        setItemQuantities(prevQuantities => {
            const updatedQuantities = { ...prevQuantities };
            updatedQuantities[itemId] = (updatedQuantities[itemId] || 0) + 1;
            return updatedQuantities;
        });
    }
    function removePizza(itemId, itemPrice) {
        if (totalPricePizza - itemPrice >= 0 && itemQuantities[itemId] > 0) {
            setTotalPricePizza(prevTotalPricePizza => prevTotalPricePizza - itemPrice)
            setItemQuantities(prevQuantities => {
                const updatedQuantities = { ...prevQuantities };
                updatedQuantities[itemId] = (updatedQuantities[itemId] || 0) - 1;
                return updatedQuantities;
            });
        }
    }

    console.log(totalPricePizza);
    localStorage.setItem('totalPricePizza', totalPricePizza);

    return (
        <>
            <Languageselectors />
            <h1 className='q'>{t("welcome")}</h1>
            <h1 className='q'>{t("bestMeals")} </h1>
            <div className='container'>
                <div className='row'>
                    {pizzaData.map((item, index) => (
                        <div className='item' key={index}>
                            <img className='item-img' src={item.img} alt={item.name} />
                            <h1 className='item-name'>Name: {item.name}</h1>
                            <p className='item-description'>Description: {item.description}</p>
                            <p className='item-price'>Price: {item.price}$</p>
                            <div>
                                <button type="button" className="btn btn-warning" onClick={() => buyPizza(index, item.price)}>+</button>
                                <span>{itemQuantities[index] || 0}</span>
                                <button type="button" className="btn btn-warning" onClick={() => removePizza(index, item.price)}>-</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <h2>{t("totalPricePizza")} {totalPricePizza}$</h2>
            <Link to="/sweet"><button>{t("go")}</button></Link>

        </>
    );
}

export default Restaurant;
