import { useState } from "react";


const Searchbar = ({ setSearchResults }) => {
    const[searchInput, setSearchInput] = useState('');

    const handleSearchInput = (event) => {
        event.preventDefault();
        return setSearchInput(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const getData = async () => {
            await fetch(`http://localhost:3001/query/?param=${searchInput}`, {
                method: "GET"
            })
            .then(response => response.json())
            .then(data => setSearchResults(data))
            .catch(err => console.error(err));
        }
        getData();
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="search-form">
                <input
                    type="text"
                    id="search-bar"
                    placeholder="Cauta dosar"
                    name="searchbar"
                    value={searchInput}
                    onChange={handleSearchInput} 
                />
                <button id="search-submit-button"  type="submit">Cauta</button>
            </div>
        </form>
    )
}


export default Searchbar;