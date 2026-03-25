import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition duration-300 hover:shadow-xl m-4">
    
      {item.thumbnailUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img src={item.thumbnailUrl} alt={item.title} className="w-full h-full object-cover"/></div>
      )}

      <div className="p-6">
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-blue-600">ID: {item.id}</span>
        </div>
        
        <h3 className="font-bold text-xl mb-2 text-gray-800 leading-tight">
          {item.title || 'Untitled'}
        </h3>

        <p className="text-gray-700 text-base">
          {item.body || item.text || "No description available."}
        </p>
        {item.url && (
          <a href={item.url} className="text-xs text-blue-400 mt-4 block truncate hover:underline" target="_blank" rel="noopener noreferrer">
          {item.url}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;