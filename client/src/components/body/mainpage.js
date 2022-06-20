import { useState } from 'react';
import Header from '../header/header'
import { Footer } from './footer';
import Searchbar from './searchbar';
import SearchResults from './searchresults';

const MainPage = () => {

    const[searchResults, setSearchResults] = useState({});

    return (
        <div className="body-container">
            <Header />
            <Searchbar 
            searchResults={searchResults}
            setSearchResults={setSearchResults} 
            />
            <SearchResults
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            />
            <Footer />
        </div>
    )
}

export default MainPage;
