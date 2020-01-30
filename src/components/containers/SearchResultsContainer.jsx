import React, { Component } from 'react';
import { connect } from 'react-redux'

class SearchResultsContainer extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        animals: state.animals,
        error: state.error
    }
}

export default connect(mapStateToProps)(SearchResultsContainer)