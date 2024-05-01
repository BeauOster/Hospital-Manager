import { ColumnFilter } from './ColumnFilter'
import { format } from 'date-fns';

export const COLUMNS = [
    {
        Header: 'Patient ID',
        accessor: (row) => row[0],
        Filter: ColumnFilter
    },
    {
        Header: 'First Name',
        accessor: (row) => row[1],
        Filter: ColumnFilter
    },
    {
        Header: 'Last Name',
        accessor: (row) => row[2],
        Filter: ColumnFilter
    },
    {
        Header: 'Age',
        accessor: (row) => row[3],
        Filter: ColumnFilter
    },
    {
        Header: 'Gender',
        accessor: (row) => row[4],
        Filter: ColumnFilter
    },
    {
        Header: 'Date Of Birth',
        accessor: (row) => format(new Date(row[5]), 'dd/MM/yyyy'),
        Filter: ColumnFilter,
    }
]