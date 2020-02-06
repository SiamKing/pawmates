import React, { Component } from 'react'
import { connect } from "react-redux";
import { push } from "connected-react-router";

import SearchContainer from './containers/SearchContainer'
import Loader from "./modules/Loader";
import ErrorModal from './modules/ErrorModal'


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
        const { animals, loading, error, showErrorModal } = this.props
        return (
            <div className="hero">
                <Loader loading={loading} />
                {   showErrorModal ?
                    <ErrorModal showModal={showErrorModal} closeModal={this.handleCloseModal} error={error} />
                    : null
                }
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