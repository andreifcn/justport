import ResultsTable from "./resultstable";

const SearchResults = ({ searchResults }) => {

    if (searchResults === null) console.log(searchResults)

    return (
        <div className="search-results-container">
            {console.log(searchResults)}
            {searchResults[0] && <ResultsTable searchResults={ searchResults } />}
        </div>
    )
}

export default SearchResults;