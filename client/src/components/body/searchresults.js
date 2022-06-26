import ResultsTable from "./resultstable";

const SearchResults = ({ searchResults }) => {

    return (
        <div className="search-results-container">
           <ResultsTable searchResults={ searchResults } />
        </div>
    )
}

export default SearchResults;