import React, { useState } from 'react';

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submit action
        console.log("Search query submitted:", searchQuery);
        // Add additional actions here, such as searching data or calling an API
    };

    return (
        <div className="flex justify-center items-center py-2 px-4"> {/* Background and padding */}
            <form onSubmit={handleSubmit} className="w-full max-w-[976px]">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder="Search"
                    className="w-full px-3 py-2 border-2 border-[#9e2a2b] focus:outline-none focus:border-[#540b0e] rounded-lg text-lg"
                />
            </form>
        </div>
    );
}

export default SearchBar;
