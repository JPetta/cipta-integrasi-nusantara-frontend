import React from 'react';

const GifItem = ({ gif }) => {
  return (
    <div className="card">
      <img src={gif.images.fixed_height.url} className="card-img-top" alt={gif.title} />
    </div>
  );
};

export default GifItem;