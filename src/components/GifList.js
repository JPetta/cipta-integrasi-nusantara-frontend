import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GifItem from './GifItem';

const GifList = ({gifs}) => {

  return (
    <div className="container mt-3 mb-3">
      <div className="row">
        {gifs.map((gif) => (
          <div key={gif.id} className="col-md-4 mb-3">
            <GifItem gif={gif} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GifList;