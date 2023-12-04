import React from "react";
import axios from "axios";

// search bar component with input field and search button
const SearchBar = () => {

    const onSearch = () => {
        console.log("searching database");
    };

    // TODO create post request to backend to search database for posts with query

    return (
        <div>
            <input className="input-search" type="text" placeholder="Search..." />
            <button>Search</button>
        </div>
    );
}

export default SearchBar;