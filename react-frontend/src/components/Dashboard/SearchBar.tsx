import React from "react";
import axios from "axios";
import '../../styles/Dashboard.css';

// search bar component with input field and search button
const SearchBar = () => {

    const onSearch = () => {
        console.log("searching database");
    };

    // TODO create post request to backend to search database for posts with query

    return (
        <div>
            <input className="input-search" type="text" placeholder="Search..." />
            <button className="search-button">Search</button>
        </div>
    );
}

export default SearchBar;