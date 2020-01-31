import React, { Component } from 'react';
import { connect } from 'react-redux'

import Animals from '../animals/Animals';

class SearchResultsContainer extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.animals ?
                    <Animals animals={this.props.animals} />
                    : ""
                }}
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