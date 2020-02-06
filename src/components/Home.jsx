import React, { Component } from 'react'
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { bindActionCreators } from 'redux';

import SearchContainer from './containers/SearchContainer'
import Loader from "./Loader";
import ErrorModal from './errors/ErrorModal'


class Home extends Component {

    componentDidUpdate = () => {
        if (this.props.animals.length > 0) {
            this.props.goToPawmatesPage();
        }

    }

    handleCloseModal = () => {
        this.props.closeErrorModal();
    }

    render() {
        console.log(this.props.error)
        return (
            <div className="hero">
                <Loader loading={this.props.loading} />
                <ErrorModal showModal={this.props.showErrorModal} closeModal={this.handleCloseModal} />
                <div className="hero-container d-flex flex-column">
                    <div className="hero-text-wrapper">
                        <div className="hero-text">
                            <h1 className="display-4">
                            Find your <span className="font-weight-normal">Pawmate</span>{" "}
                            today
                            </h1>
                        </div>
                    </div>
                    <SearchContainer className="align-self-end" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        animals: state.animals.animals,
        loading: state.animals.requesting,
        error: state.animals.error,
        showErrorModal: state.animals.showErrorModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToPawmatesPage: () => dispatch(push('/pawmates')),
        closeErrorModal: () => dispatch({ type: "CLOSE_MODAL" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)