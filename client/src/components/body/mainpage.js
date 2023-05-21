import { useState } from 'react';
import Header from '../header/header'
import { Footer } from './footer';
import Searchbar from './searchbar';
import SearchResults from './searchresults';


const MainPage = () => {
    const[searchResults, setSearchResults] = useState({});
    const[resultsLoading, setResultsLoading] = useState(false);

    return (
        <div className="body-container">
            <Header />
            <Searchbar 
            setSearchResults={setSearchResults} 
            resultsLoading={resultsLoading}
            setResultsLoading={setResultsLoading}
            />
            <SearchResults
            searchResults={searchResults}
            resultsLoading={resultsLoading}
            />
            <Footer />
        </div>
    )
}


export default MainPage;
