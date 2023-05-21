const ResultsTable = ({ searchResults }) => {

    return (
        <div className="results-table-container">
            {searchResults.map((result, key) => {

                return <table className="results-table" key={key} >
                    <thead>
                        <tr>
                            <th rowSpan="1" colSpan="2">{result.institutie[0] + ' ' + result.numar[0]}</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>  
                            Parti: {result.parti[0].DosarParte.slice(0, 10).map((item) => {
                                return item.nume + ', ';
                            })};
                        </td>
                    </tr>
                    <tr>
                        <td>Obiect: {result.obiect[0]}</td>
                    </tr>
                    </tbody>
                </table>
            })};
        </div>
    )
}


export default ResultsTable;