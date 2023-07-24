import React, { useState, useEffect } from "react";
import axios from 'axios';
import SearchBar from "../components/SearchBar";
import GifList from "../components/GifList";

function GifScreen({defaultQuery}) {

    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        console.log("INI DEFAULT Q :"+defaultQuery)
        if(defaultQuery) {
            handleSearch(defaultQuery)
        } else {
            handleSearch("")
        }
      }, []);

    const handleSearch = async (searchQuery) => {
        try {
            const apiKey = "3cgntnoTG8VWzgsYsEDaGVPEri6wmY78"; // Replace with your GIPHY API key
            const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=9&q=${searchQuery}`);
            setGifs(response.data.data);
          } catch (error) {
            console.error('Error fetching GIFs:', error);
          }
    };

    return (
        <div >
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <SearchBar onSearch={handleSearch} />
                        <GifList gifs={gifs}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GifScreen;
