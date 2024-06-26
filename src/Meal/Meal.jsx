import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Meal.css'

function Meal() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://chinese-food-db.p.rapidapi.com';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '5c1a219683msh637b3d851371e16p186392jsn3f7df7678a5e',
                    'x-rapidapi-host': 'chinese-food-db.p.rapidapi.com'
                }
                //8b07d925a9msh31e80e054dae041p16bafdjsn0a94e81f96de
            };

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
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (


        <div className="container">
            <p className="check">Check Our Meals</p>
            <input type="text" className="form-control"  onChange={filterData} placeholder="Enter your Meal " />
            <div className="row">
                {search.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-6 mb-4">
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
        </div>

    );
}

export default Meal;
