import React, { Component } from 'react';
import { connect } from 'react-redux'

import Animals from '../animals/Animals';
import { fetchAnimals } from "../../actions/fetchAnimals";


class SearchResultsContainer extends Component {

    handleDispatch = pageNumber => {
        this.props.fetchAnimalsWithPage(this.props.searchFields, pageNumber)
    }

    render() {
        const { animals, meta } = this.props;
        console.log(this.props.searchFields)
        return (
            <div>
                {this.props.animals ?
                    <Animals animals={this.props.animals} meta={meta} handleDispatch={this.handleDispatch} />
                    : ""
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        animals: state.animals,
        meta: state.meta,
        searchFields: state.searchFields,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAnimalsWithPage: (searchFields, pageNumber) => dispatch(fetchAnimals(searchFields, pageNumber))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer)