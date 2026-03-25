import React, { useState, useEffect } from "react";
import Post from "./post";

const PostList = () => {
    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [commentCount , setCommentCount] = useState(0)

    useEffect(() => {
        const FetchPostApiManagement = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/comments");
                if (!response.ok) throw new Error(`Status: ${response.status}`);
                
                const result = await response.json();
                setData(result);
                setCommentCount(result.length); 
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        FetchPostApiManagement();
    }, []);

    if (loading) return <div className="p-4">Loading...</div>;
    if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

    return (
        <div className="p-6">
          
            <div className="mb-4 p-4 bg-gray-300 rounded-lg">
                <h2 className="text-xl font-bold">Comments Data</h2>
                <p>Total Comments is :{data.length}</p>
            </div>

            <div className="flex flex-wrap gap-4">
                {data.map((item) => (
                    <Post key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default PostList;