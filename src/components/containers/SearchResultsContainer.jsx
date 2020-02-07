import React, { Component } from 'react';
import { connect } from 'react-redux'
import { push } from "connected-react-router";

import Animals from '../animals/Animals';
import { fetchAnimals } from "../../actions/fetchAnimals";
import Loader from '../modules/Loader'


class SearchResultsContainer extends Component {

    handleDispatch = pageNumber => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
        this.props.fetchAnimalsWithPage(this.props.searchFields, pageNumber)
    }

    componentDidMount = () => {
        if (this.props.animals.length === 0) {
            this.props.goToHomePage()
        } 
    }

    render() {
        const { animals, meta, searchFields } = this.props;
        console.log(this.props)
        return (
            <div>
                <Loader loading={this.props.loading} />
                {this.props.animals ?
                    <Animals animals={animals} meta={meta} handleDispatch={this.handleDispatch} searchFields={searchFields} />
                    : ""
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        animals: state.animals.animals,
        meta: state.animals.meta,
        searchFields: state.animals.searchFields,
        error: state.animals.error,
        loading: state.animals.requesting
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAnimalsWithPage: (searchFields, pageNumber) => dispatch(fetchAnimals(searchFields, pageNumber)),
        goToHomePage: () => dispatch(push("/"))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer)