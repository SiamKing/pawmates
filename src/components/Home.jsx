import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import SearchContainer from './containers/SearchContainer'
import Loader from "./Loader";


class Home extends Component {


    render() {
        return (
            <div className="hero">
                <Loader />
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

export default Home