import React from "react";

// @filter - value of the text input
// @setFilter - Setter function
export const GlobalFilter = ({ filter, setFilter }) => {
    return (
        <span>
            Search: {' '}
            <input value = {filter || ''} onChange={event => setFilter(event.target.value)} />
        </span>
    )
}