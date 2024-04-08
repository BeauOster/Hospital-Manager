import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import TEST_DATA from './TEST_DATA.json'
import { COLUMNS } from './Columns'
// IMPORT CSS STYLING HERE

// Define the PatientTable component
export const PatientTable = () => {

     // Memoize columns and data to optimize performance (useMemo is a hook)
     // Without memoization, COLUMNS and TEST_DATA would be recalculated every
     // time the component re-renders, even if the inputs haven't changed.
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => TEST_DATA, [])

     // Initialize table instance using useTable hook
    const tableInstance = useTable({
        columns: columns,
        data: data
    })

    // Destructure tableInstance object to access necessary properties and methods
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,} = tableInstance

    // Render the PatientTable component
    return (
        <table {...getTableProps()}>

            {/* Render table header */}
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map( column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))
                        }
                    </tr>
                ))}
            </thead>

            {/* Render table body */}
            <tbody {...getTableBodyProps()}>
                {
                    rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => {
                                        return <td {...cell.getCellProps}>{cell.render('Cell')}</td> 
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
    )
}