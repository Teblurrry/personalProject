import React, { useEffect, useState } from "react";

const TableDisplay = ({csvPath}) => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetch(csvPath)
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n').slice(1);
            const parseData = rows.map(row => {
                const columns = row.split(',');
                return {index: columns[0], value: parseInt(columns[1], 10)};
            });
            setTableData(parseData);
        })
        .catch(error => console.error('Error fetching the CSV file: ', error));
    }, [csvPath]);

    return (
        <div>
            <table className="table">
            <thead>
                <tr>
                    <th>Index #</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((row, index) => (
                    <tr key={index}>
                        <td>{row.index}</td>
                        <td>{row.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <img src={require('./result.png')} alt="result" />
        </div>
        
    );
};

export default TableDisplay;