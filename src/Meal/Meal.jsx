import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Meal.css';
import { useTranslation } from 'react-i18next';
function Meal() {
    const { t } = useTranslation();
    const [data, setData] = useState([]);
    const [search, setSearch] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [visible, setVisible] = useState(21);
    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://chinese-food-db.p.rapidapi.com';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '645790372fmsh30212a493134df3p12fa90jsna1e061cdf3e8',
                    'x-rapidapi-host': 'chinese-food-db.p.rapidapi.com'
                }
            };
            //a467078698mshed7b3788870b23cp14b08ejsn1bc46f0d5953

            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                setData(result);
                setSearch(result);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError('Failed to fetch data. Please try again later.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filterData = (event) => {
        const value = event.target.value.toLowerCase();
        setSearch(data.filter(item => item.title.toLowerCase().includes(value)));
    };
    const filterEasy = () => {
        setSearch(data.filter(items => items.difficulty.includes("Easy")));
    }
    const filterMeadium = () => {
        setSearch(data.filter(items => items.difficulty.includes("Medium")));
    }

    const loadMore = () => {
        setVisible(prevVisible => prevVisible + 20);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="container">
            <p className="check">{t("check")}</p>
            <input type="text" className="form-control" onChange={filterData} placeholder="Enter your Meal " />
            <button className="btn btn-warning easy" onClick={filterEasy}>Easy</button>
            <button className="btn btn-warning easy" onClick={filterMeadium}>Medium</button>
            <div className="row">
                {search.slice(0, visible).map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-xl-4 col-xxl-4 mb-4">
                        <div className="card-custom">
                            <img className="card-img-custom" src={item.image} alt="Meal" />
                            <div className="card-content-custom">
                                <h5 className="card-title-custom">{item.title}</h5>
                                <p className="card-description-custom">{item.description}</p>
                                <Link to={`/details/${item.id}`} className="overlay-button-custom">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {visible < search.length && (
                <button className="btn btn-warning" onClick={loadMore}>Load More</button>
            )}
        </div>
    );
}

export default Meal;
