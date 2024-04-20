import React, { useEffect, useMemo, useState } from 'react'
import { useTable, useGlobalFilter, useFilters, useSortBy } from 'react-table'
import TEST_DATA from './TEST_DATA.json'
import { COLUMNS } from './Columns'
import styles from '../Styles/TableSorting.module.css'
import { GlobalFilter } from './GlobalFilter'
import Link from 'next/link';

// Define the TableSorting component
export const PatientTable = () => {

     // Memoize columns and data to optimize performance (useMemo is a hook)
     // Without memoization, COLUMNS and TEST_DATA would be recalculated every
     // time the component re-renders, even if the inputs haven't changed.
    const columns = useMemo(() => COLUMNS, [])
    //const data = useMemo(() => TEST_DATA, [])
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/get_patient_records');

                if (!response.ok) {
                    throw new Error('Failed to fetch data try again loser lol')
                }

                const data = await response.json();
                setData(data);

            } catch (error) {
                console.log('Error fetching data or smthing')
            }
        };

        fetchData();
    }, []);

    // Destructure tableInstance object to access necessary properties and methods
    const {
        getTableProps,
        getTableBodyProps, 
        headerGroups,
        rows, 
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable ({
            columns,
            data
        },
        useFilters,
        useGlobalFilter, // All of these are hooks DO. NOT. TOUCH. OR CHANGE ORDER.
        useSortBy)

    const { globalFilter } = state

    console.log('Data fetched successfully:', data);

    // Render the PatientTable component
    return (
        <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <table {...getTableProps()} className={styles.table}>

            {/* Render table header */}
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map( column => (

                                <th {...column.getHeaderProps(column.getSortByToggleProps)}>
                                    {column.render('Header')}
                                    <div>{column.canFilter ? column.render('Filter', ) : null}</div>
                                    <span>
                                        {/*Check if column is sorted, '' means render an empty string if not sorted at all.*/}
                                        {column.isSorted ? (column.isSortedDesc ?  ' 🔽' : ' 🔼') : ''}
                                    </span>
                                </th>
                                
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
                                    row.cells.map((cell, index) => {
                                        if (index === 0) {
                                            return (
                                                <td {...cell.getCellProps()}>
                                                <Link href={`/patients/${cell.value}`}>
                                                  {cell.render('Cell')}
                                                </Link>
                                                </td>
                                            );
                                        }
                                        return <td {...cell.getCellProps}>{cell.render('Cell')}</td> 
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
        </>
    )
}