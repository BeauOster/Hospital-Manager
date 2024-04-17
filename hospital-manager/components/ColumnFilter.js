import React from "react";

// Destructures column
export const ColumnFilter = ({ column }) => {
    // Destructure filterValue, setFilter from column prop
    const {filterValue, setFilter } = column
    return (
        <span>
            Search: {' '}
            <input value = {filterValue || ''} onChange={event => setFilter(event.target.value)} />
        </span>
    )
}