import React, { useState, useEffect } from "react";
import Post from "./post";

const PostList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [commentCount, setCommentCount] = useState([]);

    useEffect(() => {

        const FetchPostApi = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/comments");
                if (!response.ok) {
                    throw new Error(`error status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);            
                setCommentCount(result.length); 
                setLoading(false);
                
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        FetchPostApi();
    }, []);

    if (loading) {
        return <div className="text-center p-4">Loading Data...</div>;
    }

    if (error) {
        return (
            <div className="text-center p-4 text-red-500">
                Error: {error}
            </div>
        );
    }

    return (
        <div className="flex flex-wrap justify-center">
            {data.map((item) => (
                <Post key={item.id} item={item} />
            ))}
            
        </div>
    );
};

export default PostList;