import React, { useState } from "react";

const SearchBar = ({ searchItems, onFilter }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);

        // Filter items in the parent component
        onFilter(value);
    };

    return (
        <div>
            <input
                type="text"
                value={searchValue}
                onChange={handleInputChange}
                placeholder="Search for a product..."
            />
        </div>
    );
};

export default SearchBar;
