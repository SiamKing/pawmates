import React, { Component } from "react";

import Search from '../search/Search'

class SearchContainer extends Component {
    render() {
        return (
            <div className="search-container mt-lg-4 p-3">
                <Search />
            </div>
        )
    }
}

export default SearchContainer;
