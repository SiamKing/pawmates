import React, { Component } from 'react'
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { bindActionCreators } from 'redux';

import SearchContainer from './containers/SearchContainer'
import Loader from "./Loader";


class Home extends Component {

    componentDidUpdate = () => {
        if (this.props.animals.length > 0) {
            this.props.goToPawmatesPage();
        }
    }

    render() {
        console.log(this.props)
        return (
            <div className="hero">
                <Loader loading={this.props.loading} />
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
        loading: state.animals.requesting
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    goToPawmatesPage: () => push('/pawmates')
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)