import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4 transition duration-300 hover:shadow-xl">
      <div className="font-bold text-xl mb-2 text-gray-800">{item.albumId || '1'}</div>
      <div className="font-bold text-xl mb-2 text-gray-800">{item.id || 'Untitled'}</div>
      <div className="font-bold text-xl mb-2 text-gray-800">{item.title || 'accusamus beatae ad facilis cum similique qui sunt'}</div>
      <div className="font-bold text-xl grid grid-cols-3  mb-2 text-gray-800">{item.url || 'Untitled'}
        <img  src={'https://jsonplaceholder.typicode.com/photos.jpeg'} />
      </div>
      <div className="font-bold text-xl mb-2 text-gray-800">{item.thumbnailUrl || 'Untitled'}
        <img  src="https://via.placeholder.com/150/92c952.jpeg" />
      </div>



      <p className="text-gray-700 text-base">{item.body || item.text}</p>

    </div>
  );
};

export default Card;
