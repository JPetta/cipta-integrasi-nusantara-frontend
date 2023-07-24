import React, {useState} from 'react';
import HomeScreen from './views/HomeScreen';
import GifScreen from './views/GifScreen';

function App() {

  const [isHome, setIsHome] = useState(true);
  const [query, setQuery] = useState("");

  const toggleHome = (searchQuery) => {
    setIsHome(!isHome);
      setQuery(searchQuery)
      console.log("OINKASOLINASDIOUNAS: " +query)
  };


  return (
    <div className="App">
      {isHome ? <HomeScreen toggleHome={toggleHome} /> : <GifScreen toggleHome={toggleHome} defaultQuery={query}/>}
    </div>
  );
}

export default App;
