
import React from "react";


const Post = ({ item }) => {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition duration-300 hover:shadow-xl m-4">

            {/* <div className=" text-xl mb-2 text-gray-800">{item.PostId || '1'}</div> */}
            <div className=" text-xl mb-2 text-gray-800">{item.id || '1'}</div>
            <div className=" text-xl mb-2 text-gray-800">{item.name || 'Untitled'}</div>
            <div className=" text-xl mb-2 text-gray-800">{item.email || 'Untitled'}</div>
            <p className="text-gray-700 text-base">{item.body || item.text}</p>


        </div>
    )

}


export default Post
