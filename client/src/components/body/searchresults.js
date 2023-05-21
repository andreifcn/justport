import ResultsTable from "./resultstable";
import LoadingSpinner from "./loadingspinner";


const SearchResults = ({ searchResults, resultsLoading }) => {

    return (
        <div className="search-results-container">
            {console.log(resultsLoading)}
            
            {resultsLoading ? 
            <LoadingSpinner /> : searchResults[0] && <ResultsTable searchResults={ searchResults } />}
        </div>
    )
}


export default SearchResults;