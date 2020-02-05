import React, { Component } from "react";
import { css } from "@emotion/core";
// Another way to import. This is recommended to reduce bundle size
import RingLoader from "react-spinners/RingLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
`;

class Loader extends Component {

    render() {
        return (
            <div className="loader">
                { this.props.loading ?
                    <div className="sweet-loading">
                        <RingLoader
                            css={override}
                            size={100}
                            //size={"150px"} this also works
                            color={"#333"}
                            loading={this.props.loading}
                        />
                        <h3>Finding your Pawmate</h3>
                    </div >
                    : ""
                }
            </div>
        );
    }
}



export default Loader