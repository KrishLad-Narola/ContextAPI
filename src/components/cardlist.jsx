import React, { useState, useEffect } from 'react';
import Card from "./Card";

const CardList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCard = async () => {
            try {

                const photoResponse = await fetch('https://jsonplaceholder.typicode.com/photos');
                if (!photoResponse.ok) {
                    throw new Error(`Error: ${photoResponse.status}`);
                }
                const photosData = await photoResponse.json();


                const commentResponse = await fetch('https://jsonplaceholder.typicode.com/comments');
                if (!commentResponse.ok) {
                    throw new Error(`Error: ${commentResponse.status}`);
                }
                const commentsData = await commentResponse.json();


                const combinedData = photosData.slice(0, 50).map(photo => {
                    const relatedComments = commentsData.filter(
                        comment => comment.postId === photo.id
                    );
                    return {
                        ...photo,
                        comments: relatedComments
                    };
                });

                setData(combinedData);
                setLoading(false);

            } catch (err) {
                setError(err.message);
                setLoading(false);
                console.error("Fetching error:", err);
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
        <div className="flex flex-wrap justify-center gap-4">``
            {data.map(item => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    );
};

export default CardList;