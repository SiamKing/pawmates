import React, { Component } from 'react'

import SearchContainer from './containers/SearchContainer'

class Home extends Component {


    render() {
        return (
            <div className="hero">
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