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
                    'X-RapidAPI-Key': 'a2e84088f0mshcf2778705172b26p1de1b8jsne28bfcc24188',
                    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
                }
                //8b07d925a9msh31e80e054dae041p16bafdjsn0a94e81f96de
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
