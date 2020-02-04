import React, { Component } from "react";
import { connect } from 'react-redux';

import Search from '../search/Search'
import { fetchAnimals } from '../../actions/fetchAnimals'

class SearchContainer extends Component {

    handleDispatch = searchFields => {
        this.props.fetchAnimals({
          species: "cats",
          zipCode: 85281,
          radius: 25
        });
    }
    render() {
        return (
            <div className="search-container mt-lg-4 p-3">
                <button onClick={() => this.handleDispatch({species: 'cats', zipCode: 85281, radius: 25})}>Click</button>
                {/* <Search handleDispatch={this.handleDispatch} /> */}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAnimals: (searchFields) => dispatch(fetchAnimals(searchFields))
    }
}

export default connect(null, mapDispatchToProps)(SearchContainer);
