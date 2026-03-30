

import React, { useState, useEffect } from 'react';
import Card from "./Card"
import Post from './post';


const CardList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [post , setPost] = useState([]);
    const [filter , setFilter] = useState('');

    useEffect(() => {

        const fetchCard = async () => {
            try {

                const postResponse = await fetch('https://jsonplaceholder.typicode.com/photos')
                 if (!response.ok) throw new Error(`Status: ${response.status}`);
                const data = await postResponse.json();

                const commentResponse = await fetch('https://jsonplaceholder.typicode.com/comments')
                 if (!response.ok) throw new Error(`Status: ${response.status}`);
                const result = await commentResponse.json();

                const combinedData = postsData.map(post => {
                    const relatedComments = commentsData.filter(comment => comment.postId === post.id);
                    return { ...post, comments: relatedComments };
                });
                if (!response.ok) {
                    throw new Error(`error status: ${response.status}`);
                }
                setData(result);
                setLoading(false);
                setPost(combinedData);
            } catch (error) {
                setError(error.message);
                setLoading(false);
                console.log("error fetching :" , error);
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
