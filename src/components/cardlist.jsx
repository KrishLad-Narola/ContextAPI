
import React, { useState, useEffect } from 'react';
import Card from "./card";

const CardList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchCard = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos');
                if (!response.ok) {
                    throw new Error(`error status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchCard();
    }, []);

    if (loading) {
        return <div className="text-center p-4">Loading data...</div>;
    }

    if (error) {
        return <div className="text-center p-4 text-red-500">Error: {error}</div>;
    }

    return (
        <div className="flex flex-wrap justify-center">
            {data.map(item => (

                <Card key={item.id} item={item} />
            ))}
        </div>
    );
};

export default CardList;
