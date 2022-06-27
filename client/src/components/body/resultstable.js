const ResultsTable = ({ searchResults }) => {

    return (
        <div className="results-table-container">
            {searchResults.map((result) => {
                return <table className="results-table">
                    <tr>
                        <th rowspan="1" colspan="2">{result.institutie[0] + ' ' + result.numar[0]}</th>
                    
                    </tr>
                    <tr>
                        <td>  
                            Parti: {result.parti[0].DosarParte.map((item) => {
                                return item.nume + ', ';
                            })};
                        </td>
                    </tr>
                    <tr>
                        <td>Obiect: {result.obiect[0]}</td>
                    </tr>
                </table>
            })};
        </div>
    )
}

export default ResultsTable;