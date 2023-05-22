const ResultsTable = ({ searchResults }) => {

    return (
        <div className="results-table-container">
            {searchResults.map((result, index) => {

                return <table className="results-table" key={index} >
                    <thead>
                        <tr>
                            <th colSpan="2" rowSpan="1">{result.institutie[0] + ' ' + result.numar[0]}</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="cell-description">Parti:</td>
                        <td>{result.parti[0].DosarParte.slice(0, 10).map((item) => {
                                return item.nume + ', ';
                            })};
                        </td>
                    </tr>
                    <tr>
                        <td className="cell-description">Obiect:</td>
                        <td>{result.obiect[0]}</td>
                    </tr>
                    </tbody>
                </table>
            })};
        </div>
    )
}


export default ResultsTable;