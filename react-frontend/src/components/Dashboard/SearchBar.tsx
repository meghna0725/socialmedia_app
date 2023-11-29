import React from "react";

// search bar component with input field and search button
const SearchBar = () => {

    const onSearch = () => {
        console.log("searching database");
    };

    return (
        <div>
            <input type="text" placeholder="Search..." />
            <button>Search</button>
        </div>
    );
}